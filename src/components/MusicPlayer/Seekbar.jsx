import React from 'react';

export const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
      <button type="button" onClick={() => setSeekTime(appTime - 5)} className="hidden lg:mr-4 text-xl lg:block text-white">
        -
      </button>
      <p className="text-white text-lg">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-96 2xl:w-96 h-[.3rem] mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white text-lg">{max === 0 ? '0:00' : getTime(max)}</p>
      <button type="button" onClick={() => setSeekTime(appTime + 5)} className="hidden lg:ml-4 lg:block text-xl text-white">
        +
      </button>
    </div>
  );
};
