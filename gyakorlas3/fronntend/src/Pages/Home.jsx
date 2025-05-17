import { Container, Col, Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "tachyons";
import "../css/fogado.css";
import { Link } from "react-router-dom";

// Képek
import Logo from "/img/top.jpg";
import Hazak from "/img/holloko_masolata.jpg";
import KetAgyas from "/img/ketagyas.jpg";

//komponensek
import SzobaKihasznaltsag from "../Components/SzobaKihasznaltsaga";
import SzobaMenu from "../Components/SzobaMenu";

function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="d-flex flex-column">
                        <article className="cf ph3 ph5-ns pv5 bg-yellow">
                            <header className="fn fl-ns w-90-ns pr4-ns">
                                <h1 className="mb3 mt0 lh-title">
                                    Napraforgós Nemzeti Tanúsító Védjegy célja
                                </h1>
                            </header>
                            <div className="fn fl-ns w-90-ns">
                                <p className="lh-copy measure mt4 mt0-ns">
                                    A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint
                                    tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a
                                    minőségi falusi turizmus szimbóluma.
                                </p>
                                <a href="">Tájékoztató oldal</a>
                                <img src={Logo} alt="Logo" />
                                <p>p</p>
                                <img src={Hazak} alt="Ház Kép" />
                            </div>
                            <div className="yellow-box mt-4"></div>
                        </article>
                    </Col>
                    <Col className="d-flex flex-column">
                        <article className="cf ph3 ph5-ns pv5">
                            <header className="fn fl-ns w-90-ns pr4-ns">
                                <h1 className="mb3 mt0 lh-title">
                                    Falusi szálláshely fajtái
                                </h1>
                            </header>
                            <div className="fn fl-ns w-90-ns">
                                <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből,
                                    és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
                                <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől
                                    függően hozzátartozó mellékhelyiségekkel együtt</li>
                                <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező
                                    lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
                                <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve
                                    üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
                                <img src={KetAgyas} alt="Kétágyas" />
                            </div>
                        </article>
                        <div className="mt-4 yellow-box"></div>
                    </Col>

                    <Col className="d-flex flex-column">
                        <article className="cf ph3 ph5-ns pv5 bg-yellow">
                            <header className="fn fl-ns w-90-ns pr4-ns">
                                <h1 className="mb3 mt0 lh-title">
                                    A hét törpe fogadó
                                </h1>
                            </header>
                            <div className="w-90-ns">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Szoba neve</th>
                                            <th>Ágyak száma</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Szende</td>
                                            <td>4 ágyas</td>
                                        </tr>
                                        <tr>
                                            <td>Szundi</td>
                                            <td>4 ágyas</td>
                                        </tr>
                                        <tr>
                                            <td>Morgó</td>
                                            <td>3 ágyas</td>
                                        </tr>
                                        <tr>
                                            <td>Hapci</td>
                                            <td>3 ágyas</td>
                                        </tr>
                                        <tr>
                                            <td>Tudor</td>
                                            <td>4 ágyas</td>
                                        </tr>
                                        <tr>
                                            <td>Vidor</td>
                                            <td>2 ágyas</td>
                                        </tr>
                                        <tr>
                                            <td>Kuka</td>
                                            <td>1 ágyas</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <h3>A házban 21 fő fér el.</h3>
                                <h3>Feszültségünk:</h3>
                                <li>Ruhásszekrény</li>
                                <li>Saját fürdőszoba zuhanytálca</li>
                                <li>WC (fürdőszobával egyben)</li>
                            </div>
                            <div className="yellow-box mt-4"></div>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col><SzobaMenu /></Col>
                    <Col><SzobaKihasznaltsag /></Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h4>Műveletek:</h4>
                        <ul>
                            <li><Link to="/szobaHozzaadas">Szoba hozzáadása</Link></li>
                            <li><Link to="/szobaModositas/1">Szoba módosítása (ID: 1)</Link></li>
                            <li><Link to="/szobaTorles/1">Szoba törlése (ID: 1)</Link></li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Home;
