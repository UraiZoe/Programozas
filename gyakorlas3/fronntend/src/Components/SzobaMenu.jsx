import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function SzobaMenu() {
    const [szoba, setSzoba] = useState([]);
    const [selected, setSelected] = useState('');
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/SzobaMenu")
            .then((response) => {
                setSzoba(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const oldalatiranyit = (event) => {
        event.preventDefault();
        Navigate('SzobaFoglaltsag/' + selected);
    }
    return (
        <>
            <form onChange={oldalatiranyit}>
                <select value={selected} onChange={e => setSelected(e.target.value)}>
                    {szoba.map(szobaegy => 
                        <option value={szobaegyn.szazon}>{szobaegy.sznev}</option>
                    )}
                </select>
                <button type="submit">Adatok</button>
            </form>
        </>
    )
}

export default SzobaMenu