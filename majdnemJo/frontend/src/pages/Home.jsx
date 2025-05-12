import { Container, Row, Col } from 'react-bootstrap'
import 'tachyons'
import 'bootstrap/dist/css/bootstrap.css'
import './fogado.css'
import logo from '/img/logo.png'
import top from '/img/top.jpg'
import ketAgyas from '/img/ketagyas.jpg'
import Menu from '../Components/Menu'
import SzobaTablazat from '../Components/SzobaTablazat'

function Home() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <article id="doboz" className="cf ph3 ph8-ns pv4 bg-green">
                            <header className="fn fl-ns w-90-ns pr4-ns">
                                <h1 className="mb3 mt0 lh-title">Napraforgós Nemzeti Tanúsító Védjegy célja</h1>
                            </header>
                            <div className="w-80-ns">
                                <p className="lh-copy measure mt4 mt0-ns">
                                    A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott,
                                    és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma.
                                    A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm.
                                    rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára.
                                    A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség,
                                    a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében.
                                </p><br></br>
                                <a href="https://falusiturizmus.eu/ajanlo/turisztikai-paradicsomma-is-valhatna-a-falu-mutatjuk-mivel-csalogatnak-tiszasulyre-a-turistakat/">Tájékoztató oldal</a>
                                <img src={logo} alt="Logo" /><br />
                                <img src={top} alt="Kép1" />
                            </div>
                        </article>
                    </Col>
                    <Col>
                        <article className="cf ph3 ph8-ns pv4">
                            <header className="fn fl-ns w-90-ns pr4-ns">
                                <h1 className="mb3 mt0 lh-title">Falusi szálláshely fajtái</h1>
                            </header>
                            <div className="w-80-ns">
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
                        <article id="doboz" className="cf ph3 ph8-ns pv4 bg-green">
                            <header className="fn fl-ns w-90-ns pr4-ns">
                                <h1 className="mb3 mt0 lh-title">A hét törpe fogadó</h1>
                            </header>
                            <div className="w-80-ns">
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
                    <Col><Menu/></Col>
                    <Col><SzobaTablazat/></Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
