import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDataContext } from "../Context/Context";

const AlbumDetails = () => {
  const { data } = useDataContext(); // Preleva i dati dal context
  const location = useLocation();

  // Stato per controllare la foto attualmente selezionata
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Estraggo l'ID dell'album da location.state
  const albumId = location.state.idAlbum;

  // Trova l'album corrispondente nell'array data
  const album = data.find((item) => item.id === albumId);

  if (!album) {
    return <p>Album non trovato</p>;
  }

  const { userName, albumTitle, photos } = album;

  return (
    <div className="flex flex-col w-full h-full p-2">
      <h1 className="text-2xl font-bold mb-4">{albumTitle}</h1>
      <p className="text-lg mb-4">Utente: {userName}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedPhoto(photo)} // Mostra la foto in modal al click
          >
            <img src={photo.thumbnailUrl} alt={photo.title} className="mb-2" />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-white text-2xl p-2"
              onClick={() => setSelectedPhoto(null)} // Chiude la modal
            >
              &times;
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full"
            />
            <p className="text-white text-center mt-2">{selectedPhoto.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumDetails;
