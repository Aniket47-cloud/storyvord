import React from 'react'

const FeaCard = ({url,title,text}) => {
  return (
    <div className="shadow-button-shadow text-white font-offside mb-4 p-5 mt-7 w-[400px] h-[600px] rounded-[15px] bg-[#D9D9D91A]">
      <img src={url}/>
      <h2 className="text-2xl mt-4 text-center" >{title}</h2>
      <p className="text-base mt-4 text-center">{text}</p>
    </div>
  )
}

export default FeaCard
