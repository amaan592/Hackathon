import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";



const Brand = () => {
  const features = [
    {
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.',
      icon: TbTruckDelivery,
    },
    {
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.',
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: 'Unbeatable prices',
      description: 'For our material and quality, you won’t find better prices anywhere.',
      icon: MdOutlinePriceChange,
    },
    {
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
      icon: LuSprout,
    },
  ];

  return (
    <section>
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Title */}
        <h1 className="text-center text-xl md:text-2xl font-semibold">
          What makes our brand different
        </h1>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
          {features.map((feature, index) => {
            const Icon = feature.icon; // Extract the icon
            return (
              <div key={index} className="flex flex-col md:w-[25%] p-4 rounded-lg">
                <Icon size={30} className="text-[#2A254B]" />
                <p className="py-4 font-semibold">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brand;


// I WAS USING THIS CODE BUT THEN SHIFTED TO ARRAY MAP FUNCTION

// const Brand = () => {
//   return (
//     <>
//       <section>
//         <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
//           {/* Title */}
//           <h1 className="text-center text-xl md:text-2xl font-semibold">
//             What makes our brand different
//           </h1>

//           {/* Features */}
//           <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
//             {/* Feature 1 */}
//             <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
//               <TbTruckDelivery size={30} className="text-[#2A254B]" />
//               <p className="py-4 font-semibold">Next day as standard</p>
//               <p>Order before 3pm and get your order the next day as standard.</p>
//             </div>

//             {/* Feature 2 */}
//             <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
//             <IoIosCheckmarkCircleOutline  size={30} className="text-[#2A254B]"/>
//               <p className="py-4 font-semibold">Made by true artisans</p>
//               <p>Hand-crafted goods made with real passion and craftsmanship.</p>
//             </div>

//             {/* Feature 3 */}
//             <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
//             <MdOutlinePriceChange size={30} className="text-[#2A254B]"/>
//               <p className="py-4 font-semibold">Unbeatable prices</p>
//               <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
//             </div>

//             {/* Feature 4 */}
//             <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
//             <LuSprout size={30} className="text-[#2A254B]"/>
//               <p className="py-4 font-semibold">Recycled packaging</p>
//               <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
