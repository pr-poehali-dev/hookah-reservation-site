
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DateTimePickerProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  timeSlots: string[];
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  timeSlots,
}) => {
  return (
    <div className="bg-card rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="w-full md:w-auto">
          <Label htmlFor="date" className="text-hookah-light mb-2 block">
            Выберите дату
          </Label>
          <Input
            id="date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-hookah-dark border-hookah-accent/50 focus-visible:ring-hookah-accent"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="w-full md:w-auto">
          <Label htmlFor="time" className="text-hookah-light mb-2 block">
            Выберите время
          </Label>
          <div className="flex flex-wrap gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className={
                  selectedTime === time
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
  );
};

export default DateTimePicker;
