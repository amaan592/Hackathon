import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import AboutMobileNavbar from "../components/AboutMobileNavbar";


export default function AllProducts() {
  const products = [

    // Could have provided differnt links in here in place of /productlisting but it would 
    // require multiple pages to be made and would consume time, will add this later on
    { name: "chair", url: "/productlisting", price: 250, displayName: "The Dendy Chair" },
    { name: "vase", url: "/productlisting1", price: 155, displayName: "The Elegant Vase" },
    { name: "silky", url: "/productlisting2", price: 125, displayName: "The Silky Cushion" },
    { name: "lamp", url: "/productlisting3", price: 125, displayName: "The Modern Lamp" },
    { name: "lamp2", url: "/productlisting4", price: 300, displayName: "The Lucy Lamp" },
    { name: "table", url: "/productlisting5", price: 180, displayName: "The Wooden Table" },
    { name: "rusticvase", url: "/productlisting6", price: 350, displayName: "The Rustic Vase" },
    { name: "vase", url: "/productlisting7", price: 150, displayName: "The Ceramic Vase" },
    { name: "chair2", url: "/productlisting8", price: 100, displayName: "The Classic Dendy Chair" },
    { name: "multiplechairs", url: "/productlisting9", price: 50, displayName: "The Set of Dendy Chairs" },
    { name: "lamp", url: "/productlisting10", price: 80, displayName: "The Lamp" },
    { name: "chair3", url: "/productlisting11", price: 120, displayName: "The Aura Dendy Chair" },
  ];

  return (
    <div>
      <div className="mb-[30px] md:mb-[70px]">
        <Navbar />
        <AboutMobileNavbar />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 gap-y-10">
        {products.map((product, idx) => (
          <div key={idx} className="w-full">
            {/* 3:4 Aspect Ratio Container */}
            <div className="relative w-full pb-[125%]">
              <Link href={product.url}>
                <Image
                  src={`/images/${product.name}.jpeg`} // Assuming the images are in public/images/ folder
                  height={700}
                  width={700}
                  alt={`Image of ${product.name}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 md:hover:scale-110"
                />
              </Link>
            </div>
            {/* Product Details */}
            <div className="mt-4 text-[#2A254B]">
              <p className="py-2 font-medium">{product.displayName}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
