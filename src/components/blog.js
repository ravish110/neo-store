import React from 'react';
import SectionTitle from '../components/sectionTitle';

import {blogs} from '../utility/endpoints';

const Blog = () => {
  return (
    <div className='blog-section pb-28'>
        <SectionTitle title='From Our Blog' subTitle='See how our customers have styled davici products in their home' showLine={true}/>
        <div className='flex flex-wrap md:flex-nowrap justify-between pt-12'>
            {
                blogs.map((item,index) => (
                    <div className='relative border mx-3 text-center' key={index}>
                        <img src={item?.img} alt='blog image' className='w-full md:h-64'/>
                        <p className='bg-white  text-xl py-2 px-4 absolute top-3 left-3'>28 <br/> <span className='text-xs pt-1 border-t-2 border-black'>NOV</span></p>
                        <p className='textRed text-xs font-medium pt-5'>{item?.tag}</p>
                        <h4 className='text-xl font-medium border-b py-4'>{item?.title}</h4>
                        <p className=' text-sm font-light p-4'>{item?.desc}</p>
                        <button className='btn cursor-pointer underline text-sm font-medium pb-4'>READ MORE</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blog