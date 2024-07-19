import React from "react";
import Card from "./Card";


const Features = ({isOn}) => {
  const cards = [
    {
      title: "User friendly",
      text: "The goCPT app offers a user-friendly feature for determining CPT codes based on time alone. To utilize this functionality, simply navigate to the designated time button within the app and input the total time spent managing the patient during the encounter. The app will then generate the appropriate CPT code, considering the significant role of time in certain scenarios, such as counseling or coordination of care, in determining the level of service provided",
    },
    {
      title:"Medical Complexity Assessment",
      text:"The goCPT app calculates encounters of varying complexity (straightforward/minimal, low, moderate, and high) based on a meticulous assessment of Medical Decision-Making (MDM), taking into account the number of diagnoses, management options, risk of complications or morbidity, and the amount and complexity of data reviewed during the encounter"
    },
    {
      title:"E&M Code Integration",
      text:"Seamlessly incorporates the key components influencing E&M code selection, such as History of Present Illness (HPI), Examination, Medical Decision-Making (MDM), and Time considerations"
    },
    {
      title:"Streamlined Documentation",
      text:"Facilitates accurate code assignment by providing a user-friendly interface for configuring CPT billing codes directly from your progress notes. The app emphasizes documentation accuracy to capture the true complexity of the services rendered**"
    }
  ];

  return (
    <div className={`${isOn ? 'bg-black' : 'bg-[#5B6AAA]'} bg-opacity-85 absolute top-[900px] max-w-[100vw] w-full min-h-[950px]`}>
      <div id="features" className="absolute z-50  top-[-114px] left-0 md:left-[112px] shadow-button-shadow bg-feature-gradient backdrop-blur-[15px] p-5 w-full md:w-10/12 rounded-[30px] min-h-[1022px]">
      <h2 className="text-white underline decoration-2 text-center font-jura text-4xl md:text-6xl mb-8 md:mb-12">
          Key Features of GoCPT BETA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const {title, text} = card;
            return <Card key={index} title={title} text={text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
