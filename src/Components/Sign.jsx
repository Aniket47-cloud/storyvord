import React from "react";
import "./Sign.css";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <div className="max-w-[100vw] relative w-full bg-black min-h-[100vh]">
      <img
        className="opacity-60 absolute top-[140.59px] left-[612.17px] responsive-background-image"
        src="./images/ellipse6.svg"
      />
      <img
        className="opacity-60 absolute top-[389px] left-[853px] responsive-background-image"
        src="./images/ellipse5.svg"
      />
      <img
        className="opacity-60 absolute top-[50px] w-[20%] left-[53px] responsive-background-image"
        src="./images/ellipse4.svg"
      />
      <img
        className="opacity-60 absolute top-[452px] left-[70px] responsive-background-image"
        src="./images/ellipse1.svg"
      />
      <img
        className="opacity-60 absolute w-[20%] top-[420px] left-[1153px] responsive-background-image"
        src="./images/ellipse3.svg"
      />
      <img
        className="opacity-60 absolute w-[15%] top-[89px] left-[1053px] responsive-background-image"
        src="./images/ellipse2.svg"
      />
      <div className="flex responsive-content">
        <aside className="text-white font-jura flex flex-col justify-center items-center max-w-[30%] w-full backdrop-blur-[15px] shadow-button-shadow min-h-[100vh] h-full bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-[30px] responsive-aside">
          <p className="text-5xl text-center mb-[3rem] w-[70%] responsive-aside-text">
            Already have an account?
          </p>
       <Link to="/login"><button className="bg-button-gradient mb-9 text-white shadow-white shadow-button-shadow rounded-[10px] text-3xl text-center p-1 w-[110px] responsive-login-button">
            Login
          </button></Link>   
        </aside>
        <div className="max-w-[70%] flex flex-col items-center w-full responsive-main">
          <img
            className="w-[280px] mt-4 responsive-logo"
            src="./images/logo.svg"
            alt=""
          />
          <div className="z-50 font-jura text-white flex flex-col items-center justify-center shadow-button-shadow bg-feature-gradient backdrop-blur-[15px] p-5 w-6/12 rounded-[30px] bg-[#FFFFFF1A] border border-[#FFFFFF1A] h-[80%] responsive-form-container">
            <h2 className="text-center text-4xl responsive-form-title">
              SIGN UP
            </h2>
            <form className="w-full flex flex-col items-center justify-center">
              <div className="flex w-[90%] flex-col">
                <label className="ml-3 text-lg opacity-70 responsive-form-label">
                  Name
                </label>
                <input
                  className="bg-transparent text-xl p-3 placeholder-white border border-white rounded-[15px] responsive-form-input"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="flex w-[90%] mt-[1rem] flex-col">
                <label className="ml-3 text-lg opacity-70 responsive-form-label">
                  E-Mail Address
                </label>
                <input
                  className="bg-transparent text-xl p-3 placeholder-white border border-white rounded-[15px] responsive-form-input"
                  placeholder="E-Mail Address"
                  type="email"
                />
              </div>
              <div className="flex w-[90%] mt-[1rem] flex-col">
                <label className="ml-3 text-lg opacity-70 responsive-form-label">
                  Password
                </label>
                <input
                  className="bg-transparent text-xl p-3 placeholder-white border border-white rounded-[15px] responsive-form-input"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="flex w-[90%] mt-[1rem] flex-col">
                <label className="ml-3 text-lg opacity-70 responsive-form-label">
                  Confirm Password
                </label>
                <input
                  className="bg-transparent text-xl p-3 placeholder-white border border-white rounded-[15px] responsive-form-input"
                  placeholder="Confirm Password"
                  type="password"
                />
              </div>
              <button className="border mx-auto font-jura mt-[50px]  text-white text-center text-2xl bg-gradient-to-b from-[#B382D399] 60% to-[#2B3A6399] px-4 max-w-[150px] w-full p-2 border-white rounded-[10px] signup-button">
                <p>Sign Up</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
