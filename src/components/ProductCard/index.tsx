import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from '@/lib/utils/classNames'
type Props = {
    product: Product
}

export default function ProductCard({product}: Props) {
    const { _id, name, price, image, about, isActive, tags } = product;
  return (
    <Link href={`/product/${_id}`}>
      <div className='flex flex-col justify-start gap-4 hover:cursor-pointer bg-white text-black text-center'>
        <div>
          <Image
          src={image}
          layout='responsive'
          alt='Product Image'
          height='100%'
          width='100%'
          />
        </div>
        <div className='flex flex-col justify-start h-full p-2'>
          <h2 className='text-2xl font-bold'>{name.toUpperCase()}</h2>
          <div className='h-1 bg-black w-full my-4' />
          <p className=''>{about}</p>
          <div className='flex flex-col h-full w-full self-end mt-4 justify-end'>
          <div className='flex flex-wrap justify-center gap-1 mb-1'>
            {tags.map((tag, i) => {
              return (
                <span key={i} className='text-xs font-bold p-1 bg-black/10 rounded-md'>
                  {tag}
                </span>
            )})}
          </div>
          <h3 className='font-bold text-2xl mb-4 drop-shadow'>${price} USD</h3>
            <button
            disabled={!isActive}
            className={
              classNames(
                !isActive && 'text-red-500 bg-red-500/25 cursor-auto',
                isActive && 'hover:-translate-y-1 hover:scale-[101%] hover:shadow-md transition',
                'h-16 p-4 w-full bg-black/10 tracking-widest text-2xl drop-shadow')
            }>
              {isActive ? 'ADD TO BAG' : 'SOLD OUT'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
