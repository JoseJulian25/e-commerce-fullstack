import React, { useMemo } from "react";
import FilterIcon from "../../components/common/FilterIcon";
import content from "../../data/content.json";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Drawer } from "@material-tailwind/react";
import FilterContent from "../../components/Filters/FilterContent";
import { IconButton } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

const categories = content?.categories;
const products = content?.products;

const ProductListPage = ({ categoryType }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  const categoryContent = useMemo(() => {
    return categories.find((category) => category.code === categoryType);
  }, [categoryType]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Simula un retraso de carga para demostración (remover en producción)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Aquí iría tu llamada real a la API
        // const response = await fetch(`/api/products?category=${categoryType}`);
        // const data = await response.json();
        // setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryType]);

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
        <div className="hidden lg:block lg:w-[20%] p-[20px] shadow-2xl">
          <span className="text-xl font-bold">Filtros</span>
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
            <IconButton variant="text" onClick={() => setOpenFilter(false)}>
              <XMarkIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <FilterContent categoryContent={categoryContent} />
        </Drawer>

        {/* Contenido principal */}
        <div className="w-full lg:w-[80%] p-5">
          <p className="text-black text-lg font-bold">
            {categoryContent.description}
          </p>
          <div className="flex flex-wrap gap-5 pt-5">
            {loading
              ? // Muestra 6 skeletons (o el número que prefieras)
                Array.from({ length: 8 }).map((_, index) => (
                  <ProductCardSkeleton key={`skeleton-${index}`} />
                ))
              : // Muestra los productos reales cuando ya están cargados
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
