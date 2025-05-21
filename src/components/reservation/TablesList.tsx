
import React from "react";
import TableCard from "./TableCard";
import { Table } from "./types";

interface TablesListProps {
  tables: Table[];
  selectedTable: number | null;
  setSelectedTable: (id: number) => void;
}

const TablesList: React.FC<TablesListProps> = ({
  tables,
  selectedTable,
  setSelectedTable,
}) => {
  return (
    <div className="bg-card rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tables.map((table) => (
          <TableCard
            key={table.id}
            id={table.id}
            name={table.name}
            capacity={table.capacity}
            location={table.location}
            selectedTable={selectedTable}
            onClick={setSelectedTable}
            variant="list"
          />
        ))}
      </div>
    </div>
  );
};

export default TablesList;
