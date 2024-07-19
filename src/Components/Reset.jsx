import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ToggleButton from '../HomeComponents/ToggleButton'
import './reset.css'
const Reset = ({isOn,setIsOn}) => {
  return (
    <div className={`max-w-[100vw] flex flex-col items-center ${isOn? 'bg-black': 'bg-[#FFFFFF1A]'}  w-full h-[100vh] `}>
        <div className=" z-20 absolute   max-w-[100vw] w-full bg-[#FFFFFF1A] bg-opacity-90 border border-[#FFFFFF1A] shadow-xl  flex justify-between items-center h-[90px] ">
      <div className="mx-auto flex justify-between items-center w-[97%]">
     <NavLink to="/"> <img src="./images/door.svg" alt="" /> </NavLink> 
      <img className="w-[210px] mt-1" src="./images/logo.svg" />
        
      <NavLink to="/administrator"><img  src="./images/person.svg" alt="" /></NavLink> 
      </div>
    </div> 
    <img className="absolute w-[85%] leaf " src="./images/leaf.svg" alt="" />
    <ToggleButton isOn={isOn} setIsOn={setIsOn}/>
    <div className="z-50 font-jura text-white mt-[9rem] flex flex-col items-center justify-center  shadow-button-shadow bg-feature-gradient backdrop-blur-[27.5px]  p-5 w-5/12  rounded-[50px] bg-[#FFFFFF05] border border-[#FFFFFF05] h-[65%]">
          <h2 className="text-center text-4xl ">CHANGE PASSWORD</h2>
          <form className="w-full flex flex-col justify-center  ">
          <label className={`ml-9 mt-[1rem]  ${isOn ? 'text-white':'text-[#00000080]'} text-lg opacity-90`}>Old Password</label>
            <div className="flex items-center w-full flex-col">
             
              <input
                className="bg-[#00000080] w-[90%] outline-none text-xl  p-3 placeholder-white   border border-white rounded-[15px]"
                placeholder="Old Password"
                type="password"
              />
            </div>
            <label className={`ml-9 mt-[1rem]   ${isOn ? 'text-white':'text-[#00000080]'} text-lg opacity-90`}>New Password</label>
            <div className="flex items-center w-full flex-col">
             
              <input
                className="bg-[#00000080] w-[90%] outline-none text-xl  p-3 placeholder-white   border border-white rounded-[15px]"
                placeholder="New Password"
                type="password"
              />
              
            </div>
            <Link to="/reset"><p className={`text-lg cursor-pointer opacity-85 ${isOn ? 'text-white':'text-[#00000080]'} ml-8 mt-4`}>Forgot Password?</p></Link>
            <button className="border mx-auto font-jura mt-[30px]  text-white text-center text-2xl bg-[#00000080]  px-4  w-[90%]   p-2 border-white rounded-[10px]">
                UPDATE DETAILS
              </button>
          </form>
          
        </div>
        <p className={`font-paddy text-2xl ${isOn ? 'text-white' : 'text-black'}  mt-5`}>BACK</p>
      
    </div>
  )
}

export default Reset
