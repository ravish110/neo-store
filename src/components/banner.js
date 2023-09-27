import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './../assets/banner.png';
import image2 from './../assets/banner.png';

const Banner = () => {
    const arrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        cursor: 'pointer',
        color: 'rgba(0, 0, 0, 0.3)',
        border: 'none',
        borderRadius: '50%',
        padding: 10,
        fontSize: '24px',
        fontWeight: 'bold',
      };
  return (
    <div>
      <Carousel
        className='relative'
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 15 }}
              >
               &lt;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
              >
                &gt;
              </button>
            )
          }
      >
        <div>
          <div className='bannerText'>
            <h1>Furniture <br/> 2022</h1>
            <h3 className='font-bold mt-4'>NEW ARRIVALS</h3>
            <h2>Spring <br/>
            Collection</h2>
            <button className='btn bgRed text-white w-32 p-2 mt-12'>Shop now</button>
          </div>
          <img src={image1} alt="Banner Image 1" />
        </div>
        <div>
            <div className='bannerText'>
                <h1>Furniture <br/> 2022</h1>
                <h3 className='font-bold mt-4'>NEW ARRIVALS</h3>
                <h2>Spring <br/>
                Collection</h2>
                <button className='btn bgRed text-white w-32 p-2 mt-12'>Shop now</button>
            </div>
          <img src={image2} alt="Banner Image 2" />
        </div>
      </Carousel>
      
    </div>
  );
};

export default Banner;
