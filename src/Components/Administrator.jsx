import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ToggleButton from '../HomeComponents/ToggleButton'
import './Administrator.css'
const Administrator = ({isOn,setIsOn}) => {
  return (
    <div className={`max-w-[100vw] flex flex-col items-center ${isOn? 'bg-black': 'bg-[#FFFFFF1A]'}  w-full h-[100vh] `}>
    <div className=" z-20 absolute   max-w-[100vw] w-full bg-[#FFFFFF1A] bg-opacity-90 border border-[#FFFFFF1A] shadow-xl  flex justify-between items-center h-[90px] ">
  <div className="mx-auto flex justify-between items-center w-[97%]">
  <NavLink to="/"><img src="./images/door.svg" alt="" /> </NavLink> 
  <img className="w-[210px] mt-1" src="./images/logo.svg" />  
    
   <img  src="./images/person.svg" alt="" />
  </div>
</div> 
<img className="absolute leaf w-[85%] " src="./images/leaf.svg" alt="" />
<ToggleButton isOn={isOn} setIsOn={setIsOn}/>
<div className="z-50 font-jura text-white mt-[9rem] flex flex-col items-center justify-center  shadow-button-shadow bg-feature-gradient backdrop-blur-[27.5px]  p-5 w-5/12  rounded-[50px] bg-[#FFFFFF05] border border-[#FFFFFF05] h-[75%]">
      <img className='absolute z-10 top-3 nurse'  src="./images/nurse.svg" alt="" />
      <h2 className="text-center absolute top-[9rem]  z-20 text-4xl">ADMINISTRATOR</h2>

      <form className="w-full flex mt-[8rem] flex-col justify-center  ">
      <label className={`ml-9 mt-[1rem]  ${isOn ? 'text-white':'text-[#00000080]'} text-lg opacity-90`}>E-Mail Address</label>
        <div className="flex items-center  w-full flex-col">
         
          <input
            className="bg-[#00000080] shadow-button-shadow w-[90%] outline-none text-xl  p-3 placeholder-white   border border-white rounded-[15px]"
            placeholder="E-Mail Address"
            type="email"
          />
        </div>
        <label className={`ml-9 mt-[1rem]   ${isOn ? 'text-white':'text-[#00000080]'} text-lg opacity-90`}>Phone No.</label>
        <div className="flex items-center w-full flex-col">
         
          <input
            className="bg-[#00000080] shadow-button-shadow w-[90%] outline-none text-xl  p-3 placeholder-white   border border-white rounded-[15px]"
            placeholder="Phone No."
            type="tel"
          />
          
        </div>
        <Link to="/reset"><p className={`text-lg cursor-pointer opacity-85 ${isOn ? 'text-white':'text-[#00000080]'} ml-8 mt-2`}>Change Password?</p></Link>
        <button className="border mx-auto shadow-button-shadow font-jura mt-4   text-white text-center text-2xl bg-[#00000080]  px-4  w-[90%]   p-2 border-white rounded-[10px]">
            UPDATE DETAILS
          </button>
      </form>
      
    </div>
    <p className={`font-paddy text-2xl ${isOn ? 'text-white' : 'text-black'}  mt-5`}>BACK</p>
  
</div>
  )
}

export default Administrator
