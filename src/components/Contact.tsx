import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "MapPin",
      title: "Адрес",
      content: "ул. Луначарского д. 32, г. Пермь",
      link: "https://maps.google.com",
      linkText: "Открыть на карте",
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (904) 111-22-02",
      link: "tel:+79041112202",
      linkText: "Позвонить",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@fireandsmoke.ru",
      link: "mailto:info@fireandsmoke.ru",
      linkText: "Написать",
    },
    {
      icon: "Clock",
      title: "Часы работы",
      content: "Пн-Чт: 16:00-02:00, Пт-Вс: 16:00-04:00",
      link: null,
      linkText: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert("Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section id="contacts" className="hookah-section bg-card">
      <div className="hookah-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-hookah-accent font-medium">Контакты</span>
          <h2 className="hookah-title">Мы ждем вас</h2>
          <p className="text-hookah-light">
            Свяжитесь с нами любым удобным способом или оставьте сообщение через
            форму обратной связи. Мы всегда рады ответить на ваши вопросы.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">
              Контактная информация
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contacts.map((contact, index) => (
                <Card key={index} className="hookah-card">
                  <CardContent className="p-6">
                    <div className="text-hookah-accent mb-2">
                      <Icon name={contact.icon} size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-hookah-light text-sm mb-2">
                      {contact.content}
                    </p>
                    {contact.link && (
                      <a
                        href={contact.link}
                        className="text-hookah-accent text-sm hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.linkText}{" "}
                        <Icon name="ArrowUpRight" size={14} />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">
              Мы в социальных сетях
            </h3>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="bg-hookah-dark hover:bg-hookah-accent/10 w-10 h-10 rounded-full flex items-center justify-center text-hookah-accent transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="bg-hookah-dark hover:bg-hookah-accent/10 w-10 h-10 rounded-full flex items-center justify-center text-hookah-accent transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="bg-hookah-dark hover:bg-hookah-accent/10 w-10 h-10 rounded-full flex items-center justify-center text-hookah-accent transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="bg-hookah-dark hover:bg-hookah-accent/10 w-10 h-10 rounded-full flex items-center justify-center text-hookah-accent transition-colors"
              >
                <Icon name="Telegram" size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <Card className="bg-hookah-dark border-hookah-accent/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">
                  Связаться с нами
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-hookah-light mb-2 block"
                      >
                        Ваше имя
                      </Label>
                      <Input
                        id="name"
                        required
                        className="bg-card border-hookah-accent/50 focus-visible:ring-hookah-accent"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-hookah-light mb-2 block"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-card border-hookah-accent/50 focus-visible:ring-hookah-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-hookah-light mb-2 block"
                    >
                      Тема
                    </Label>
                    <Input
                      id="subject"
                      required
                      className="bg-card border-hookah-accent/50 focus-visible:ring-hookah-accent"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-hookah-light mb-2 block"
                    >
                      Сообщение
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      className="bg-card border-hookah-accent/50 focus-visible:ring-hookah-accent"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-hookah-accent hover:bg-hookah-accent/90 text-hookah-dark"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
