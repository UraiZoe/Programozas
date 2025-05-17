//Szűkséges bootstrap elemek
import { Container, Col, Row } from "react-bootstrap"
import { Table } from "react-bootstrap"
import "tachyons"
import "../css/fogado.css"

import { useParams } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"
//Képek
import KetAgyas from "/img/ketagyas.jpg"

function SzobaFoglaltsaga() {
    const [szoba, setSzoba] = useState([]);
    const { id } = useParams();

    axios.get("http://localhost:3001/SzobaKihasznaltsag/" + id)
        .then((response) => { setSzoba(response.data); })
        .catch((err) => {
            console.log(err)
        }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col>
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
                    </Col>
                    <Col>
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
                        </article>
                    </Col>
                </Row>
                <Row>
                    <h3>A szoba kihasználtsága:</h3>
                    <Table stripped borderd hovered>
                        <thead>
                            <tr>
                                <th>Szoba neve</th>
                                <th>Vendégek száma</th>
                                <th>Vendégéjszakák száma</th>
                            </tr>
                        </thead>
                        <tbody>

                            {szoba.map((szobaegy) => (
                                <th>
                                    <td>{szobaegy.sznev}</td>
                                    <td>{szobaegy.erk}</td>
                                    <td>{szobaegy.tav}</td>
                                </th>
                            ))}
                        </tbody>
                    </Table>
                </Row>

            </Container>
        </>
    )
}

export default SzobaFoglaltsaga
