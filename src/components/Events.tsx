
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Джазовый вечер",
      date: "25 мая",
      time: "20:00",
      description: "Живое выступление джазового квартета. Особая кальянная карта этим вечером.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      tag: "Музыка"
    },
    {
      id: 2,
      title: "Дегустация редких табаков",
      date: "30 мая",
      time: "19:00",
      description: "Эксклюзивная дегустация редких линеек от ведущих производителей табака.",
      image: "https://images.unsplash.com/photo-1615413040386-8914ee9163d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      tag: "Дегустация"
    },
    {
      id: 3,
      title: "Мастер-класс от бармена",
      date: "5 июня",
      time: "18:30",
      description: "Научитесь готовить коктейли, которые идеально сочетаются с кальяном.",
      image: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3",
      tag: "Мастер-класс"
    },
  ];

  return (
    <section id="events" className="hookah-section bg-hookah-dark">
      <div className="hookah-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-hookah-accent font-medium">Афиша</span>
          <h2 className="hookah-title">Предстоящие мероприятия</h2>
          <p className="text-hookah-light">
            В нашем заведении регулярно проходят интересные мероприятия, дегустации и выступления музыкантов. Подписывайтесь на наши социальные сети, чтобы быть в курсе всех событий.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {events.map((event) => (
            <Card key={event.id} className="bg-card border-hookah-accent/10 overflow-hidden group hover:border-hookah-accent/50 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hookah-dark to-transparent opacity-80"></div>
                <Badge className="absolute top-3 right-3 bg-hookah-accent text-hookah-dark hover:bg-hookah-accent/90">
                  {event.tag}
                </Badge>
                <div className="absolute bottom-3 left-3 bg-hookah-dark/80 text-white px-3 py-1 rounded-lg flex items-center">
                  <Icon name="Calendar" size={14} className="mr-2" />
                  <span>{event.date} • {event.time}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-hookah-light text-sm mb-4">{event.description}</p>
                <Button variant="outline" className="w-full border-hookah-accent text-hookah-accent hover:bg-hookah-accent/10">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-hookah-accent hover:bg-hookah-accent/90 text-hookah-dark">
            <Icon name="CalendarDays" className="mr-2" size={16} />
            Все мероприятия
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
