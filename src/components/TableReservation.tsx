import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DateTimePicker from "./reservation/DateTimePicker";
import TablesMap from "./reservation/TablesMap";
import TablesList from "./reservation/TablesList";
import BookingForm from "./reservation/BookingForm";
import { tables, timeSlots } from "./reservation/tableData";

const TableReservation = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика бронирования
    setIsDialogOpen(false);
    alert("Спасибо за бронирование! Мы свяжемся с вами для подтверждения.");
  };

  return (
    <section
      id="reservation"
      className="hookah-section bg-gradient-to-b from-hookah-dark to-card"
    >
      <div className="hookah-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-hookah-accent font-medium">Бронирование</span>
          <h2 className="hookah-title">Выберите свой стол</h2>
          <p className="text-hookah-light">
            Чтобы гарантировать вам лучшее место, мы рекомендуем забронировать
            стол заранее. Выберите удобную дату и время, а также
            предпочтительный стол.
          </p>
        </div>

        <Tabs defaultValue="map" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="map">Схема столов</TabsTrigger>
            <TabsTrigger value="list">Список столов</TabsTrigger>
          </TabsList>

          <DateTimePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            timeSlots={timeSlots}
          />

          <TabsContent value="map" className="mt-0">
            <TablesMap
              tables={tables}
              selectedTable={selectedTable}
              setSelectedTable={setSelectedTable}
            />
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <TablesList
              tables={tables}
              selectedTable={selectedTable}
              setSelectedTable={setSelectedTable}
            />
          </TabsContent>
        </Tabs>

        <BookingForm
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          selectedTable={selectedTable}
          onSubmit={handleBooking}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      </div>
    </section>
  );
};

export default TableReservation;
