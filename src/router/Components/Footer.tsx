import { useMemo } from "react";

const Footer = () => {
  //calcolo e formattazione data per il footer

  const calcolaData = useMemo(() => {
    const data = new Date();
    const giorni = [
      "Domenica",
      "Lunedì",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato",
    ];

    const set = giorni[data.getDay()] + " ";
    const gg = (data.getDate() < 10 ? "0" : "") + data.getDate() + "-";
    const mm =
      (data.getMonth() + 1 < 10 ? "0" : "") + (data.getMonth() + 1) + "-";
    const aaaa = data.getFullYear();
    const h = (data.getHours() < 10 ? "0" : "") + data.getHours() + ":";
    const m = (data.getMinutes() < 10 ? "0" : "") + data.getMinutes();

    return set + gg + mm + aaaa + ", ore " + h + m;
  }, []);
  return (
    <div className="flex flex-col w-full md:flex-row md:justify-between border-t-4 border-colorNidek px-3 md:text-xl">
      <div className="">
        <p style={{ userSelect: "none" }}>Simone Vanin</p>
      </div>
      <div className="">
        <p style={{ userSelect: "none" }}>{calcolaData}</p>
      </div>
      <div className="">
        <p style={{ userSelect: "none" }}>Tel. 329 1220994</p>
      </div>
    </div>
  );
};
export default Footer;
//     <div className="flex items-center justify-between md:columns-1 h-8 px-3 absolute inset-x-0 bottom-0 border-t-2 border-gray-500 columns-7">
