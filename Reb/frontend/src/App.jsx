import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./oldalak/Home";
import Navbar from "./Navbar";
import Valasztott from "./oldalak/Valasztott";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="valasztott/:id" element={<Valasztott />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
