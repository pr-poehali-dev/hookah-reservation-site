
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert("Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <Card className="bg-hookah-dark border-hookah-accent/20">
      <CardContent className="p-6">
        <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">Связаться с нами</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-hookah-light mb-2 block">Ваше имя</Label>
              <Input 
                id="name" 
                required 
                className="bg-card border-hookah-accent/50 focus-visible:ring-hookah-accent" 
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-hookah-light mb-2 block">Email</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                className="bg-card border-hookah-accent/50 focus-visible:ring-hookah-accent" 
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="subject" className="text-hookah-light mb-2 block">Тема</Label>
            <Input 
              id="subject" 
              required 
              className="bg-card border-hookah-accent/50 focus-visible:ring-hookah-accent" 
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-hookah-light mb-2 block">Сообщение</Label>
            <Textarea 
              id="message" 
              required 
              rows={5} 
              className="bg-card border-hookah-accent/50 focus-visible:ring-hookah-accent" 
            />
          </div>
          
          <Button type="submit" className="w-full bg-hookah-accent hover:bg-hookah-accent/90 text-hookah-dark">
            Отправить сообщение
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
