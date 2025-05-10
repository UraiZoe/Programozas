import { Container, Row, Col } from 'react-bootstrap'
import 'tachyons'
import 'bootstrap/dist/css/bootstrap.css'
import './fogado.css'
import ketAgyas from '/img/ketagyas.jpg'

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Table from 'react-bootstrap/Table'

function Valasztott() {
    const [valasztott, setValasztott] = useState([]);
    const { id } = useParams()

    axios.get("http://localhost:3001/Valasztott/" + id)
        .then((response) => {
            setValasztott(response.data);
        })
        .catch((err) => {
            console.log(err);
        });

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <article className="cf ph3 ph5-ns pv5">
                            <header className="w-60-ns">
                                <h1 className="mb3 mt0 lh-title">Falusi szálláshely fajtái</h1>
                            </header>
                            <div class="fn fl-ns w-50-ns">
                                <ul className="lh-copy measure mt4 mt0-ns">
                                    <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
                                    <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
                                    <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
                                    <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
                                </ul>
                                <img src={ketAgyas} alt="Kép2" />
                            </div>
                        </article>
                    </Col>
                    <Col>
                        <article className="cf ph3 ph5-ns pv5 bg-yellow">
                            <header className="w-60-ns">
                                <h1 className="mb3 mt0 lh-title">A hét törpe fogadó</h1>
                            </header>
                            <div className="fn fl-ns w-50-ns">
                                <div className="lh-copy measure mt4 mt0-ns">
                                    <Col>
                                        <Row>
                                            <b>Szoba neve</b>
                                            <dl>
                                                <dt>Szende</dt>
                                                <dt>Szundi</dt>
                                                <dt>Morgó</dt>
                                                <dt>Hapci</dt>
                                                <dt>Tudor</dt>
                                                <dt>Vidor</dt>
                                                <dt>Kuka</dt>
                                            </dl>
                                        </Row>
                                        <Row>
                                            <b>Ágyak száma</b>
                                            <dl>
                                                <dt>4 ágyas</dt>
                                                <dt>4 ágyas</dt>
                                                <dt>3 ágyas</dt>
                                                <dt>3 ágyas</dt>
                                                <dt>4 ágyas</dt>
                                                <dt>2 ágyas</dt>
                                                <dt>1 ágyas</dt>
                                            </dl>
                                        </Row>
                                    </Col>
                                    <b>A házban 21 fő fér el.</b>
                                    <b>Feszültségünk:</b>
                                    <ol>
                                        <li>Ruhaszekrény</li>
                                        <li>Saját fürdőszoba zuhanytálca</li>
                                        <li>WC (fürdöszobában egyben)</li>
                                    </ol>
                                </div>
                            </div>
                        </article>
                    </Col>
                </Row>
                <Row>
                    {valasztott.map((valasztottegy) => (
                        <h4>A választott szoba foglaltsága: {valasztottegy.sznev}</h4>
                    ))}
                    <Table>
                        <thead>
                            <tr>
                                <th>Szoba neve</th>
                                <th>Vendégek száma</th>
                                <th>Vendégekéjszakájának száma</th>
                            </tr>
                        </thead>
                        <tbody>
                            {valasztott.map((valasztottegy) => (
                                <tr>
                                    <th>{valasztottegy.vnev}</th>
                                    <th>{valasztottegy.vendegek}</th>
                                    <th>{valasztottegy.vendegejszakak}</th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Row>
            </Container>
        </>
    )
}

export default Valasztott
