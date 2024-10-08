import { useState } from "react";
import { useDataContext } from "../../Context/Context";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { data, setFilteredData, resetData } = useDataContext();

  // Funizone per filtrare i risultati per titolo

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    // Filtra i dati in base al titolo
    const filtered = data.filter((item) =>
      item.albumTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setIsSearching(true);
  };

  // Funzione per resettare i dati originali dopo un filtraggio

  const handleReset = () => {
    setSearchQuery(""); // Resetta il campo di ricerca
    resetData(); // Ripristino i dati originali
    setIsSearching(false);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-semibold mb-4">Cerca album per titolo</h1>
      <div className="flex w-full md:w-1/2 lg:w-1/3 space-x-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Inserisci un titolo..."
          className="w-full p-2 border border-gray-300 rounded-lg text-sm"
        />
        <button
          onClick={isSearching ? handleReset : handleSearch} // Cambia comportamento del bottone
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          style={{ backgroundColor: "rgb(0,113,189)" }}
        >
          {isSearching ? "Annulla" : "Cerca"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
