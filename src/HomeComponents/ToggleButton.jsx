// src/components/ToggleButton.js
import React from 'react';

const ToggleButton = ({isOn, setIsOn}) => {
  return (
    <div className="absolute top-[7rem] right-[1rem]">
      <div
        className={`w-20 h-10 rounded-full cursor-pointer transition-all duration-300 ease-in-out relative
          ${isOn
            ? 'bg-black'
            : 'bg-[#e0a5e8]'
          }
        `}
        onClick={() => setIsOn(!isOn)}
        style={{
          boxShadow: isOn 
            ? 'inset 0 0 0 2px #8f45a3'
            : 'inset 0 0 0 2px #b655c7'
        }}
      >
        <div
          className={`absolute w-9 h-9 rounded-full transition-all duration-300 ease-in-out
            ${isOn
              ? 'translate-x-10 bg-[#8f45a3]'
              : 'bg-white'
            }`}
          style={{
            top: '2px',
            left: '2px',
            boxShadow: isOn
              ? '0 0 0 2px black, 0 0 0 4px #8f45a3'
              : '0 0 10px rgba(0, 0, 0, 0.3)'
          }}
        />
      </div>
    </div>
  );
};

export default ToggleButton;
