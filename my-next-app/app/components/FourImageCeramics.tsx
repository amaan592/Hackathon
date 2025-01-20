import Image from "next/image";
import Link from "next/link";
import React from "react";

const FourImageCeramics = () => {
    // Product Data Array
    const products = [
        { name: "chair", url: "/productlisting", price: 250, displayName: "The Dendy Chair" },
        { name: "vase", url: "/productlisting1", price: 155, displayName: "The Elegant Vase" },
        { name: "silky", url: "/productlisting2", price: 125, displayName: "The Silky Cushion" },
        { name: "lamp", url: "/productlisting3", price: 125, displayName: "The Modern Lamp" },
    ];

    return (
        <section>
            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {products.map((product, idx) => (
                    <div key={idx} className="w-full">
                        {/* 3:4 Aspect Ratio Container */}
                        <div className="relative w-full pb-[125%]">
                            <Link href={product.url}>
                                <Image
                                    src={`/images/${product.name}.jpeg`} // Assuming the images are in public/images/
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

            {/* View Collection Button */}
            <div className="my-10 flex justify-center items-center">
                <Link href='/allproducts'>
                    <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
                        View collection
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default FourImageCeramics;
