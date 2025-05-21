
import React from "react";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-hookah-dark pt-12 pb-6">
      <div className="hookah-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="text-hookah-accent text-2xl">
                <Icon name="Cloud" size={28} />
              </div>
              <span className="font-montserrat font-bold text-xl text-white">HOOKAH<span className="text-hookah-accent">LOUNGE</span></span>
            </a>
            <p className="text-hookah-light text-sm mb-4">
              Лучший кальянный ресторан с исключительной кухней, баром и первоклассным сервисом.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-hookah-light hover:text-hookah-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-hookah-light hover:text-hookah-accent transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-hookah-light hover:text-hookah-accent transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-hookah-light hover:text-hookah-accent transition-colors">
                <Icon name="Telegram" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-hookah-light hover:text-hookah-accent transition-colors">Главная</a>
              </li>
              <li>
                <a href="#about" className="text-hookah-light hover:text-hookah-accent transition-colors">О нас</a>
              </li>
              <li>
                <a href="#reservation" className="text-hookah-light hover:text-hookah-accent transition-colors">Бронирование</a>
              </li>
              <li>
                <a href="#menu" className="text-hookah-light hover:text-hookah-accent transition-colors">Меню</a>
              </li>
              <li>
                <a href="#events" className="text-hookah-light hover:text-hookah-accent transition-colors">Мероприятия</a>
              </li>
              <li>
                <a href="#contacts" className="text-hookah-light hover:text-hookah-accent transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">Контактная информация</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-hookah-accent" />
                <span className="text-hookah-light">ул. Дымная, 42, Москва</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-hookah-accent" />
                <a href="tel:+74951234567" className="text-hookah-light hover:text-hookah-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-hookah-accent" />
                <a href="mailto:info@hookahlounge.ru" className="text-hookah-light hover:text-hookah-accent transition-colors">
                  info@hookahlounge.ru
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">Часы работы</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-hookah-light">Понедельник - Четверг:</span>
                <span className="text-hookah-accent">16:00 - 02:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-hookah-light">Пятница - Суббота:</span>
                <span className="text-hookah-accent">16:00 - 04:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-hookah-light">Воскресенье:</span>
                <span className="text-hookah-accent">16:00 - 02:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-border/20 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hookah-light text-sm">
            &copy; {new Date().getFullYear()} HOOKAHLOUNGE. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-hookah-light hover:text-hookah-accent transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-hookah-light hover:text-hookah-accent transition-colors text-sm">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
