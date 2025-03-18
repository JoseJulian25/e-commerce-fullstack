import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './PriceFilter.css';

const PriceFilter = () => {
  const [range, setRange] = useState({
    min:10,
    max:250
  })

  return (
    <div className='flex flex-col'>
      <h1 className='text-[16px] text-black mt-5 font-bold'>Price</h1>
      <RangeSlider className='mt-2 bg-black custom-range-slider' min={0} max={400} defaultValue={[range.min, range.max]} onInput={value => setRange({
        min: value[0],
        max: value[1]
      })}/>
      <div className='flex justify-between mt-2'>
        <p className='text-gray-600'>${range.min}</p>
        <p className='text-gray-600'>${range.max}</p>
        </div>
    </div>
  );
};

export default PriceFilter;