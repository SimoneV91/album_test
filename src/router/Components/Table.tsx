import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../Context/Context";

const DataTable = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);
  const [photos, setPhotos] = useState<any[]>([]);
  const { data, setData, filteredData, setFilteredData } = useDataContext();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // Stato per ordinamento
  const navigate = useNavigate();

  // Chiamate get al redering del componente

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.error("Errore nel recupero degli utenti:", error);
      }
    };

    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const result = await response.json();
        setAlbums(result);
      } catch (error) {
        console.error("Errore nel recupero degli album:", error);
      }
    };

    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const result = await response.json();
        setPhotos(result);
      } catch (error) {
        console.error("Errore nel recupero delle foto:", error);
      }
    };

    fetchUsers();
    fetchAlbums();
    fetchPhotos();
  }, []);

  // Unisco album, utenti e foto in base ai rispettivi ID

  useEffect(() => {
    if (users.length > 0 && albums.length > 0 && photos.length > 0) {
      const mergedData = albums.map((album) => {
        const user = users.find((user) => user.id === album.userId);

        // Trova tutte le foto che appartengono a questo album
        const albumPhotos = photos.filter(
          (photo) => photo.albumId === album.id
        );

        return {
          id: album.id,
          albumTitle: album.title,
          userName: user ? user.name : "Sconosciuto",
          photos:
            albumPhotos.length > 0
              ? albumPhotos
              : [{ url: "Nessuna foto disponibile" }],
        };
      });

      setData(mergedData); // Aggiorna i dati uniti
    }
  }, [users, albums, photos]);

  const rowToDisplay = filteredData.length > 0 ? filteredData : data;

  // Funzione di ordinamento crescente o decrescente
  const handleSort = () => {
    if (filteredData.length > 0) {
      const sortedData = [...filteredData].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.albumTitle.localeCompare(b.albumTitle);
        } else {
          return b.albumTitle.localeCompare(a.albumTitle);
        }
      });
      setFilteredData(sortedData);
    } else {
      const sortedData = [...data].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.albumTitle.localeCompare(b.albumTitle);
        } else {
          return b.albumTitle.localeCompare(a.albumTitle);
        }
      });
      setData(sortedData);
    }
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Cambia ordine
  };

  // Navigo al componente di dettaglio passando idAlbum

  const handleRowClick = (id: number) => {
    setFilteredData([]);
    navigate(`/details/${id}`, {
      state: { idAlbum: id },
    });
  };

  return (
    <div className="overflow-x-auto overflow-y-auto rounded-lg p-4 max-h-96 sm:max-h-84 md:max-h-96 lg:max-h-[25rem] xl:max-h-[30rem]">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th
              className="py-2 px-4 text-left cursor-pointer"
              onClick={handleSort}
            >
              {sortOrder === "asc" ? " ▲" : " ▼"} {/* Freccetta che cambia */}
              Titolo Album
            </th>
            <th className="py-2 px-4 text-left">Nome Utente</th>
          </tr>
        </thead>
        <tbody>
          {rowToDisplay.map((row, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(row.id)}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <td className="py-2 px-4 border-b border-gray-300 text-left">
                {row.albumTitle}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-left">
                {row.userName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

/**
 *               <td className="py-2 px-4 border-b border-gray-300">
                <img
                  src={row.photoUrl}
                  alt="Foto"
                  className="h-10 w-10 object-cover"
                />
              </td>
 */
