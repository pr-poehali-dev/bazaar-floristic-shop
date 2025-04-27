import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image container */}
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Quick add button - Appears on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button size="icon" className="bg-bazaar-burgundy hover:bg-bazaar-burgundy/90 text-white rounded-full h-10 w-10">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Category tag */}
      <div className="absolute top-4 left-4">
        <span className="bg-bazaar-lightMauve/80 text-bazaar-navy text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      
      {/* Product details */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-bold text-bazaar-navy mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-bazaar-burgundy font-bold">{product.price} ₽</span>
          <Button variant="ghost" size="sm" className="text-bazaar-navy hover:text-bazaar-burgundy hover:bg-transparent p-0">
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
