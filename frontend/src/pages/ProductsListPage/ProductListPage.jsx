import React, { useMemo } from 'react';
import FilterIcon from '../../components/common/FilterIcon';
import content from '../../data/content.json';
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';

const categories = content?.categories;

const ProductListPage = ({categoryType}) => {

  const categoryContent = useMemo(() => {
    return categories.find(category => category.code === categoryType);
  }, [categoryType]) 

  return (
    <div>
      <div className='flex mt-[20px]'>
        <div className='w-[20%] p-[20px]'>
          <div className='flex justify-between'>
            <p className='text-[16px] text-gray-600'>Filtrar</p>
            <FilterIcon/>
          </div>
          <div>
            <p className='text-[16px] text-black mt-5 font-bold'>Categorias</p>
            <Categories types={categoryContent.types}/>
          </div>
          <div>
            <PriceFilter/>
          </div>
          <div>
            <ColorsFilter colors={categoryContent?.meta_data?.colors}/>
          </div>
          <div>
            <SizeFilter sizes={categoryContent.meta_data.sizes}/>
          </div>
        </div>
        <div className='w-[70%] p-[15px]'>
          <p className='text-black text-lg font-bold'>{categoryContent.description}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ProductListPage;