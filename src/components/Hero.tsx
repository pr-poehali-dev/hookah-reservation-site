
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hookah-pattern bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-hookah-dark/80 via-hookah-dark/90 to-hookah-dark"></div>
      </div>

      <div className="hookah-container relative z-10 flex flex-col items-center text-center py-16 md:py-24">
        <span className="text-hookah-accent font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          Отдых в атмосфере премиального кальянного лаунжа
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          Погрузитесь в мир дымных удовольствий и изысканных вкусов
        </h1>
        <p className="text-lg text-hookah-light mb-8 max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Насладитесь лучшими кальянами, изысканной кухней и богатым выбором напитков в нашем современном лаунж-пространстве.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          <Button className="bg-hookah-accent hover:bg-hookah-accent/90 text-hookah-dark px-6 py-6 text-lg">
            <Icon name="CalendarDays" className="mr-2" size={20} />
            Забронировать стол
          </Button>
          <Button variant="outline" className="border-hookah-accent text-hookah-accent hover:bg-hookah-accent/10 px-6 py-6 text-lg">
            <Icon name="MenuSquare" className="mr-2" size={20} />
            Смотреть меню
          </Button>
        </div>
        
        <div className="flex items-center gap-4 mt-12 animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
          <div className="flex -space-x-4 overflow-hidden">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-hookah-dark" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=200&h=200" alt="Пользователь" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-hookah-dark" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200" alt="Пользователь" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-hookah-dark" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200" alt="Пользователь" />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1 text-hookah-gold">
              <Icon name="Star" size={16} className="fill-hookah-gold" />
              <Icon name="Star" size={16} className="fill-hookah-gold" />
              <Icon name="Star" size={16} className="fill-hookah-gold" />
              <Icon name="Star" size={16} className="fill-hookah-gold" />
              <Icon name="Star" size={16} className="fill-hookah-gold" />
            </div>
            <span className="text-hookah-light text-sm">Более 1000 довольных клиентов в месяц</span>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-hookah-accent transition-colors animate-bounce"
      >
        <Icon name="ChevronDown" size={30} />
      </a>
    </section>
  );
};

export default Hero;
