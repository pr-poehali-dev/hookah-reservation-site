
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Menu = () => {
  const menuCategories = [
    { id: "hookah", label: "Кальяны", icon: "Cloud" },
    { id: "bar", label: "Бар", icon: "Wine" },
    { id: "food", label: "Кухня", icon: "UtensilsCrossed" },
  ];

  const hookahMenu = [
    { name: "Классический", description: "На воде с классическими вкусами", price: "900 ₽" },
    { name: "Фруктовый", description: "На фруктовой чаше с нежным вкусом", price: "1200 ₽" },
    { name: "Премиум", description: "Премиальный табак со сложным букетом", price: "1500 ₽" },
    { name: "На молоке", description: "С добавлением молока для мягкости", price: "1100 ₽" },
    { name: "Авторский", description: "Фирменные миксы от наших кальянщиков", price: "1700 ₽" },
    { name: "Dark Side", description: "Крепкий табак с насыщенным вкусом", price: "1400 ₽" },
  ];

  const barMenu = [
    { name: "Мохито", description: "Классический освежающий коктейль", price: "450 ₽" },
    { name: "Дымный Джек", description: "Виски, специи, цитрусовый сок", price: "550 ₽" },
    { name: "Апероль Шприц", description: "Игристое вино и апероль", price: "490 ₽" },
    { name: "Облачный виски", description: "Виски со специями и дымом", price: "650 ₽" },
    { name: "Маргарита", description: "Текила, трипл сек, лаймовый сок", price: "520 ₽" },
    { name: "Лимонады", description: "Различные вкусы домашних лимонадов", price: "320 ₽" },
  ];

  const foodMenu = [
    { name: "Мясная тарелка", description: "Ассорти из мясных деликатесов", price: "890 ₽" },
    { name: "Сырная тарелка", description: "Подборка сыров с медом и орехами", price: "750 ₽" },
    { name: "Горячие закуски", description: "Крылышки, наггетсы, картофель", price: "590 ₽" },
    { name: "Пицца Маргарита", description: "Томаты, моцарелла, базилик", price: "650 ₽" },
    { name: "Бургер классический", description: "Говяжья котлета, овощи, соус", price: "550 ₽" },
    { name: "Фруктовая тарелка", description: "Сезонные фрукты", price: "490 ₽" },
  ];

  const renderMenuItems = (items: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="hookah-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-montserrat font-semibold text-white">{item.name}</h3>
                <span className="text-hookah-accent font-bold">{item.price}</span>
              </div>
              <p className="text-hookah-light text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="hookah-section bg-card">
      <div className="hookah-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-hookah-accent font-medium">Наше меню</span>
          <h2 className="hookah-title">Насладитесь изысканными вкусами</h2>
          <p className="text-hookah-light">
            Мы предлагаем разнообразное меню кальянов, напитков и закусок, чтобы сделать ваш отдых максимально приятным. Все наши блюда и напитки отлично сочетаются с кальяном.
          </p>
        </div>
        
        <Tabs defaultValue="hookah" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-hookah-accent data-[state=active]:text-hookah-dark"
              >
                <Icon name={category.icon} className="mr-2" size={16} />
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="hookah" className="mt-0">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-hookah-accent/50"></div>
              <h3 className="mx-4 text-2xl font-montserrat font-bold text-white">Кальянная карта</h3>
              <div className="h-px w-12 bg-hookah-accent/50"></div>
            </div>
            {renderMenuItems(hookahMenu)}
            <div className="mt-8 p-4 bg-hookah-dark/50 rounded-lg border border-hookah-accent/20 text-center">
              <p className="text-hookah-light text-sm">
                Можем приготовить кальян на любом табаке. Спросите нашего кальянного мастера о специальных предложениях.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="bar" className="mt-0">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-hookah-accent/50"></div>
              <h3 className="mx-4 text-2xl font-montserrat font-bold text-white">Барная карта</h3>
              <div className="h-px w-12 bg-hookah-accent/50"></div>
            </div>
            {renderMenuItems(barMenu)}
            <div className="mt-8 p-4 bg-hookah-dark/50 rounded-lg border border-hookah-accent/20 text-center">
              <p className="text-hookah-light text-sm">
                Полную барную карту можно увидеть у барменов. У нас регулярно появляются сезонные коктейли.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="food" className="mt-0">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-hookah-accent/50"></div>
              <h3 className="mx-4 text-2xl font-montserrat font-bold text-white">Меню кухни</h3>
              <div className="h-px w-12 bg-hookah-accent/50"></div>
            </div>
            {renderMenuItems(foodMenu)}
            <div className="mt-8 p-4 bg-hookah-dark/50 rounded-lg border border-hookah-accent/20 text-center">
              <p className="text-hookah-light text-sm">
                Для больших компаний мы предлагаем специальные сеты закусок. Спрашивайте у официанта.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
