
import React from "react";
import Icon from "@/components/ui/icon";

interface TableCardProps {
  id: number;
  name: string;
  capacity: string;
  location: string;
  selectedTable: number | null;
  onClick: (id: number) => void;
  variant?: "grid" | "list";
}

const TableCard: React.FC<TableCardProps> = ({
  id,
  name,
  capacity,
  location,
  selectedTable,
  onClick,
  variant = "grid",
}) => {
  const isSelected = selectedTable === id;

  if (variant === "list") {
    return (
      <div
        className={`table-card flex items-center ${isSelected ? "table-card-active" : ""}`}
        onClick={() => onClick(id)}
      >
        <div className="mr-4 bg-hookah-dark/50 p-3 rounded-full">
          <Icon name="LayoutDashboard" size={24} className="text-hookah-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-hookah-light">
            {capacity} • {location}
          </p>
        </div>
        {isSelected && (
          <div className="ml-auto text-hookah-accent">
            <Icon name="Check" size={20} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`table-card ${isSelected ? "table-card-active" : ""}`}
      onClick={() => onClick(id)}
    >
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <p className="text-sm text-hookah-accent mb-2">{capacity}</p>
        <p className="text-xs text-hookah-light">{location}</p>
      </div>
      {isSelected && (
        <div className="absolute top-2 right-2 text-hookah-accent">
          <Icon name="Check" size={16} />
        </div>
      )}
    </div>
  );
};

export default TableCard;
