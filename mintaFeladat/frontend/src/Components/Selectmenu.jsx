import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Selectmenu() {
  const [tagozat, settagozat] = useState([]);
  const [selectedTagozat, setselectedTagozat] = useState('');
  const navigate = useNavigate();

  axios.get("http://localhost:3001/SelectMenu")
    .then((response) => {
      settagozat(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  const oldalAtiranyit = (event) => {
    event.preventDefault();
    if (selectedTagozat >= 1 && selectedTagozat <= 4) {
      navigate('/valasztotttagozat/' + selectedTagozat);
    } else {
      console.log("Érvénytelen választás!");
    }
  };
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