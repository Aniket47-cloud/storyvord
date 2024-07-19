import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div className="max-w-[100vw] justify-center items-center overflow-hidden w-full bg-black h-[100vh]">
        <img  className="absolute h-[100%] responsive-background-image " src="./images/beats.svg"/>

    <div className="flex flex-row-reverse">
      <aside className="text-white font-jura flex flex-col justify-center items-center  max-w-[30%] w-full backdrop-blur-[15px] shadow-button-shadow min-h-[100vh] h-full bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-[30px] responsive-aside">
        <p className="text-5xl text-center mb-[3rem] w-[70%]">
          Dont have an account?
        </p>
      <Link to="/sign"><button className="bg-button-gradient  mb-9 text-white shadow-white shadow-button-shadow rounded-[10px]  text-3xl text-center p-1 w-[190px] ">
          Sign Up
        </button></Link>  
      </aside>
      <div className="max-w-[70%] flex flex-col items-center w-full">
        <img className=" w-[280px] mt-4" src="./images/logo.svg" alt="" />
        <div className="z-50 font-jura text-white flex flex-col items-center justify-center  shadow-button-shadow bg-feature-gradient backdrop-blur-[15px]  p-5 w-6/12  rounded-[30px] bg-[#FFFFFF1A] border border-[#FFFFFF1A] h-[80%]">
          <h2 className="text-center text-4xl ">LOGIN</h2>
          <form className="w-full flex flex-col items-center justify-center">
           
            <div className="flex w-[90%] mt-[1rem] flex-col">
              <label className="ml-3 text-lg opacity-70">E-Mail Address</label>
              <input
                className="bg-[#00000080] text-xl  p-3 placeholder-white   border border-white rounded-[15px] responsive-form-input"
                placeholder="E-Mail Address"
                type="email"
              />
            </div>
            <div className="flex w-[90%] mt-[1rem] flex-col">
              <label className="ml-3 text-lg opacity-70">Password</label>
              <input
                className="bg-[#00000080] responsive-form-input text-xl  p-3 placeholder-white   border border-white rounded-[15px]"
                placeholder="Password"
                type="password"
              />
             <Link to="/reset"><p className="text-xl cursor-pointer opacity-85 ml-4 mt-4">Forgot Password?</p></Link> 
            </div>
         
            <button className="border mx-auto font-jura mt-[60px]  text-white text-center text-2xl bg-gradient-to-b from-[#B382D399] 60% to-[#2B3A6399] px-4 max-w-[150px] w-full   p-2 border-white rounded-[10px] login-button">
              <p>LOGIN</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
