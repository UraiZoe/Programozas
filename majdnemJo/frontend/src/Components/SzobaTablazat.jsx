import { useState, useEffect } from "react"
import axios from "axios"
import Table from "react-bootstrap/Table"

function SzobaTablazat() {
    const [foglalo, setfoglalo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/SzobaTablazat")
            .then((response) => {
                setfoglalo(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    })
    return (
        <>
            <h4>Szobák kihasználtsága:</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Szoba neve</th>
                        <th>Érkezés dátuma</th>
                        <th>Távozás dátuma</th>
                    </tr>
                </thead>
                <tbody>
                    {foglalo.map((foglaloegy) => (
                        <tr>
                            <th>{foglaloegy.sznev}</th>
                            <th>{foglaloegy.vendegek}</th>
                            <th>{foglaloegy.vendegejszakak}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default SzobaTablazat