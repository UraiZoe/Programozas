import {Container, Row, Col} from 'react-bootstrap';
import 'tachyons'
import 'bootstrap/dist/css/bootstrap.css';
import ohlogo from '/img/logo.png'
import tajekoztatoKep from '/img/e-mail-marketing-2745489__340.jpg'
import Elozetesnevsor from '../Components/Elozetesnevsor';
import Selectmenu from '../Components/Selectmenu';
import './Home.css'

function Home() {

  return (
    <>
     <div>
        <Container>
            <Row>
                <Col>
                    <article className="cf ph3 ph5-ns pv5 bg-yellow">
                    <header className="w-40-ns">
                        <h3 className="mb3 mt0 lh-title">Központi felvételi tájékoztató</h3>
                    </header>
                    <div className="fn fl-ns w-50-ns">
                        <p className="lh-copy measure mt4 mt0-ns">
                            A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket. <br /> <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">Tájékoztató oldal</a><br /><img src={ohlogo} alt="Oktatási hivatal logója" />
                        </p>
                    </div>
                    </article>
                </Col>
                <Col>
                    <article className="cf ph3 ph5-ns pv5">
                    <header className="w-40-ns">
                        <h1 className="mb3 mt0 lh-title">Tájékoztatás</h1>
                        <h3 className="mb3 mt0 lh-title">Jószakma Szakgimnázium</h3>
                    </header>
                    <div className="fn fl-ns w-70-ns">
                        <p className="lh-copy measure mt4 mt0-ns">
                        A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.
                        </p>
                        <br /><img src={tajekoztatoKep} alt="Tájékoztató képe" />
                    </div>
                    </article>
                </Col>
                <Col>
                    <article className="cf ph3 ph5-ns pv5 bg-yellow" id='Hossz'>
                    <header className="w-40-ns">
                        <h3 className="mb3 mt0 lh-title">Az oldal használatáról</h3>
                    </header>
                    <div className="fn fl-ns w-70-ns">
                        <p className="lh-copy measure mt4 mt0-ns">
                        <h6>Ön az oldal használatával a következő információkhoz juthat hozzá</h6>
                        <ul>
                            <li>Előzetes rangsor: </li>
                                <ol>
                                    <li>Nevek</li>
                                    <li>Ágazat</li>
                                    <li>Összes pontszám</li>
                                </ol>
                            <li>Előzetes rangsor nyelvi előkészítő</li>
                            <li>A felvettek névsora</li>
                        </ul>
                        </p>
                    </div>
                    </article>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Selectmenu/>
                </Col>
                <Col>
                    <Elozetesnevsor/>
                </Col>
            </Row>
        </Container>
     </div>
    </>
  )
}

export default Home
