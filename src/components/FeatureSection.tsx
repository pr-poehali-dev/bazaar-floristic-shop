import { Truck, Clock, Award, CreditCard } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 bg-bazaar-lightMauve/30 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="font-serif text-lg font-bold mb-2 text-bazaar-navy">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6 text-bazaar-burgundy" />,
      title: "Быстрая доставка",
      description: "Доставим ваш заказ в течение 2 часов по всему городу"
    },
    {
      icon: <Clock className="h-6 w-6 text-bazaar-burgundy" />,
      title: "Свежие цветы",
      description: "Работаем только со свежими цветами от проверенных поставщиков"
    },
    {
      icon: <Award className="h-6 w-6 text-bazaar-burgundy" />,
      title: "Гарантия качества",
      description: "Если букет не понравится, мы заменим его или вернем деньги"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-bazaar-burgundy" />,
      title: "Удобная оплата",
      description: "Принимаем оплату картой, наличными и онлайн-переводами"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
