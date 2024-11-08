import React from "react";
import "./slide.css";
import { map } from "framer-motion/client";

const Slider = (props) => {
 const SliderLength = [
    "https://i.pinimg.com/474x/c7/49/46/c74946d5abe61803085e954915965218.jpg",
    "https://i.pinimg.com/474x/bb/15/af/bb15af5e28ade6aa1664c929a377c6ff.jpg",
    "https://i.pinimg.com/474x/b8/27/2e/b8272ef35357a198994e00bc9c6797ec.jpg",
    "https://i.pinimg.com/474x/a9/c8/f1/a9c8f13e7e2e74bef2c912a34de68e8f.jpg"
 ];

 const { className } = props;

 return (
  <div className=" rounded-2xl shadow-lg overflow-hidden min-w-2/4 h-72 sm:h-80">
   <div className="wrapper-holderrr relative">
    {SliderLength.map((slide, index) => (
     <div key={index} className={`relative w-full h-full overflow-hidden justify-center ${className}`}>
        <img src={slide} className="bg-center bg-cover object-cover w-full h-full" alt="" />
     </div>
    ))}
     
   </div>
  </div>
 );
};

export default Slider;
