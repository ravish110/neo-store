import React from 'react';
import CountDownTimer from './countDownTimer';
import {specialOfferCards, additionalOffers} from '../../utility/endpoints';

import offer21 from '../../assets/offer2-1.png';
import redLabel from '../../assets/redLabel.png';

const SpecialOffer = () => {
  
  return (
    <>
    <div className='SpecialOffer'>
        <div>
          <h3>Special Offer &nbsp;
            <span className='endingTimer bgRed text-white py-4 px-7 inline-block text-base lowercase'>
              <CountDownTimer/>
            </span>
          </h3>
          <div className='md:flex justify-between pt-4'>
            {
              specialOfferCards.map((cards,index) => (     
                <div className='offerCards mt-4 md:mt-0' key={index}>
                    <p className='font-semibold'>{cards.title}</p>
                    <p className='textRed font-semibold mb-5'>{cards.price}</p>  
                    <img src={cards.img} alt='offer-icons' className='w-100'/>
                    <div className='progressBar'></div>
                    <div className='md:flex justify-between'>
                      <p className='font-semibold'>{cards.stock}</p>
                      <img src={cards.rating} alt='rating'/>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
    <div className='additionalOfferSection md:flex justify-between pb-20'>
      <div className='offerBigImg relative md:w-1/2'>
         <img src={offer21} alt='offer big image' />   
         <img src={redLabel} alt='redLabel for text' className='absolute -left-4 top-14'/>
         <div className='absolute top-28 text-white bgRed left-8 pb-3'>
          <p className='text-base'>SOFA & CHAIRS</p> 
          <h3 className='text-4xl'>Need it fast?</h3>
          <p>See what's in stock!</p>
          <button className='cursor-pointer underline'>Shop now</button>
         </div>
      </div>
      <div className='offerBoxs flex flex-wrap md:w-1/2 justify-around content-between'>
        {
          additionalOffers.map((item,index)=>(
          <div className='relative' key={index}>
            <img src={item?.img} alt='offer img box'/>
            <p className='text-white bgRed text-sm py-2 px-3 absolute top-3 right-3'>{item.discount}% <br/> OFF</p>
            <h4 className=' text-xl font-bold mt-3'>{item?.title}</h4>
            <span className=' text-neutral-500'>{item?.subTitle}</span>
          </div>
          ))
        }
      </div>
    </div>
    </>
  )

}

export default SpecialOffer