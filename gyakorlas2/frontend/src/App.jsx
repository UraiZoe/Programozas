import Navbar from "./Navbar";
import ChosenPage from "./pages/ChosenPage"
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="chosenpage/:id" element={<ChosenPage/>}/>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
