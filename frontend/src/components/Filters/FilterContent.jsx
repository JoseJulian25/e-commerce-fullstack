import Categories from './Categories';
import PriceFilter from './PriceFilter';
import ColorsFilter from './ColorsFilter';
import SizeFilter from './SizeFilter';

import React from 'react';

const FilterContent = ({categoryContent}) => {
  return (
    <>
    <div className="mb-6">
      <p className="text-[16px] text-black font-bold">Categorias</p>
      <Categories types={categoryContent.types} />
    </div>
    <div className="mb-6">
      <PriceFilter />
    </div>
    <div className="mb-6">
      <ColorsFilter colors={categoryContent?.meta_data?.colors} />
    </div>
    <div className="mb-6">
      <SizeFilter sizes={categoryContent.meta_data.sizes} />
    </div>
  </>
  );
};

export default FilterContent;