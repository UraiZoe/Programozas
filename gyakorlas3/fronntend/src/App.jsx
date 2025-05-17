import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Pages/Home"
import SzobaFoglaltsaga from "./Pages/SzobaFoglaltsaga"
import SzobaHozzaadasa from "./Pages/SzobaHozzaadas"
import SzobaTorles from "./Pages/SzobaTorles";
import SzobaModositas from "./Pages/SzobaModositas";


function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="szobaHozzaadas" element={<SzobaHozzaadasa />} />
          <Route path="szobaFoglaltsaga/:id" element={<SzobaFoglaltsaga />} />
          <Route path="szobaTorles/:id" element={<SzobaTorles />} />
          <Route path="szobaModositas/:id" element={<SzobaModositas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
