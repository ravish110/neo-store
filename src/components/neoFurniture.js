import React from 'react'
import SectionTitle from './sectionTitle';
import neoPlus from '../assets/neoFHplus.png';
import { neoFurnitureimages } from '../utility/endpoints';

const NeoFurniture = () => {
    
  return (
    <div className='neo-furniture pb-16'>
        <SectionTitle title='#NEOSTOREfurniture' subTitle='Use #neostore on your post for a chance to be featured!' showLine={true}/>
        <div className='flex flex-wrap justify-between py-14'>
            {
                neoFurnitureimages.map((item,index) => (
                <div className='relative w-full md:w-auto' key={index}>
                    <img src={item?.img} alt='shade left' className='neoF w-full md:w-auto'/>
                    <img src={neoPlus} alt='pluse icon' className='absolute top-0 left-0 hidden right-0 bottom-0 m-auto'/>
                </div>
                ))
            }
        </div>
        <SectionTitle title='SIGN UP FOR NEWS & OFFERS!' subTitle='Subscribe to the weekly newsletter for all the latest updates' showLine={false}/>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8">
                <div class="mx-auto max-w-screen-md sm:text-center">
                    <form action="#">
                        <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm md:w-1/2  sm:flex sm:space-y-0 relative">
                            <div class="relative w-full">
                                <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                <input class="block p-3 pl-15 w-full text-sm text-gray-900 border-b border-black" placeholder="Enter your email" type="email" id="email" required=""/>
                            </div>
                            <div className='absolute right-0 top-4 md:top-auto'>
                                <button type="submit" class="py-3 px-5 text-lg">&#8594;</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default NeoFurniture