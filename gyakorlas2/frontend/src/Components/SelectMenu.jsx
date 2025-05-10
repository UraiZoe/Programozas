import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Selectmenu() {
    const [tagozat, settagozat] = useState([]);
    const [selectedTagozat, setselectedTagozat] = useState('');
    const navigate = useNavigate();
    
    axios.get("http://localhost:3001/ DropDown")
      .then((response) => {
        settagozat(response.data);
      })
      .catch((err) => {
        Console.log(err);
      });

    const oldalAtiranyit = (event) => {
        event.preventDefault();
        navigate('/valasztotttagozat/' + selectedTagozat);
      }
      return (
    <>
        <h4>A felvételt nyert tanulók névsora a nyelvi előkészítőre:</h4>
        <form onSubmit={oldalAtiranyit}>
            <select value={selectedTagozat} onChange={e => setselectedTagozat(e.target.value)}>
                {tagozat.map(tagozategy =>
                        <option value={tagozategy.akod}>{tagozategy.agazat}</option>
                    )}
            </select>
            <button type="submit">Adatok</button>
        </form>
    </>
  )
}

export default Selectmenu