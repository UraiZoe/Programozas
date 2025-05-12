//Szűkséges bootstrap elemek
import { Container, Col, Row } from "react-bootstrap"
import {Table } from "react-bootstrap"
import "tachyons"
import "../css/fogado.css"

//Képek
import Logo from "/img/top.jpg"
import Hazak from "/img/holloko_masolata.jpg"
import KetAgyas from "/img/ketagyas.jpg"

//komponensek
import SzobaKihasznaltsag from "../Components/SzobaKihasznaltsaga"
import SzobaMenu from "../Components/SzobaMenu"

function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <article className="cf ph3 ph5-ns pv5">
                            <header className="fn fl-ns w-40-ns pr4-ns">
                                <h1 className="mb3 mt0 lh-title">
                                    Napraforgós Nemzeti Tanúsító Védjegy célja
                                </h1>
                            </header>
                            <div className="fn fl-ns w-40-ns">
                                <p class="lh-copy measure mt4 mt0-ns">
                                    A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint
                                    tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a
                                    minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az
                                    egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal –
                                    garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára.
                                    A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés,
                                    a felszereltség, a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének,
                                    Szakmai képzettségének függvényében.
                                </p>
                                <a href="">Tájékoztató oldal</a>
                                <img src={Logo} alt="Logo" />
                                <p>p</p>
                                <img src={Hazak} alt="Ház Kép" />
                            </div>
                        </article>
                    </Col>
                    <Col>
                        <article className="cf ph3 ph5-ns pv5">
                            <header className="fn fl-ns w-40-ns pr4-ns">
                                <h1 className="mb3 mt0 lh-title">
                                    Falusi szálláshely fajtái
                                </h1>
                            </header>
                            <div className="fn fl-ns w-40-ns">
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
                    </Col>
                    <Col>
                        <article className="cf ph3 ph5-ns pv5">
                            <header className="fn fl-ns w-40-ns pr4-ns">
                                <h1 className="mb3 mt0 lh-title">
                                    A hét törpe fogadó
                                </h1>
                            </header>
                            <div className="fn fl-ns w-40-ns"> 
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
                            <div >
                                <h3>A házban 21 fő fér el.</h3>
                                <h3>Feszültségünk:</h3>
                                <li>Ruhásszekrény</li>
                                <li>Saját fürdőszoba zuhanytálca</li>
                                <li>WC (fürdőszobával egyben)</li>
                            </div>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col><SzobaMenu /></Col>
                    <Col><SzobaKihasznaltsag /></Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
