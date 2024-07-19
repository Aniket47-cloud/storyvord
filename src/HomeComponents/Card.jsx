import React from 'react'

const Card = ({title, text}) => {
  return (
    <div className="mb-6 md:mb-11 h-full">
      <div className="flex flex-col w-full h-full text-center p-5 shadow-button-shadow rounded-[30px] font-offside">
        <h2 className="text-white text-2xl md:text-3xl mb-4">
          {title}
        </h2>
        <p className="text-white text-base md:text-xl mt-2 overflow-auto flex-grow">{text}</p>
      </div>
    </div>
  )
}

export default Card
