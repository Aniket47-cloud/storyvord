import React from "react";

const Story = ({isOn}) => {
  return (
    <div className={`max-w-[100vw] absolute bg-opacity-85 top-[2750px] ${isOn ? 'bg-black':'bg-[#5B6AAA]'} w-full h-[800px]`}>
      <div className="w-[99%] font-jura text-white mx-auto">
        <h2 className="text-7xl text-white ml-9 underline decoration-2">Our Story</h2>
        <p className="text-[20px] p-5 pr-7 ml-2  text-[#FEDBFF] leading-[28.39px] mt-[1rem]">
          GoCPT was conceived by a passionate psychiatric nurse practitioner
          who, as a new graduate, felt overwhelmed by the complexities of CPT
          coding.<br/> Faced with the daunting task of mastering medical coding while
          juggling the demands of patient care, it became clear that a solution
          was needed to <br/> bridge the gap between clinical expertise and
          administrative challenges. Time constraints <br/> and the intricate nature
          of CPT coding posed significant hurdles for healthcare <br/>providers
          looking to venture into private practice. Recognizing that coding <br/> and
          billing are formidable obstacles standing in the way <br/> of many talented
          providers, the idea for goCPT was born.
        </p>
        <div className="font-offside top-[14rem] left-[50rem]  h-[400px] absolute shadow-button-shadow  p-5 w-[620px] flex flex-col items-center  rounded-[30px] border border-[#FFFFFF1A]">
            <h2 className="text-4xl text-white">Our Vision</h2>
            <p className="text-xl  mt-[2rem] w-[575px] text-center">
            We envision a future where mental health care is more accessible, where providers can focus on what they do best - helping individuals on their path to wellness. By harnessing the power of technology, we aim to streamline the complexities of CPT coding, enabling providers to dedicate more time to patient care and less to administrative burdens.
            </p>
        </div>
        <div className="font-offside mt-8 h-[400px] left-[2rem] absolute shadow-button-shadow  p-5 w-[620px] flex flex-col items-center  rounded-[30px] border border-[#FFFFFF1A]">
            <h2 className="text-4xl text-white">Our Mission</h2>
            <p className="text-xl  mt-[2rem] w-[575px] text-center">
            At goCPT, our mission is simple yet profound - to empower mental health professionals and remove the barriers that hinder them from providing quality care and pursuing their dreams of private practice. We believe that every individual should have access to exceptional mental health care, and that starts with simplifying the coding and billing process.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
