import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import Brand from '../components/Brand';
import FourImageCeramics from '../components/FourImageCeramics';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import AboutMobileNavbar from '../components/AboutMobileNavbar';


const ProductListing1 = () => {
  return (
    <>
      <section>
        <Topbar/>
        <Navbar/>
        <AboutMobileNavbar/>

        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-auto">
              <Image
                src={'/images/rusticvase.jpeg'}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold">The Rustic Vase</p>
                <p className="py-2 text-lg md:text-xl">$250</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <span>+</span> 1 <span>-</span>
                      </button>
                    </div>
                    <Link href="/Cart">
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] hover:bg-[#2A114C] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
           <h1 className="text-xl md:text-2xl font-semibold mt-12 text-[#2A254B]">You might also like</h1>
           <FourImageCeramics/>
    
          {/* Features Section */}
          <Brand />

        </div>
      </section>
    </>
  );
};

export default ProductListing1;