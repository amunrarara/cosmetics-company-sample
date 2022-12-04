import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from '@/lib/utils/classNames'
type Props = {
    product: Product
}

export default function ProductCard({product}: Props) {
    const { _id, name, price, image, about, isActive } = product;
  return (
    <Link href={`/product/${_id}`}>
      <div className='flex flex-col justify-start gap-4 hover:cursor-pointer'>
        <div>
          <Image
          src={image}
          layout='responsive'
          alt='Product Image'
          height='100%'
          width='100%'
          />
        </div>
        <div className='p-2'>
          <h2 className='text-2xl font-bold'>{name}</h2>
          <h3 className='font-bold'>${price} USD</h3>
          <div className='h-1 bg-white w-full my-2' />
          <p>{about}</p>
          {!isActive && <h2 className='text-red-500 font-bold'>SOLD OUT</h2>}
          <div className='flex mt-4 justify-end'>
            <button
            disabled={!isActive}
            className={
              classNames(
                !isActive && 'line-through cursor-auto',
                'bg-white/10 p-4 px-6 ml-auto rounded-md')
            }>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
