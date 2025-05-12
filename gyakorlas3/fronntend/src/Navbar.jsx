import {Container} from "react-bootstrap"
import MenuKep from "/img/top.jpg"
import "./Navbar.css"
import "./css/fogado.css"

function Navbar() {
  return (
    <>
        <Container>
            <img src={MenuKep} alt="Menü Kép"/>
        </Container>
    </>
  )
}

export default Navbar
