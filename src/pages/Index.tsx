
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TableReservation from "@/components/TableReservation";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-hookah-dark">
      <Header />
      <Hero />
      <About />
      <TableReservation />
      <Menu />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
