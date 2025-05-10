
import MenuImage from '/images/oktatas-01.jpg'
import {Container} from 'react-bootstrap';

function Navbar() {
    return (
      <>
        <div>
            <Container>
                <img src={MenuImage} alt="Menü Kép" />
            </Container>

        </div>
      </>
    )
  }
  
  export default Navbar
  