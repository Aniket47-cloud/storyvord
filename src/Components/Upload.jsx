import React from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "../HomeComponents/ToggleButton";
import "./Upload.css";

const Upload = ({ isOn, setIsOn }) => {
  return (
    <div
      className={`max-w-[100vw] flex flex-col items-center ${
        isOn ? "bg-black" : "bg-[#FFFFFF1A]"
      } w-full h-auto responsive-container`}
    >
      <header className="z-20 absolute max-w-[100vw] w-full bg-[#FFFFFF1A] bg-opacity-90 border border-[#FFFFFF1A] shadow-xl flex justify-between items-center h-auto responsive-header">
        <div className="mx-auto flex justify-between items-center w-[97%] responsive-header-content">
        <NavLink to="/"> <img src="./images/door.svg" alt="" className="responsive-icon" /></NavLink> 
          
            <img className="w-[210px] mt-1 responsive-logo" src="./images/logo.svg" alt="logo" />
          
        <NavLink to="/administrator"><img src="./images/person.svg" alt="" className="responsive-icon" /></NavLink>  
        </div>
      </header>
      <img className="absolute responsive-leaf" src="./images/leaf.svg" alt="" />
      <ToggleButton isOn={isOn} setIsOn={setIsOn} />
      <section className="z-50 font-jura text-white mt-[7rem] flex flex-col items-center justify-center shadow-button-shadow bg-feature-gradient backdrop-blur-[27.5px] p-5 w-7/12 rounded-[50px] bg-[#FFFFFF05] border border-[#FFFFFF33] h-auto responsive-upload-box">
        <h2 className={`${isOn ? "text-white" : "text-black"} text-3xl responsive-title`}>
          Upload your Note
        </h2>
        <p className={`${isOn ? "text-white" : "text-black"} text-lg responsive-subtitle`}>
          (It may take 30-90 seconds to generate report)
        </p>
        <div className={`${isOn ? 'bg-[#FFFFFF4D]' : 'bg-[#0000004D]'} mt-4 w-[90%] outline-none text-3xl p-4 placeholder-white h-[200px] flex justify-center items-center border border-white rounded-[15px] responsive-upload-area`}>
          Click to upload a Note (pdf or doc file)
        </div>
        <button className="mt-5 font-jura h-auto shadow-button-shadow text-xl rounded-[20px] border-2 border-[#FFFFFF66] bg-upload-gradient w-[55%] p-3 text-center responsive-button">
          Generate CPT code
          <br />
          Based upon Medical Decision Making Model
        </button>
      </section>
      <section className="z-50 font-jura text-white mt-[1rem] mb-[2rem] flex flex-col items-center justify-center shadow-button-shadow bg-feature-gradient backdrop-blur-[27.5px] p-5 w-11/12 rounded-[50px] bg-[#FFFFFF05] border border-[#FFFFFF80] h-auto responsive-result-box">
        <div className="flex gap-4 responsive-result-row">
          <div className={`${isOn ?'bg-[#FFFFFF4D]':'bg-[#0000004D]'} mt-4 w-[90%] outline-none text-xl p-3 placeholder-white min-h-[100px] h-auto flex justify-between items-center border border-white rounded-[15px] responsive-result-item`}>
            <p>Number and Complexity of Problems Addressed</p>
            <p className="text-[#AACED1] text-3xl">MEDIUM</p>
          </div>
          <div className={`${isOn ?'bg-[#FFFFFF4D]':'bg-[#0000004D]'} mt-4 w-[90%] outline-none text-xl p-3 placeholder-white min-h-[100px] h-auto flex justify-between items-center border border-white rounded-[15px] responsive-result-item`}>
            <p>Amount and/or Complexity of Data to be Reviewed and Analyzed</p>
            <p className="text-[#AACED1] text-3xl">MINIMAL</p>
          </div>
          <div className={`${isOn ?'bg-[#FFFFFF4D]':'bg-[#0000004D]'} mt-4 w-[90%] outline-none text-xl p-3 placeholder-white min-h-[100px] h-auto flex justify-between items-center border border-white rounded-[15px] responsive-result-item`}>
            <p>
              Risk of Complications and/or Morbidity or Mortality of Patient
              Management Decisions
            </p>
            <p className="text-[#FEDBFF] text-3xl">HIGH</p>
          </div>
        </div>
        <button className="mt-6 font-jura h-auto shadow-button-shadow text-4xl rounded-[20px] border-2 border-[#FFFFFF66] bg-generate-gradient w-[55%] p-3 text-center responsive-generate-button">
          GENERATE MDM CPT CODE
        </button>
        <div className={`${isOn ?'bg-[#FFFFFF4D]':'bg-[#0000004D]'} mt-4 w-[50%] outline-none text-xl p-3 placeholder-white h-[60px] flex items-center justify-center border border-white rounded-[15px] responsive-result-display`}>
          <p className="text-[#AACED1] font-jura text-center text-3xl font-semibold">MEDIUM</p>
        </div>
        <div className="flex gap-4 mt-8 justify-between items-center w-full responsive-options-row">
          <div className="flex flex-col w-[90%] justify-center items-center responsive-option-column">
            <p className={`${isOn ? "text-white" : "text-black"} text-lg`}>
              New or Existing Patient
            </p>
            <div className={`${isOn ?'bg-[#FFFFFF4D]':'bg-[#0000004D]'} mt-1 w-full outline-none text-xl p-3 placeholder-white border border-white rounded-[15px] responsive-select`}>
              Choose an Option
            </div>
            <button className="mt-5 font-jura shadow-button-shadow text-2xl rounded-[15px] border-2 border-[#FFFFFF66] bg-upload-gradient w-full p-2 text-center responsive-submit-button">
              SUBMIT
            </button>
            <div className={`${isOn ?'bg-[#FFFFFF4D]':'bg-[#0000004D]'} w-full outline-none text-3xl p-2 placeholder-white mt-5 text-center border border-white rounded-[15px] responsive-result-code`}>
              99214
            </div>
          </div>
          <div className="flex flex-col w-[90%] justify-center items-center responsive-option-column">
            <p className={`${isOn ? "text-white" : "text-black"} text-lg`}>
              Get Code Based Upon Time
            </p>
            <div className={`${isOn ?'bg-[#FFFFFF4D]':'bg-[#0000004D]'} mt-1 w-full outline-none text-xl p-3 placeholder-white border border-white rounded-[15px] responsive-select`}>
              Choose an Option
            </div>
            <button className="mt-5 font-jura shadow-button-shadow text-2xl rounded-[15px] border-2 border-[#FFFFFF66] bg-upload-gradient w-full p-2 text-center responsive-submit-button">
              SUBMIT
            </button>
            <div className={`${isOn ?'bg-[#FFFFFF4D]':'bg-[#0000004D]'} w-full outline-none text-3xl p-2 placeholder-white mt-5 text-center border border-white rounded-[15px] responsive-result-code`}>
              99242
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upload;
