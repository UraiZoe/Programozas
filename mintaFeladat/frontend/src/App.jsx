import Navbar from './Navbar';
import Home from './oldalak/Home'
import Valasztotttagozat from './oldalak/Valasztotttagozat';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route index element={<Home />} />
        <Route path="valasztotttagozat/:id" element={<Valasztotttagozat />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App