import { useState, useEffect } from "react";
import { useDataContext } from "../Context/Context";

const SearchBar = () => {
  const { data, setFilteredData, resetData, setIsSearching } = useDataContext();
  const [searchQuery, setSearchQuery] = useState(
    () => sessionStorage.getItem("searchQuery") || ""
  );

  useEffect(() => {
    // Aggiorna i risultati ogni volta che la query cambia
    if (searchQuery.trim() === "") {
      resetData();
      setIsSearching(false);
    } else {
      const filtered = data.filter((item) =>
        item.albumTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
      setIsSearching(true);
    }
    // Salva la query nel sessionStorage
    sessionStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery, data, setFilteredData, setIsSearching]);

  // searchQuery, data, resetData, setFilteredData, setIsSearching

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Previene il refresh della pagina
      handleSearch();
    }
  };

  // Funzione per avviare la ricerca con il bottone
  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    const filtered = data.filter((item) =>
      item.albumTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setIsSearching(true);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-semibold mb-4">Cerca album per titolo</h1>
      <div className="flex w-full md:w-1/2 lg:w-1/3 space-x-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Aggiorna la query ad ogni tasto
          onKeyDown={handleKeyPress} // Rileva il tasto "Invio"
          placeholder="Inserisci un titolo..."
          className="w-full p-2 border border-colorNidek rounded-lg text-sm"
        />
      </div>
    </div>
  );
};

export default SearchBar;
