import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function SzobaHozzaadasa() {
    const [sznev, setSznev] = useState("");
    const [ferohely, setFerohely] = useState("");
    const [ar, setAr] = useState("");
    const [uzenet, setUzenet] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/SzobaHozzaadas", {
            sznev,
            ferohely: parseInt(ferohely),
            ar: parseInt(ar)
        })
        .then((response) => {
            setUzenet("Sikeres hozzáadás!");
            setSznev("");
            setFerohely("");
            setAr("");
        })
        .catch((err) => {
            console.error(err);
            setUzenet("Hiba történt a mentés során.");
        });
    };

    return (
        <div>
            <h3>Új szoba hozzáadása</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Szoba neve</Form.Label>
                    <Form.Control
                        type="text"
                        value={sznev}
                        onChange={(e) => setSznev(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Férőhely</Form.Label>
                    <Form.Control
                        type="number"
                        value={ferohely}
                        onChange={(e) => setFerohely(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ár</Form.Label>
                    <Form.Control
                        type="number"
                        value={ar}
                        onChange={(e) => setAr(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Hozzáadás</Button>
            </Form>
            {uzenet && <p className="mt-3">{uzenet}</p>}
        </div>
    );
}

export default SzobaHozzaadasa;
