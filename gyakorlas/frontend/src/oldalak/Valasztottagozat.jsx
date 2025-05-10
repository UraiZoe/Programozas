import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import ohlogo from '/img/logo.png'
import tajekoztatoKep from '/img/e-mail-marketing-2745489__340.jpg'
import axios from "axios";

function Valasztottagazat() {
    const [nevsor, setnevsor] = useState([]);
    const [nyek, setnyek] = useState([]);
    const id = useParams();
        
    axios.get("http://localhost:3001/FelvettekLista/" +id)
        .then((response) => {
            setnevsor(response.data);
        })
        .catch((err) => {
            Console.log(err);
        });

        axios.get("http://localhost:3001/FelvettekNyek/" +id)
        .then((response) => {
            setnyek(response.data);
        })
        .catch((err) => {
            Console.log(err);
        });
  return (
    <>
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
            </Row>
            <Row>
                {nyek.map((nyekegy) => (
                    <h4>A felvettek névsora, {nyekegy.elokeszito}. A maximálisan felvehető tanulók száma:
                    {nyekegy.helyekszama} fő. A választott ágazat: {nyekegy.agazat}.</h4>
                ))}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tanuló neve</th>
                        <th>Ágazat</th>
                        <th>Összpontszám</th>
                    </tr>
                </thead>
                <tbody>
                    {nevsor.map((nevsoregy) => (
                        <tr>
                            <td>{nevsoregy.nev}</td>
                            <td>{nevsoregy.agazat}</td>
                            <td>{nevsoregy.osszpontszam}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Row>
        </Container>
    </>
  )
}

export default Valasztottagazat
