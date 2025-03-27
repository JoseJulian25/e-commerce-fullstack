import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Badge
} from "@material-tailwind/react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export function ProductCard({ product }) {
  console.log(product)
  const { 
    title, 
    description, 
    price, 
    discount, 
    thumbnail, 
    brand,
    rating
  } = product;

  

  const discountedPrice = discount 
    ? (price - (price * discount / 100)).toFixed(2)
    : null;

  return (
    <Card className="w-full sm:w-[45%] md:w-[23%] shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Card Header with Image and Wishlist Button */} 
      <CardHeader floated={false} className="relative h-64 m-0">
        <img
          src="https://th.bing.com/th/id/R.7a22b452450e6dc9aabcc5e46e84b10f?rik=oQ8XVDlWE2%2f3gw&pid=ImgRaw&r=0"
          alt={title}
          className="h-full w-full object-cover"
        />
        
        {/* Wishlist Button */}
        <IconButton
          variant="text"
          size="md"
          ripple={false}
          className="!absolute top-2 right-2 bg-white/90 rounded-full hover:bg-white"
        >
          <HeartIcon className="h-6 w-6 text-gray-700 hover:fill-gray-900 transition-all duration-500 hover:cursor-pointer" />
        </IconButton>
        
        {/* Discount Badge */}
        {discount && (
          <Badge
            color="red"
            content={`-${discount}%`}
            className="!absolute top-2 left-2"
          />
        )}
      </CardHeader>

      {/* Card Body with Product Info */}
      <CardBody className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Typography variant="h6" className="font-bold text-gray-900">
            {brand}
          </Typography>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <Typography className="ml-1 text-gray-600">
              {rating}
            </Typography>
          </div>
        </div>
        
        <Typography variant="paragraph" className="font-medium text-gray-800 mb-2">
          {title}
        </Typography>
        
        <p variant="small" className="text-gray-600 mb-3 line-clamp-1">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {discountedPrice ? (
              <>
                <Typography variant="h6" className="font-bold text-red-500">
                  ${discountedPrice}
                </Typography>
                <Typography variant="small" className="line-through text-gray-500">
                  ${price.toFixed(2)}
                </Typography>
              </>
            ) : (
              <Typography variant="h6" className="font-bold text-gray-900">
                ${price.toFixed(2)}
              </Typography>
            )}
          </div>
        </div>
      </CardBody>

      {/* Card Footer with Add to Cart Button */}
      <CardFooter className="pt-0 px-4 pb-4">
        <Button
          ripple={true}
          fullWidth={true}
          className="flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800 hover:cursor-pointer"
        >
          <ShoppingBagIcon className="h-5 w-5" />
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}