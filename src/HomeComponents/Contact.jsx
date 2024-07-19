import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[100vw]  flex flex-col justify-center items-center bg-opacity-85 absolute top-[7730px] w-full bg-black min-h-[968px]">
      <h2 className="font-jura mt-[2rem] text-5xl text-center mb-[3rem] text-white underline decoration-2">
        CONTACT US
      </h2>
      <div className="w-11/12 flex justify-between h-[700px]">
        <img className="w-[50%] mb-[1rem]" src="./images/contact.svg" />
        <form className=" mt-[2rem] text-white text-2xl font-jura ml-[3rem] space-y-8 ">
          <input
            className="bg-transparent  p-3 placeholder-white w-[95%]  border border-white rounded-[15px]"
            placeholder="Company Name"
            type="text"
          />
          <input
            className="bg-transparent p-3 placeholder-white w-[95%]  border border-white rounded-[15px]"
            placeholder="E-Mail Address"
            type="email"
          />
          <input
            className="bg-transparent p-3 placeholder-white w-[95%]  border border-white rounded-[15px]"
            placeholder="Companys Address"
            type="text"
          />
          <textarea
            placeholder="Message"
            rows={6}
            cols={46}
            className="resize-none bg-transparent placeholder-white border border-white rounded-[15px] p-3  "
          />
          <button className="border mx-auto font-jura mt-[60px] ml-[11rem] text-white text-center text-3xl bg-gradient-to-b from-[#B382D399] 60% to-[#2B3A6399] px-4 max-w-[250px] w-full   p-2 border-white rounded-[10px]">
            SUBMIT
          </button>
        </form>
      </div>
      <footer className="w-full  mt-[2rem]  bg-black h-[350px] flex justify-between">
      <div className="w-11/12 mx-auto  mt-11 flex justify-between bg-black">
        <div className="flex flex-col w-[47%] ">
            <img src="./images/logo.svg" className="w-[284px]"/>
            <p className="text-2xl font-jura text-white ">We are not here to sell you products, we sell value through our expertise.</p>
            <p className="font-jura text-2xl mt-[1rem] text-white">Email: <a href="mailto:info@gocpt.ai" className="underline text-[#5B6AAA]">info@gocpt.ai</a></p>
            <p className="text-xl mt-[2rem] font-jura text-white ">© 2024 All rights reserved gocpt.ai</p>
        
        
        </div>
        <ul className="font-jura text-end text-xl space-y-8 text-white">
            <li>HOME</li>
            <li>FEATURES</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>TERMS & CONDITIONS</li>
        </ul>

      </div>

      </footer>
    </div>
  );
};

export default Contact;
