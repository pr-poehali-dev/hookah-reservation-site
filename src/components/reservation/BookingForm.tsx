
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface BookingFormProps {
  selectedDate: string;
  selectedTime: string;
  selectedTable: number | null;
  onSubmit: (e: React.FormEvent) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  selectedDate,
  selectedTime,
  selectedTable,
  onSubmit,
  isDialogOpen,
  setIsDialogOpen,
}) => {
  const isFormValid = selectedDate && selectedTime && selectedTable !== null;

  return (
    <div className="flex justify-center mt-8">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-hookah-accent hover:bg-hookah-accent/90 text-hookah-dark px-6 py-6 text-lg"
            disabled={!isFormValid}
            onClick={() => isFormValid && setIsDialogOpen(true)}
          >
            <Icon name="CalendarDays" className="mr-2" size={20} />
            Забронировать
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-card border-hookah-accent/30 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">
              Завершите бронирование
            </DialogTitle>
            <DialogDescription className="text-hookah-light">
              Введите ваши контактные данные для подтверждения бронирования
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-hookah-light">
                Ваше имя
              </Label>
              <Input
                id="name"
                placeholder="Иван Иванов"
                required
                className="bg-hookah-dark border-hookah-accent/50"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-hookah-light">
                Телефон
              </Label>
              <Input
                id="phone"
                placeholder="+7 (___) ___-__-__"
                required
                className="bg-hookah-dark border-hookah-accent/50"
              />
            </div>
            <div>
              <Label htmlFor="guests" className="text-hookah-light">
                Количество гостей
              </Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="10"
                defaultValue="2"
                required
                className="bg-hookah-dark border-hookah-accent/50"
              />
            </div>
            <div>
              <Label htmlFor="comment" className="text-hookah-light">
                Комментарий (необязательно)
              </Label>
              <Input
                id="comment"
                placeholder="Особые пожелания..."
                className="bg-hookah-dark border-hookah-accent/50"
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-hookah-accent hover:bg-hookah-accent/90 text-hookah-dark w-full"
              >
                Подтвердить бронирование
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingForm;
