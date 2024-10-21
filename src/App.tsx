import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./router/Home";
import AlbumDetails from "./router/AlbumDetails";

function App() {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<AlbumDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
