import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Главная", href: "#home" },
    { name: "О нас", href: "#about" },
    { name: "Бронирование", href: "#reservation" },
    { name: "Меню", href: "#menu" },
    { name: "Мероприятия", href: "#events" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-hookah-dark/95 shadow-lg backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="hookah-container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="text-hookah-accent text-2xl">
            <Icon name="Flame" size={28} />
          </div>
          <span className="font-montserrat font-bold text-xl text-white">
            FIRE<span className="text-hookah-accent">AND</span>SMOKE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-hookah-light hover:text-hookah-accent transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Button className="hidden md:flex bg-hookah-accent text-hookah-dark hover:bg-hookah-accent/90">
          <Icon name="Phone" className="mr-2" size={16} />
          Позвонить
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-hookah-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-hookah-dark/95 backdrop-blur-sm shadow-lg">
          <div className="hookah-container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-hookah-light hover:text-hookah-accent transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-hookah-accent text-hookah-dark hover:bg-hookah-accent/90 w-full">
              <Icon name="Phone" className="mr-2" size={16} />
              Позвонить
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
