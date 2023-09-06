import React from 'react';
import SectionTitle from './sectionTitle';

import rating from '../assets/rating.png';
import heart from '../assets/heart.png';
import cart from '../assets/cart.png';

import { newArrivals } from '../utility/endpoints';

import { bestSellers } from '../utility/endpoints'

const BestSellers = () => {
   
   
  return (
    <div className='BestSellers pt-4 pb-14'>
        <SectionTitle title='Bestsellers' subTitle='Sitewide Discounts & Savings of up to 25%' showLine={true} className='mb-14'/>
        <div className='bestsellersBox flex justify-between flex-wrap mt-14'>
            {
                bestSellers.map((item,index)=>(
                <div className='flex flex-wrap w-auto self-start md:w-1/3' key={index}>
                    <img src={item?.img} alt='best sell image 1' className='w-full md:w-1/2 mb-6'/>
                    <div className='flex flex-col p-5 justify-center mb-5 md:mb-0'>
                        <img src={rating} alt='product rating' className='mb-4'/>
                        <p className='text-sm font-bold'>{item?.title}</p>
                        <p className='text-sm font-bold'><span className='line-through text-gray-400'>{item?.actualPrice}</span> {item?.discountPrice}</p>
                        <div className='flex mt-6'>
                            <img src={heart} alt='like' className='p-2 border-2 cursor-pointer'/>
                            <img src={cart} alt='cart' className='p-2 border-2 ml-3 cursor-pointer'/>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
        <div className='newArrivals flex flex-wrap md:justify-between mt-10'>
            {
                newArrivals.map((item,index)=>(
                    <div className='text-white relative' key={index}>
                        <img src={item?.img} alt='new arrivals'/>
                        <div className=' content-center justify-center flex flex-col absolute text-center left-0 right-0 top-0 bottom-0 m-auto'>
                            <p className='text-sm'>{item?.tag}</p>
                            <h4 className=' text-xl font-medium'>{item?.title}</h4>
                            <button className='cursor-pointer text-sm underline mt-4'>{item?.button}</button>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default BestSellers