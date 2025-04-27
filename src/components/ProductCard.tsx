import { Button } from "./ui/button";
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
    <div className="group relative overflow-hidden rounded-md bg-card shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium text-card-foreground truncate">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-lg font-semibold">{product.price} ₽</span>
          <Button
            variant="outline"
            size="sm"
            className="text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span>В корзину</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
