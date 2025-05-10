import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Menu() {
    const [foglalas, setfoglalas] = useState([]);
    const [selectedFoglalas, setSelectedFoglalas] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/SzobaTablazat")
            .then((response) => {
                setfoglalas(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        const oldalAtiranyit = (event) => {
            event.preventDefault();
            navigate('Valasztott/' + selectedFoglalas);
        }
    })
    return (
        <>
            <h4>Szobák kihasználtsága:</h4>
            <form onSubmit={oldalAtiranyit}>
                <select value={selectedFoglalas} onChange={e => setSelectedFoglalas(e.target.value)}>
                    {foglalas.map(foglalasegy =>
                        <option value={foglalasegy.szazon}>{foglalasegy.sznev}</option>
                    )}
                </select>
                <button type="submit">Adatok</button>
            </form>
        </>
    )
}

export default Menu