import React from "react";
import FeaCard from "./FeaCard";

const GOCPT = ({isOn}) => {
  const cards = [
    {
      url: "./images/name1.svg",
      title: "Thorough Documentation",
      text: "Be comprehensive in documenting the patient encounter. Include a detailed history of present illness, an exhaustive examination, and a comprehensive medical decision-making process. Capture all relevant details, ensuring that your notes paint a complete picture of the patients condition and your clinical assessment",
    },
    {
      url: "./images/name2.svg",
      title: "Assess Risk and Complexity",
      text: "Assess Risk and Complexity Evaluate and document the risk of complications and/or morbidity associated with the patients condition. Be explicit about the factors contributing to the complexity of the case. The goCPT app considers risk assessment, and detailed documentation aids in accurate code generation",
    },
    {
      url: "./images/name3.svg",
      title: "Time-Based Coding",
      text: "Time-Based Coding Utilize time-based coding when appropriate. If a significant portion of the encounter is devoted to counseling or coordination of care, document the time spent. The goCPT app recognizes time as a crucial factor in certain code selections, contributing to accurate billing",
    },
    {
      url: "./images/name4.svg",
      title: "Specificity Matters",
      text: "Provide specific details about each medical issue. Describe the nature, severity, and progression of symptoms. Specificity enhances the accuracy of code generation by ensuring that the app captures the complexity of the patients conditions and the level of decision-making required",
    },
    {
      url: "./images/name5.svg",
      title: "Include Relevant Data",
      text: "Include Relevant Data Ensure that your note incorporates all relevant data, including diagnostic test results, imaging studies, and laboratory findings. The goCPT app considers the complexity of data analysis, so including these details enhances the accuracy of the generated codes",
    },
    {
      url: "./images/name6.svg",
      title: "Document Thoroughly with All Relevant Data",
      text: "Ensure that your note incorporates all relevant data, including ordering or reviewing diagnostic test results, imaging studies, and laboratory findings. The goCPT app considers the complexity of data analysis, so including these details enhances the accuracy of the generated codes",
    },
    {
      url: "./images/name7.svg",
      title: "Regularly Update the App",
      text: "Keep the goCPT app updated to ensure you benefit from the latest enhancements and refinements. Regular updates enhance the apps capabilities, providing you with increasingly accurate code suggestions",
    },
    {
      url: "./images/name8.svg",
      title: "Stay Informed",
      text: "Stay abreast of changes in coding guidelines and standards. Familiarize yourself with any updates to CPT codes or relevant regulations. A well-informed approach ensures that your documentation aligns with current coding requirements",
    },
  ];
  return (
    <div className={`max-w-[100vw]  w-full h-[3300px] absolute top-[3550px] bg-opacity-85 ${ isOn ? 'bg-black':'bg-[#1C2745]'}`}>
      <div className="flex absolute z-30 flex-col items-center">
        <h2 className="font-jura mt-6  text-white text-6xl text-center underline decoration-2">
          Why <span className="font-bold">GoCPT</span> ?
        </h2>
        <p className=" text-center text-3xl font-jura text-white mt-[3rem] w-10/12">
          At goCPT, we understand the unique challenges mental health
          professionals face. Our app is designed with your needs in mind,
          offering a user-friendly platform that simplifies the coding process.
          By utilizing goCPT, providers can reclaim valuable time, reduce
          administrative stress, and ensure accurate code assignment for proper
          reimbursement.
          <br />
          <br />
          Join us on this transformative journey as we continue to innovate and
          evolve, breaking down barriers and making mental health care
          accessible to all. Together, we can shape a future where healthcare
          providers are empowered, and quality mental health care knows no
          boundaries.
          <br />
          <br />
          Thank you for choosing goCPT - where innovation meets compassion in
          the pursuit of accessible mental health care.
          <br />
          <br />
          Warm regards,
          <br />
          Tiffinne <br />
          Founder, goCPT
        </p>
      </div>
      <img
        className="opacity-75 z-20 absolute top-[655px] "
        src="./images/beats.svg"
      />
      <div className=" bg-cpt-gradient backdrop-blur-[10px] border-[#FFFFFF33] border bg-opacity-90 flex flex-col items-center font-jura left-[65px] h-[2300px] text-white top-[850px] w-11/12 mx-auto absolute z-30 rounded-[30px] shadow-button-shadow ">
        <h2 className="text-center underline decoration-2 mt-10 leading-[75px] text-6xl">
          Ensuring CPT Code Accuracy with <br />
          <span className="font-bold">GoCPT</span> App
        </h2>
        <div className="grid grid-cols-3 gap-4 justify-items-center space-x-4 w-[95%] mx-auto">
          {cards.slice(0, -2).map((card, i) => {
            const { url, title, text } = card;
            return <FeaCard key={i} url={url} title={title} text={text} />;
          })}
          <div className="col-span-3  flex justify-center space-x-9">
            {cards.slice(-2).map((card, i) => {
              const { url, title, text } = card;
              return <FeaCard key={i} url={url} title={title} text={text} />;
            })}
          </div>
        </div>

        <p className="font-offside text-white mx-auto w-[93%] mt-8 text-center text-base">
          By incorporating these tips into your practice, you can maximize the
          accuracy of CPT codes generated by the goCPT app. Remember, your
          detailed and precise documentation is instrumental in optimizing the
          app &apos; s capabilities and contributing to the overall success of your
          medical coding and billing processes
        </p>
      </div>
    </div>
  );
};

export default GOCPT;
