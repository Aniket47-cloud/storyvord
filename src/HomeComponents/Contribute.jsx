import React from "react";
import { Link } from "react-router-dom";

const Contribute = ({isOn}) => {
  return (
    <div className={`max-w-[100vw] absolute top-[6850px] shadow-box-shadow bg-opacity-95 w-full h-[880px] ${isOn ? 'bg-black':'bg-[#1C2745]'} border border-[#FFFFFF26]`}>
      <h2 className="font-jura text-white text-center  text-5xl mt-[3rem]">
        How Can You Contribute?
      </h2>
      <div className="flex mx-auto mt-[4rem] w-full text-white justify-center items-center gap-6">
        <div className="font-offside h-[400px]  bg-[#FFFFFF21] shadow-button-shadow  p-6 w-[620px] flex flex-col items-center  rounded-[30px] border border-[#FFFFFF12]">
          <h2 className="text-3xl">Sign Up and Use goCPT Beta</h2>
          <p className="text-xl  mt-[5rem] w-[550px] text-center">
          Dive into the beta version by signing up here!. Explore its features and discover first hand how GoCPT can simplify your CPT coding processes

          </p>
        </div>
        <div className="font-offside h-[400px]  bg-[#FFFFFF21] shadow-button-shadow  p-5 w-[620px] flex flex-col items-center  rounded-[30px] border border-[#FFFFFF12]">
          <h2 className="text-3xl">Share Your Feedback</h2>
          <p className="text-xl  mt-[5rem] w-[570px] text-center">
          Your experiences and insights matter. Utilize the feedback mechanism within the app to share your thoughts, suggestions, and any issues you encounter. Your feedback guides our ongoing improvements.
          </p>
        </div>
      </div>
      <h2 className="font-jura text-5xl text-white text-center mt-[4rem]">Join GOCPT on this Journey!</h2>
      <p className="font-jura text-xl mx-auto text-white text-center w-[90%] mt-[1rem]">By participating in the goCPT Beta, you’re not just a user; you’re a vital part of our community shaping the future of mental health billing. Together, we can create an app that truly meets your needs and exceeds your expectations.</p>
    <Link to="/sign"><button className="bg-button-gradient mb-9 text-white shadow-white shadow-button-shadow rounded-[10px] mt-12 ml-[620px] text-3xl text-center p-1 w-[270px]">Sign Up Today!</button>
    </Link>  

    </div>
  );
};

export default Contribute;
