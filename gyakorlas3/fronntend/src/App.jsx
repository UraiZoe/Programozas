import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Pages/Home"
import SzobaFoglaltsaga from "./Pages/SzobaFoglaltsaga"

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="szobaFoglaltsaga/:id" element={<SzobaFoglaltsaga />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
