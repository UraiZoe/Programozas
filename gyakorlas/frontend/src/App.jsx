import Navbar from './Navbar';
import Home from './oldalak/Home';
import Valasztottagazat from './oldalak/Valasztottagozat';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="valasztottagozat/:id" element={<Valasztottagazat />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
