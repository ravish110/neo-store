import React from 'react';
import email from '../assets/email.png';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';

const footer = () => {
  return (
   <>
    <footer className="bg-black">
        <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex justify-between">
                <div className="mb-6 md:mb-0 w-1/3">
                    <a href="/" className="flex items-center">
                        <div className="flex flex-shrink-0 items-center textRed font-bold text-3xl mb-10">
                            NeoSTORE
                        </div>
                    </a>
                    
                    <div id="newsletter-banner" tabIndex="-1">
                        <div className="flex items-center flex-shrink-0 w-full">
                            <form action="#" className="flex flex-col items-center md:flex-row relative w-3/4">
                                <img src={email} alt="email" className='absolute left-2'/>
                                <input type="email" id="email" placeholder="Your email address" className="w-full textRed border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 pl-9" required />
                                <button type="submit" className="absolute right-0 w-28 text-white bgRed hover:bgRed-800 focus:ring-4 text-sm font-thin rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className='text-white text-sm font-thin mt-9'>
                        <p>Contact Info</p>
                        <p>+91 12345 67890  &nbsp;   |  &nbsp;   +91 12345 67890</p>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        <div className='flex justify-between w-20 mt-4'>
                            <img src={fb} alt='social'/>
                            <img src={insta} alt='social'/>
                            <img src={twitter} alt='social'/>
                        </div>
                    </div>

                </div>
                <div className="md:flex justify-between w-2/3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase text-white">Catagories</h2>
                        <ul className="text-white text-sm font-thin">
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">Popular</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://tailwindcss.com/" className="hover:underline">Chair</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://tailwindcss.com/" className="hover:underline">Table</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://tailwindcss.com/" className="hover:underline">Sofa</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://tailwindcss.com/" className="hover:underline">Cupboard</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://tailwindcss.com/" className="hover:underline">Lamp</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-white-900 uppercase text-white">CUSTOMER SERVICE</h2>
                        <ul className="text-white text-sm font-thin">
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">My Account</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Discount</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Returns</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Orders History</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Order Tracking</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase text-white">Furniture</h2>
                        <ul className="text-white text-sm font-thin">
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Living Room Furniture</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Bar Furniture</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Kids Furniture</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Accent Furniture</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Book Shelves</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase text-white">USEFUL LINKS</h2>
                        <ul className="text-white text-sm font-thin">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Promotions</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className='bgRed py-2'>
        <p className='text-white text-center font'>©Neostore - All Rights Reserved</p>
    </div>
    </>
  )
}

export default footer