import React, { useMemo } from 'react';
import FilterIcon from '../../components/common/FilterIcon';
import content from '../../data/content.json';
import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { Drawer } from '@material-tailwind/react';
import FilterContent from '../../components/Filters/FilterContent';
import { IconButton } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/16/solid';


const categories = content?.categories;

const ProductListPage = ({categoryType}) => {
  const [openFilter, setOpenFilter] = useState(false);

  const categoryContent = useMemo(() => {
    return categories.find(category => category.code === categoryType);
  }, [categoryType]) 

  return (
    <div>
      {/* Botón de filtro para móviles */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Button
          className="p-3 rounded-full shadow-lg"
          onClick={() => setOpenFilter(true)}
        >
          <FilterIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex mt-[20px] flex-col lg:flex-row">
        {/* Filtros - Versión desktop (siempre visible) */}
        <div className="hidden lg:block lg:w-[20%] p-[20px]">
          <FilterContent categoryContent={categoryContent} />
        </div>

        {/* Filtros - Versión móvil (Drawer) */}
        <Drawer
          open={openFilter}
          onClose={() => setOpenFilter(false)}
          className="p-4"
          placement="left"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filtros</h2>
            <IconButton
              variant="text"
              onClick={() => setOpenFilter(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <FilterContent categoryContent={categoryContent} />
        </Drawer>

        {/* Contenido principal */}
        <div className="w-full lg:w-[70%] p-[15px]">
          <p className="text-black text-lg font-bold">{categoryContent.description}</p>
          {/* Aquí iría tu lista de productos */}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;