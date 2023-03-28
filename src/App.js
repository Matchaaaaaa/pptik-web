import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Mitra from './Pages/Mitra'
import Galery from './Pages/Galery'
import Kontak from './Pages/Contact'
import Peneliti from './Pages/Peneliti'
import Tentang from './Pages/Tentang'
import Crud from "./Pages/Adminpage";
import Card1 from "./Pages/Card1";
import Card2 from "./Pages/Card2";
import Card3 from "./Pages/Card3";
import Card4 from "./Pages/Card4";
import Card5 from "./Pages/Card5";
import Card6 from "./Pages/Card6";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beranda" element={<Home />} />
      <Route path="/mitra" element={<Mitra />} />
      <Route path="/galery" element={<Galery />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/peneliti" element={<Peneliti />} />
      <Route path="/Tentang" element={<Tentang />} />
      <Route path="/admin" element={<Crud />} />
      <Route path="/card1" element={<Card1 />} />
      <Route path="/card2" element={<Card2 />} />
      <Route path="/card3" element={<Card3 />} />
      <Route path="/card4" element={<Card4 />} />
      <Route path="/card5" element={<Card5 />} />
      <Route path="/card6" element={<Card6 />} />
    </Routes>
  );
}

export default App;
