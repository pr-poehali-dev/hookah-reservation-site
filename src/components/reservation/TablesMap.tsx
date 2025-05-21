
import React from "react";
import TableCard from "./TableCard";
import { Table } from "./types";

interface TablesMapProps {
  tables: Table[];
  selectedTable: number | null;
  setSelectedTable: (id: number) => void;
}

const TablesMap: React.FC<TablesMapProps> = ({
  tables,
  selectedTable,
  setSelectedTable,
}) => {
  return (
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
            <TableCard
              key={table.id}
              id={table.id}
              name={table.name}
              capacity={table.capacity}
              location={table.location}
              selectedTable={selectedTable}
              onClick={setSelectedTable}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TablesMap;
