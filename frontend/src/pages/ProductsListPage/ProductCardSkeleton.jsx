import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";
  
  export function ProductCardSkeleton() {
    return (
      <Card className="sm:w-[30%] md:w-[20%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] animate-pulse">
        {/* Imagen placeholder */}
        <CardHeader
          floated={false}
          className="relative h-64 w-85 m-0 bg-gray-200 rounded-none"
        >
          <div className="h-full w-full bg-gray-300"></div>
        </CardHeader>
        
        {/* Contenido placeholder */}
        <CardBody className="space-y-3 p-4">
          <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded-full"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded-full w-1/4 mt-4"></div>
        </CardBody>
        
        {/* Botón placeholder */}
        <CardFooter className="pt-0 px-4 pb-4">
          <div className="h-10 bg-gray-200 rounded-md"></div>
        </CardFooter>
      </Card>
    );
  }