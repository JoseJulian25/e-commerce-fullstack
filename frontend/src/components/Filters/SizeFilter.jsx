import { useState } from 'react';

const SizeFilter = ({ sizes }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeClick = (size) => {
    // Si el tamaño ya está en la lista de tamaños seleccionados, lo eliminamos, de lo contrario lo agregamos
    setSelectedSizes((prevState) =>
      prevState.includes(size)
        ? prevState.filter((item) => item !== size) // Eliminar tamaño si ya está
        : [...prevState, size] // Agregar tamaño si no está
    );
  };

  return (
    <div className="flex flex-col mb-4">
      <p className="text-[16px] text-black mt-5 mb-5 font-bold">Size</p>
      <div className="flex flex-wrap px-5 gap-2">
        {sizes?.map((size, index) => {
          const isSelected = selectedSizes.includes(size);
          return (
            <div className="flex gap-2" key={size}>
              <div
                onClick={() => handleSizeClick(size)}
                className={`border rounded-lg w-10 h-7 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200
                  ${isSelected ? "transform scale-110 border-3 border-black" : "border-gray-400"}`}
              >
                <span className="text-gray-600">{size}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SizeFilter;
