import React from 'react'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import { products } from '@/public/data/data'

function Content () {
  return (
    <div className='content-grid gap-16 p-4'>
      {products.map(product => {
        return (
          <ProductCard
            key={product._id}
            product={product}
          />
        )
      })}
    </div>
  )
}

export default function SearchPage() {

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
            onChange={(e) => (e.target.value = e.target.value.toUpperCase().slice(0,42))}
            />
          </div>
        </section>
          {Content()}
      </div>

    </main>
  )
}
