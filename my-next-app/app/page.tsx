/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Ceramics from "./components/Ceramics";
import Product from "./components/Product";
import Benefit from "./components/Benefit";
import Touch from "./components/Touch";
import Navbar from "./components/Navbar";
// import MobileNavbar from "./components/MobileNavbar";
import AboutMobileNavbar from "./components/AboutMobileNavbar";


export default function Home() {
  return (
    <>

      <Navbar />
      {/* I have made the required Mobile Navbar but i am not using it any where cause of routing
       issues , i want some instructions , for things that are not clear but currently short on time as submission date would pass*/}
      {/* <MobileNavbar /> */} 
      <AboutMobileNavbar/>


      <Hero />
      <Brand />
      <Ceramics />
      <Product />
      <Benefit />
      <Touch />


    </>
  );
}
