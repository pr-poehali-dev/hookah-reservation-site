
import { ContactItem, SocialLink } from "./types";

export const contactItems: ContactItem[] = [
  {
    icon: "MapPin",
    title: "Адрес",
    content: "ул. Луначарского д. 32, г. Пермь",
    link: "https://maps.google.com",
    linkText: "Открыть на карте"
  },
  {
    icon: "Phone",
    title: "Телефон",
    content: "+7 (904) 111-22-02",
    link: "tel:+79041112202",
    linkText: "Позвонить"
  },
  {
    icon: "Mail",
    title: "Email",
    content: "info@fireandsmoke.ru",
    link: "mailto:info@fireandsmoke.ru",
    linkText: "Написать"
  },
  {
    icon: "Clock",
    title: "Часы работы",
    content: "Пн-Чт: 16:00-02:00, Пт-Вс: 16:00-04:00",
    link: null,
    linkText: null
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    icon: "Instagram",
    url: "#"
  },
  {
    name: "Facebook",
    icon: "Facebook",
    url: "#"
  },
  {
    name: "Twitter",
    icon: "Twitter",
    url: "#"
  },
  {
    name: "Telegram",
    icon: "Telegram",
    url: "#"
  }
];
