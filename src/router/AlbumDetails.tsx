import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "../Context/Context";

interface Photos {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

interface Data {
  id: number;
  albumTitle: string;
  userName: string;
  photos: Photos[];
}

const AlbumDetails = () => {
  const navigate = useNavigate();
  const { data } = useDataContext(); // Preleva i dati dal context
  const { id } = useParams<{ id: string }>();

  const albumId = Number(id);
  const [album, setAlbum] = useState<Data | null>(null); // Stato per l'album

  useEffect(() => {
    const storedAlbum = localStorage.getItem(`album_${albumId}`);

    if (storedAlbum) {
      // Se l'album è già in localStorage, caricalo
      setAlbum(JSON.parse(storedAlbum));
    } else {
      // Altrimenti, cerca l'album nei dati
      const foundAlbum = data.find((item) => item.id === albumId);
      if (foundAlbum) {
        setAlbum(foundAlbum);
        // Salva l'album nel localStorage
        localStorage.setItem(`album_${albumId}`, JSON.stringify(foundAlbum));
      }
    }
  }, []);

  if (!album) {
    return <p>Album non trovato</p>;
  }

  const { albumTitle, photos, userName } = album;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{albumTitle}</h1>
      <h2 className="text-xl font-bold mb-8">Utente : {userName}</h2>
      <button
        className="bg-colorNidek text-white mb-8"
        onClick={() => navigate("/")}
      >
        Indietro
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-20">
        {photos.map((photo: Photos) => (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className={`w-full h-48 object-cover `}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{photo.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetails;
