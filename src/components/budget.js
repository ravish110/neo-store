import React from 'react';
import SectionTitle from './sectionTitle';
import { budegtProducts } from '../utility/endpoints';

const Budget = () => {
  return (
    <div className='budgetSection pb-14'>   
        <SectionTitle title='FURNITURE FOR EVERY BUDGET' subTitle='From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value.' showLine={true}/>
        <div className='flex flex-wrap justify-between'>
            {
                budegtProducts.map((item,index)=>(
                    <div className='budgetBox mt-10' key={index}>
                        <img src={item?.img} alt='budegt furniture'/>
                        <div className='flex justify-between bg-gray-100 p-3 shrink-0 grow-0 items-center'>
                            <p className='font-semibold'>{item.title}<br/>
                            <span className='textRed font-semibold mb-5'>{item?.price}</span></p>  
                            <button className='cursor-pointer bgRed text-white py-2 px-10'>shop now</button>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Budget