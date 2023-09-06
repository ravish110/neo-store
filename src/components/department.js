import React from 'react';
import { departments } from '../utility/endpoints';
import SectionTitle from './sectionTitle';

function Department() {
  
  return (
    <div className='department py-14'>
        <SectionTitle title='Shop by Department' subTitle='Sitewide Discounts & Savings of up to 25%' showLine={true}/>
        <div className='flex justify-center flex-wrap'>
            {
                departments.map((department,index)=>(
                    <div className='departmentBox' key={index}>
                        <img src={department?.icon} alt='department-icons' className='w-100'/>
                        <p className='section-subTitle '>{department?.title}</p>    
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Department