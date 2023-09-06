import React from 'react';
import { trendings } from '../utility/endpoints';
import SectionTitle from './sectionTitle';

const Trending = () => {
  return (
    <div className='trending py-14'>
        <SectionTitle title='TRENDING' subTitle='Explore a wide range of affordable, well-designed and functional home furnishing solutions' showLine={true}/>
        <div className='flex justify-around flex-wrap mt-12 text-left'>
            {
                trendings.map((item,index) => (
                <div key={index}>
                    <img src={item?.img} alt='trending-icons' className='w-100'/>
                    <p>{item.title}<br/>{item.price}</p>    
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Trending