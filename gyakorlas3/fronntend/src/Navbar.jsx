import {Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import MenuKep from "/img/top.jpg"
import "./Navbar.css"
import "./css/fogado.css"

function Navbar() {
  return (
    <>
        <Container>
          <figure className="position-relative">
              <img src={MenuKep} alt="Menü Kép"/>
          </figure>
          <figcaption>
            <h3>Fogadó</h3>
          </figcaption>
        </Container>
    </>
  )
}

export default Navbar
