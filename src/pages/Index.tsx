import { useState, useEffect } from "react";
import BazaarNavbar from "@/components/BazaarNavbar";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import FeatureSection from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flower } from "lucide-react";
import { Product } from "@/components/ProductCard";

const popularProducts: Product[] = [
  {
    id: 1,
    name: "Нежное облако",
    price: 3500,
    image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Букеты",
  },
  {
    id: 2,
    name: "Весенний аромат",
    price: 4200,
    image: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Букеты",
  },
  {
    id: 3,
    name: "Розовая элегантность",
    price: 3900,
    image: "https://images.unsplash.com/photo-1494336934272-f0efcedfc8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: "Цветы в коробке",
  },
];

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <BazaarNavbar />
      
      {/* Main content with padding for fixed navbar */}
      <main className="flex-grow pt-16">
        <HeroBanner />

        {/* Popular Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold">Популярные букеты</h2>
              <Button
                variant="link"
                className="text-primary flex items-center"
              >
                Смотреть все <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <FeatureSection />

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">О магазине Bazaar</h2>
                <p className="text-muted-foreground mb-4">
                  Мы создаем уникальные цветочные композиции, которые подчеркнут ваши чувства и сделают любой день особенным. Наша команда флористов имеет многолетний опыт работы и может реализовать самые смелые идеи.
                </p>
                <p className="text-muted-foreground mb-6">
                  В нашем магазине вы найдете свежие цветы, стильные букеты, оригинальные композиции и комнатные растения для дома и офиса.
                </p>
                <Button className="bg-primary hover:bg-primary/90">Узнать больше</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Флористы за работой"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Следите за нами в Instagram</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Вдохновляйтесь нашими работами и узнавайте о новинках и скидках первыми
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-md">
                  <img
                    src={`https://images.unsplash.com/photo-${1550850839 + i * 1000}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80`}
                    alt={`Instagram фото ${i + 1}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="text-primary border-primary">
                <Flower className="h-4 w-4 mr-2" /> @bazaar_flowers
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Bazaar</h3>
              <p className="mb-4">Уникальные букеты и композиции для любого случая.</p>
              <p>© {new Date().getFullYear()} Bazaar. Все права защищены.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Контакты</h3>
              <p className="mb-2">Адрес: ул. Цветочная, 15</p>
              <p className="mb-2">Телефон: +7 (999) 123-45-67</p>
              <p>Email: info@bazaar-flowers.ru</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Время работы</h3>
              <p className="mb-2">Пн-Пт: 8:00 - 20:00</p>
              <p className="mb-2">Сб: 9:00 - 18:00</p>
              <p>Вс: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
