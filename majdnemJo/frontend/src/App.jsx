import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Valasztott from "./pages/Valasztott"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='valasztott/:id' element={<Valasztott/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
