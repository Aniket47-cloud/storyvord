import React from "react";
import { Link } from "react-router-dom";

const About = ({isOn}) => {
  return (
    <div id="about" className={`max-w-[100vw] text-white font-jura bg-opacity-85 z-[1]  absolute top-[1850px] w-full ${isOn ? 'bg-black':'bg-[#5B6AAA]'} h-[900px]` }>
     <div className="w-11/12  mx-auto flex ">
     <img className=" w-[600px]  mt-[8rem]" src="./images/about.svg"/>
     <div className="w-full  flex flex-col items-end ">
        <h2 className="text-end text-white underline decoration-2 text-6xl">ABOUT US</h2>
        <p className="text-[38px] leading-[56.78px] text-end mt-[4rem]">Empowering Mental Health Professionals with Simplified CPT Coding</p>
        <p className=" w-[98%] text-3xl text-end mt-[75px]">Welcome to goCPT, where the journey of revolutionizing the medical coding and billing landscape began with a single idea - to make mental health care more accessible to everyone.<br/><br/>Join us on this transformative journey as we continue to innovate and evolve, breaking down barriers and making mental health care accessible to all. Together, we can shape a future where healthcare providers are empowered, and quality mental health care knows no boundaries.</p>
        
     </div>

     </div>
    <Link to="/sign"><button className="bg-button-gradient shadow-white shadow-button-shadow rounded-[10px] mt-9 ml-[450px] text-3xl text-center p-1 w-[500px]">Sign Up Today!</button></Link> 
    

      
    </div>
  );
};

export default About;
