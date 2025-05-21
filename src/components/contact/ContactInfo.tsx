
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { ContactItem } from "./types";

interface ContactInfoProps {
  contacts: ContactItem[];
}

const ContactInfo = ({ contacts }: ContactInfoProps) => {
  return (
    <>
      <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">Контактная информация</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {contacts.map((contact, index) => (
          <Card key={index} className="hookah-card">
            <CardContent className="p-6">
              <div className="text-hookah-accent mb-2">
                <Icon name={contact.icon} size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">{contact.title}</h4>
              <p className="text-hookah-light text-sm mb-2">{contact.content}</p>
              {contact.link && (
                <a 
                  href={contact.link} 
                  className="text-hookah-accent text-sm hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.linkText} <Icon name="ArrowUpRight" size={14} />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ContactInfo;
