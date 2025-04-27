import { Button } from "./ui/button";

const HeroBanner = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
        alt="Флористический магазин Bazaar"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <div className="text-center max-w-3xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Bazaar Цветы
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Уникальные букеты и композиции для любого случая. Доставка в день заказа.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Выбрать букет
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Специальные предложения
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
