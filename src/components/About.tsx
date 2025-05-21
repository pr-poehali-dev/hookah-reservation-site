
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Flame",
      title: "Премиум кальяны",
      description: "Мы используем только лучшие кальяны и табаки от ведущих мировых производителей."
    },
    {
      icon: "UtensilsCrossed",
      title: "Авторская кухня",
      description: "Наш шеф-повар создает блюда, которые идеально дополняют вкус кальяна."
    },
    {
      icon: "GlassWater",
      title: "Богатый бар",
      description: "Коллекция крафтовых коктейлей и напитков на любой вкус."
    },
    {
      icon: "Music",
      title: "Живая музыка",
      description: "Регулярные выступления музыкантов и диджей-сеты по выходным."
    },
  ];

  return (
    <section id="about" className="hookah-section bg-hookah-dark">
      <div className="hookah-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-hookah-accent font-medium">О нашем заведении</span>
            <h2 className="hookah-title">Место, где создаются воспоминания</h2>
            <p className="text-hookah-light mb-6">
              HOOKAHLOUNGE — это не просто кальянная, а целый мир удовольствий и отдыха. Мы создали уютное пространство, где каждый гость чувствует себя особенным. Наша команда профессионалов знает всё о создании идеального кальяна и атмосферы.
            </p>
            <p className="text-hookah-light mb-8">
              Уже более 5 лет мы радуем наших гостей отличным сервисом, разнообразием вкусов и уютной атмосферой. Наше заведение стало популярным местом встреч друзей, деловых переговоров и романтических свиданий.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-card rounded-lg p-4">
                <p className="text-3xl font-bold text-hookah-accent">5+</p>
                <p className="text-sm text-hookah-light">лет опыта</p>
              </div>
              <div className="bg-card rounded-lg p-4">
                <p className="text-3xl font-bold text-hookah-accent">30+</p>
                <p className="text-sm text-hookah-light">вкусов табака</p>
              </div>
              <div className="bg-card rounded-lg p-4">
                <p className="text-3xl font-bold text-hookah-accent">20+</p>
                <p className="text-sm text-hookah-light">видов коктейлей</p>
              </div>
              <div className="bg-card rounded-lg p-4">
                <p className="text-3xl font-bold text-hookah-accent">100%</p>
                <p className="text-sm text-hookah-light">довольных гостей</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="hookah-card">
                <CardContent className="p-6">
                  <div className="text-hookah-accent mb-4">
                    <Icon name={feature.icon} size={36} />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-hookah-light">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
