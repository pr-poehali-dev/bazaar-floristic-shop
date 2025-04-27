import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-bazaar-navy h-[600px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1591271940509-bf8d29136518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Цветочная композиция"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bazaar-navy/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center p-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
            Цветы с душой и <span className="text-bazaar-softPink">любовью</span>
          </h1>
          <p className="mb-8 text-lg text-white/90 max-w-xl mx-auto">
            Мы создаем уникальные букеты и композиции для любого случая. 
            Доставка в день заказа по всему городу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-bazaar-burgundy hover:bg-bazaar-burgundy/90 text-white">
              Заказать букет
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Каталог
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
