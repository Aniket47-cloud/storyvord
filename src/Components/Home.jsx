import React, { useState } from "react";
import Navbar from "../HomeComponents/Navbar";
import ToggleButton from "../HomeComponents/ToggleButton";
import Features from "../HomeComponents/Features";
import About from "../HomeComponents/About";
import Story from "../HomeComponents/Story";
import GOCPT from "../HomeComponents/GOCPT";
import Contribute from "../HomeComponents/Contribute";
import Contact from "../HomeComponents/Contact";
import '../HomeComponents/style.css';
const Home = ({isOn,setIsOn}) => {
  
 
  return (
    <div className={`max-w-[100vw] relative min-h-[900px]  h-full w-full ${isOn?'bg-black': 'bg-custom-gradient'}  `}>
      <Navbar />
      <ToggleButton isOn={isOn  } setIsOn={setIsOn} />
      <div className="absolute hero-section   top-[204px] flex flex-col justify-center left-[110px] max-w-[775px] w-full">
        <h2 className="font-jura text-5xl leading-[56.78px] text-white">
          Welcome to <span className="text-[#F197F4]">Go</span>
          <span className="text-[#2B3A63]">CPT</span> BETA
          <br /> Your Path to Effortless CPT Coding!
        </h2>
        <p className="text-3xl font-jura mt-[33px] text-white">
          We’re excited to introduce you to <br />
          the BETA version of GoCPT Your free pass to <br />
          a simplified and efficient CPT coding experience
          <br />
          designed exclusively for <br />
          mental health professionals like you.
        </p>
        <button className="border font-jura mt-[60px] text-white text-center text-3xl bg-gradient-to-b from-[#B382D399] 60% to-[#2B3A6399] max-w-[375px] w-full px-4 p-2 border-white rounded-[10px]">START TESTING</button>
      </div>
      
      <Features isOn={isOn}/>
      <img  className="absolute circle z-20 w-[10%]  opacity-70 top-[962px] left-[600px]" src="./images/eclipse6.svg"/>
      <img  className="absolute circle z-20 opacity-70 w-[15%] top-[1330px] left-[900px]" src="./images/eclipse7.svg"/>
      <img  className="absolute circle z-20 w-[15%] opacity-70 top-[799px] left-[0px]" src="./images/eclipse4.svg"/>
      <img  className="absolute circle z-20 w-[10%] opacity-70 top-[1570px] left-[0px]" src="./images/eclipse4.svg"/>
      <img  className="absolute circle z-20 w-[10%] opacity-70 top-[1570px] left-[0px]" src="./images/eclipse4.svg"/>
      <img  className="absolute circle z-20 w-[15%] top-[1575px] opacity-70 right-[0px]" src="./images/eclipse3.svg"/>
      <img  className="absolute circle z-20 w-[10%] opacity-70 top-[846px] right-[45px]" src="./images/eclipse.svg"/>
      <About isOn={isOn}/>
      <Story isOn={isOn}/>
      <GOCPT isOn={isOn}/>
      <Contribute isOn={isOn}/>
      <Contact />



    </div>

    
  );
};

export default Home;
