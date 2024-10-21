import React, { createContext, useContext, useState, ReactNode } from "react";

// Interfaccia Photos
interface Photos {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

// Interfaccia data

interface Data {
  id: number;
  albumTitle: string;
  userName: string;
  photos: Photos[];
}

// Interfaccia context

interface DataContextType {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  filteredData: Data[];
  setFilteredData: React.Dispatch<React.SetStateAction<Data[]>>;
  isSearching: Boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<Boolean>>;
  resetData: () => void;
}

// Definisco il tipo per le props del DataProvider
interface DataProviderProps {
  children: ReactNode; // Definisco che il DataProvider accetta dei "children"
}

// Creo il context

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data[]>([]);
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [isSearching, setIsSearching] = useState<Boolean>(false);

  const resetData = () => setFilteredData([]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        filteredData,
        setFilteredData,
        resetData,
        isSearching,
        setIsSearching,
      }}
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
