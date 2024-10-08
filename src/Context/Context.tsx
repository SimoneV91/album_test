import React, { createContext, useContext, useState, ReactNode } from "react";

// Interfaccia

interface DataContextType {
  data: any[];
  setData: (data: any[]) => void;
  filteredData: any[];
  setFilteredData: (data: any[]) => void;
  resetData: () => void;
}

// Definisco il tipo per le props del DataProvider
interface DataProviderProps {
  children: ReactNode; // Definisco che il DataProvider accetta dei "children"
}

// Creo il context

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const resetData = () => setFilteredData([]);

  return (
    <DataContext.Provider
      value={{ data, setData, filteredData, setFilteredData, resetData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(
      "il context deve essere utilizzato all'interno di un provider"
    );
  }
  return context;
};
