import { Truck, Clock, Heart, Award } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Быстрая доставка",
    description: "Доставка по городу в течение 2 часов после оформления заказа"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Свежие цветы",
    description: "Мы работаем только со свежими цветами и обновляем ассортимент ежедневно"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Индивидуальный подход",
    description: "Создадим букет по вашему вкусу с учетом всех пожеланий"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Гарантия качества",
    description: "Гарантируем качество и свежесть всех наших цветов и растений"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
