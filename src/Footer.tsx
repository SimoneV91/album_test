import { useState, useEffect } from "react";

const Footer = () => {
  const [data, setData] = useState<string>("");

  // Funzione per calcolare e formattare la data e l'ora
  const calcolaData = () => {
    const currentData = new Date();
    const days = [
      "Domenica",
      "Lunedì",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato",
    ];

    const set = days[currentData.getDay()] + " ";
    const gg =
      (currentData.getDate() < 10 ? "0" : "") + currentData.getDate() + "-";
    const mm =
      (currentData.getMonth() + 1 < 10 ? "0" : "") +
      (currentData.getMonth() + 1) +
      "-";
    const aaaa = currentData.getFullYear();
    const h =
      (currentData.getHours() < 10 ? "0" : "") + currentData.getHours() + ":";
    const m =
      (currentData.getMinutes() < 10 ? "0" : "") + currentData.getMinutes();

    return set + gg + mm + aaaa + ", ore " + h + m;
  };

  // Aggiorna la data ogni minuto
  useEffect(() => {
    setData(calcolaData()); // Imposta la data iniziale
    const timer = setInterval(() => {
      setData(calcolaData()); // Aggiorna la data ogni minuto
    }, 60000); // 60000 ms = 1 minuto

    // Pulisci il timer quando il componente viene smontato
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full md:flex-row md:justify-between border-t-4 border-colorNidek px-3 md:text-xl">
      <div>
        <p style={{ userSelect: "none" }}>Simone Vanin</p>
      </div>
      <div>
        <p style={{ userSelect: "none" }}>{data}</p>
      </div>
      <div>
        <p style={{ userSelect: "none" }}>Tel. 329 1220994</p>
      </div>
    </div>
  );
};

export default Footer;
