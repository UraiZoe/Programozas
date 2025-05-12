import { useState, useEffect } from "react"
import axios from "axios"
import { Table } from "react-bootstrap"

function SzobaKihasznaltsag() {
    const [szoba, setSzoba] = useState([]);
    useEffect(() => {
    axios.get("http://localhost:3001/SzobakKihasznaltsaga")
        .then((response) => setSzoba(response.data))
        .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <h3>A szoba kihasználtsága:</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Szoba neve</th>
                        <th>Vendégek száma</th>
                        <th>Vendégéjszakák száma</th>
                    </tr>
                </thead>
                <tbody>
                    {szoba.map((szobaegy) => (
                        <tr>
                            <td>{szobaegy.sznev}</td>
                            <td>{szobaegy.vendegek}</td>
                            <td>{szobaegy.vendegejszakak}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default SzobaKihasznaltsag
