import React from "react";
import ContactInfo from "./contact/ContactInfo";
import SocialLinks from "./contact/SocialLinks";
import ContactForm from "./contact/ContactForm";
import { contactItems, socialLinks } from "./contact/contactData";

const Contact = () => {
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
            <ContactInfo contacts={contactItems} />
            <SocialLinks socials={socialLinks} />
          </div>

          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
