// import React from "react";
// import Navbar from "../components/Navbar";
// import AboutMobileNavbar from "../components/AboutMobileNavbar";

// const Cart = () => {
//   return (
//     <>
//       <Navbar />
//       <AboutMobileNavbar />
//       <div>
//         <div className="bg-white">
//           <h1 className="text-[#2A254B] text-2xl mt-[70px] mb-[50px] ml-[25px] md:ml-[200px] md:mb-[80px] md:mt-[90px] ">
//             Your Shopping Cart
//           </h1>

//           {/* The middle section of cart starts */}
//           <section className="">
//             <div className='hidden md:block'>
//               <div className='flex'>
//                 <h3 className=' ml-[188px] text-[#2A254B]'>Product</h3>
//                 <h3 className=' md:ml-[350px] lg:ml-[450px] text-[#2A254B]'>Quantity</h3>
//                 <h3 className='md:ml-[65px]  lg:ml-[230px] mr-[188px] text-[#2A254B]'>Total</h3>
//               </div>
//             </div>

//             {/* image and its description */}

//             <div className='flex md:mt-[40px] gap-[30px] md:items-center '>
//               <div>
//                 <img
//                   src="/images/Product Image.jpeg"
//                   alt="Product 1"
//                   className='h-[145px] w-[115px] md:h-[134px] md:w-[109px] ml-[24px] md:ml-[188px]  '
//                 />
//               </div>

//               <div className='text-[#2A254B]'>
//                 <h1 className="text-base sm:text-lg font-medium truncate ">
//                   Graystone Vase
//                 </h1>
//                 <p className="text-sm mt-2 truncate">
//                   A timeless ceramic vase with <br /> a tri-color grey glaze.
//                 </p>
//                 <p className="mt-2 text-base font-semibold">£85</p>
//                 <div className='block md:hidden'>
//                   <h1 className='mt-[20px] ml-[100px] ' >1</h1>
//                 </div>
//               </div>
//               {/* image and its description its flexfox box exceeds to total */}

//               <div className='hidden md:block' >
//                 <h1 className=' md:ml-[100px] lg:ml-[200px]' >1</h1>
//               </div>

//               <div className='hidden md:block' >
//                 <h1 className=' md:ml-[50px] lg:ml-[220px] '>£85</h1>
//               </div>

//             </div>

//             <div className="mt-[40px]"></div>

//             {/* Product 2 Starts */}
//             {/* image and its description */}

//             <div className='flex md:mt-[40px] gap-[30px] md:items-center '>
//               <div>
//                 <img
//                   src="/images/Product Image 2.jpeg"
//                   alt="Product 2"
//                   className='h-[145px] w-[115px] md:h-[134px] md:w-[109px] ml-[24px] md:ml-[188px]  '
//                 />
//               </div>

//               <div className='text-[#2A254B]'>
//                 <h1 className="text-base sm:text-lg font-medium truncate ">
//                   Basic White Vase
//                 </h1>
//                 <p className="text-sm mt-2 truncate">
//                   Beautiful and simple, this is <br /> one for the classics.
//                 </p>
//                 <p className="mt-2 text-base font-semibold">£85</p>
//                 <div className='block md:hidden'>
//                   <h1 className='mt-[20px] ml-[100px] ' >1</h1>
//                 </div>
//               </div>
//               {/* image and its description its flexfox box exceeds to total */}

//               <div className='hidden md:block' >
//                 <h1 className=' md:ml-[100px] lg:ml-[200px]' >1</h1>
//               </div>

//               <div className='hidden md:block' >
//                 <h1 className=' md:ml-[50px] lg:ml-[220px] '>£85</h1>
//               </div>

//             </div>
//           </section>

//           {/* The middle section of cart ends */}



//           {/* Subtotal Section */}
//           <div className="mt-10 text-center lg:text-right lg:mr-[40px]">
//             <h1 className="inline text-lg sm:text-xl font-medium mr-4">
//               Subtotal
//             </h1>
//             <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
//             <p className="text-sm mt-4">
//               Taxes and shipping are calculated at checkout
//             </p>
//             <button className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
//               Go to checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;


import React from "react";
import Navbar from "../components/Navbar";
import AboutMobileNavbar from "../components/AboutMobileNavbar";
import Image from "next/image"; // Consider using Next.js Image component

const Cart = () => {
  return (
    <>
      <Navbar />
      <AboutMobileNavbar />
      <div className="bg-white">
        <h1 className="text-[#2A254B] text-2xl mt-[70px] mb-[50px] ml-[25px] md:ml-[200px] md:mb-[80px] md:mt-[90px]">
          Your Shopping Cart
        </h1>

        {/* The middle section of cart starts */}
        <section>
          <div className="hidden md:block">
            <div className="flex">
              <h3 className="ml-[188px] text-[#2A254B]">Product</h3>
              <h3 className="md:ml-[350px] lg:ml-[450px] text-[#2A254B]">Quantity</h3>
              <h3 className="md:ml-[65px] lg:ml-[230px] mr-[188px] text-[#2A254B]">Total</h3>
            </div>
          </div>

          {/* Product 1 */}
          <div className="flex md:mt-[40px] gap-[30px] md:items-center">
            <div>
              <Image
                src="/images/Product Image.jpeg"
                alt="Graystone Vase"
                className="h-[145px] w-[115px] md:h-[134px] md:w-[109px] ml-[24px] md:ml-[188px]"
                width={109} // Set explicit width for Image
                height={134} // Set explicit height for Image
              />
            </div>

            <div className="text-[#2A254B]">
              <h1 className="text-base sm:text-lg font-medium truncate">Graystone Vase</h1>
              <p className="text-sm mt-2 truncate">A timeless ceramic vase with <br /> a tri-color grey glaze.</p>
              <p className="mt-2 text-base font-semibold">£85</p>
              <div className="block md:hidden">
                <h1 className="mt-[20px] ml-[100px]">1</h1>
              </div>
            </div>

            <div className="hidden md:block">
              <h1 className="md:ml-[100px] lg:ml-[200px]">1</h1>
            </div>

            <div className="hidden md:block">
              <h1 className="md:ml-[50px] lg:ml-[220px]">£85</h1>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex md:mt-[40px] gap-[30px] md:items-center">
            <div>
              <Image
                src="/images/Product Image 2.jpeg"
                alt="Basic White Vase"
                className="h-[145px] w-[115px] md:h-[134px] md:w-[109px] ml-[24px] md:ml-[188px]"
                width={109} // Set explicit width for Image
                height={134} // Set explicit height for Image
              />
            </div>

            <div className="text-[#2A254B]">
              <h1 className="text-base sm:text-lg font-medium truncate">Basic White Vase</h1>
              <p className="text-sm mt-2 truncate">Beautiful and simple, this is <br /> one for the classics.</p>
              <p className="mt-2 text-base font-semibold">£85</p>
              <div className="block md:hidden">
                <h1 className="mt-[20px] ml-[100px]">1</h1>
              </div>
            </div>

            <div className="hidden md:block">
              <h1 className="md:ml-[100px] lg:ml-[200px]">1</h1>
            </div>

            <div className="hidden md:block">
              <h1 className="md:ml-[50px] lg:ml-[220px]">£85</h1>
            </div>
          </div>
        </section>

        {/* Subtotal Section */}
        <div className="mt-10 text-center lg:text-right lg:mr-[40px]">
          <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
          <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
          <p className="text-sm mt-4">Taxes and shipping are calculated at checkout</p>
          <button className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
            Go to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;




