import React, { useState, useCallback, useEffect } from 'react'
import MainLayout from '@/layouts/Main'
import Banner from '@/components/Banner'
import fetchProducts from '@/lib/utils/fetchProducts'
import ProductCard from '@/components/ProductCard'
// @ts-ignore-line
import debounce from "lodash/debounce";

function Content (products: Product[]) {
  return (
    <MainLayout>
      <div className='content-grid gap-16 p-4 pb-8'>
        {products.map(product => {
          return (
            <ProductCard
              key={product._id}
              product={product}
            />
          )
        })}
      </div>
    </MainLayout>
  )
}

export default function SearchPage() {
  const [value, setValue] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetchProducts(value).then((products: Product[]) => {
      setProducts(products)
      setIsLoading(false)
    })
  },[])

  const handleChange = (e: any) => {
    let { value } = e.target;
    value = value.toUpperCase().slice(0,42);
    setValue(value);
    handleSearch(value);
  };

  const handleSearch = useCallback(
    debounce((value: string) => {
      fetchProducts(value).then((products: Product[]) => {
        setProducts(products)
      })
    }, 500),
    []
  );

  return (
    <main>
      <div className=''>
        <Banner />
        <section className='flex flex-col justify-around p-16'>
          <div className='relative h-10 '>
            <div className='absolute ml-4 mt-1 w-1 h-8 bg-black z-10 animate-pulse-fast' />
            <input
            type='text'
            className='h-full w-full pl-8 bg-white text-black font-bold text-2xl tracking-widest focus:outline-none'
            value={value}
            onChange={handleChange}
            />
          </div>
        </section>
        <section className='px-16'>
          {isLoading ? <h1>Loading...</h1> : Content(products)}
        </section>
      </div>

    </main>
  )
}
