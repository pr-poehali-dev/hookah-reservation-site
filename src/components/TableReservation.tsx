
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const TableReservation = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const tables = [
    { id: 1, name: "Стол 1", capacity: "2-4 чел.", location: "У окна" },
    { id: 2, name: "Стол 2", capacity: "4-6 чел.", location: "В центре" },
    { id: 3, name: "Стол 3", capacity: "2-4 чел.", location: "У окна" },
    { id: 4, name: "Стол 4", capacity: "6-8 чел.", location: "VIP-зона" },
    { id: 5, name: "Стол 5", capacity: "4-6 чел.", location: "У бара" },
    { id: 6, name: "Стол 6", capacity: "2 чел.", location: "Уединенный" },
  ];
  
  const timeSlots = ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика бронирования
    setIsDialogOpen(false);
    alert("Спасибо за бронирование! Мы свяжемся с вами для подтверждения.");
  };

  return (
    <section id="reservation" className="hookah-section bg-gradient-to-b from-hookah-dark to-card">
      <div className="hookah-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-hookah-accent font-medium">Бронирование</span>
          <h2 className="hookah-title">Выберите свой стол</h2>
          <p className="text-hookah-light">
            Чтобы гарантировать вам лучшее место, мы рекомендуем забронировать стол заранее. Выберите удобную дату и время, а также предпочтительный стол.
          </p>
        </div>
        
        <Tabs defaultValue="map" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="map">Схема столов</TabsTrigger>
            <TabsTrigger value="list">Список столов</TabsTrigger>
          </TabsList>
          
          <div className="bg-card rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="w-full md:w-auto">
                <Label htmlFor="date" className="text-hookah-light mb-2 block">Выберите дату</Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-hookah-dark border-hookah-accent/50 focus-visible:ring-hookah-accent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div className="w-full md:w-auto">
                <Label htmlFor="time" className="text-hookah-light mb-2 block">Выберите время</Label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={selectedTime === time 
                        ? "bg-hookah-accent text-hookah-dark hover:bg-hookah-accent/90" 
                        : "border-hookah-accent/50 text-hookah-light hover:bg-hookah-accent/10 hover:text-hookah-accent"
                      }
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <TabsContent value="map" className="mt-0">
            <div className="bg-card rounded-lg p-6 relative">
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-sm text-hookah-light">Доступен</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-sm text-hookah-light">Занят</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-full max-w-3xl relative p-6 bg-hookah-dark/50 rounded-lg border border-hookah-accent/20 mb-6">
                  <div className="p-4 border-2 border-dashed border-hookah-accent/30 rounded-lg bg-hookah-dark/30 text-center text-hookah-accent font-montserrat">
                    БАР
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
                  {tables.map((table) => (
                    <div
                      key={table.id}
                      className={`table-card ${selectedTable === table.id ? 'table-card-active' : ''}`}
                      onClick={() => setSelectedTable(table.id)}
                    >
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-1">{table.name}</h3>
                        <p className="text-sm text-hookah-accent mb-2">{table.capacity}</p>
                        <p className="text-xs text-hookah-light">{table.location}</p>
                      </div>
                      {selectedTable === table.id && (
                        <div className="absolute top-2 right-2 text-hookah-accent">
                          <Icon name="Check" size={16} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="mt-0">
            <div className="bg-card rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tables.map((table) => (
                  <div
                    key={table.id}
                    className={`table-card flex items-center ${selectedTable === table.id ? 'table-card-active' : ''}`}
                    onClick={() => setSelectedTable(table.id)}
                  >
                    <div className="mr-4 bg-hookah-dark/50 p-3 rounded-full">
                      <Icon name="LayoutDashboard" size={24} className="text-hookah-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{table.name}</h3>
                      <p className="text-sm text-hookah-light">{table.capacity} • {table.location}</p>
                    </div>
                    {selectedTable === table.id && (
                      <div className="ml-auto text-hookah-accent">
                        <Icon name="Check" size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-8">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-hookah-accent hover:bg-hookah-accent/90 text-hookah-dark px-6 py-6 text-lg"
                disabled={!selectedDate || !selectedTime || selectedTable === null}
                onClick={() => selectedDate && selectedTime && selectedTable !== null && setIsDialogOpen(true)}
              >
                <Icon name="CalendarDays" className="mr-2" size={20} />
                Забронировать
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-hookah-accent/30 sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl text-white">Завершите бронирование</DialogTitle>
                <DialogDescription className="text-hookah-light">
                  Введите ваши контактные данные для подтверждения бронирования
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-hookah-light">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" required className="bg-hookah-dark border-hookah-accent/50" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-hookah-light">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" required className="bg-hookah-dark border-hookah-accent/50" />
                </div>
                <div>
                  <Label htmlFor="guests" className="text-hookah-light">Количество гостей</Label>
                  <Input id="guests" type="number" min="1" max="10" defaultValue="2" required className="bg-hookah-dark border-hookah-accent/50" />
                </div>
                <div>
                  <Label htmlFor="comment" className="text-hookah-light">Комментарий (необязательно)</Label>
                  <Input id="comment" placeholder="Особые пожелания..." className="bg-hookah-dark border-hookah-accent/50" />
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-hookah-accent hover:bg-hookah-accent/90 text-hookah-dark w-full">
                    Подтвердить бронирование
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default TableReservation;
