import { addItem } from '@/redux/slice/cartSlice';
import type { Product } from '@/redux/slice/productSlice';
import React, { use } from 'react'
import { useDispatch } from 'react-redux'

export default function ProductCard({product}: {product: Product}) {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white ">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={product.thumbnail} alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.discountPercentage}% OFF</span>
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className=" tracking-tight font-semibold text-slate-900">{product.title}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p className='flex gap-4 items-center'>
                            <span className="text-xl font-bold text-slate-900">${product.price}</span>
                            <span className="text-sm text-slate-600 line-through">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
                        </p>
                        
                    </div>
                    <div className="flex justify-between w-full gap-4 items-center">
                        <button onClick={() => dispatch(addItem())} className="flex w-full items-center active:scale-105 transition-all duration-100 justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white cursor-pointer focus:outline-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart
                        </button>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
