import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function SzobaModositas() {
    const [id, setId] = useState("");
    const [sznev, setSznev] = useState("");
    const [ferohely, setFerohely] = useState("");
    const [ar, setAr] = useState("");
    const [uzenet, setUzenet] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3001/SzobaModositas/${id}`, {
            sznev,
            ferohely: parseInt(ferohely),
            ar: parseInt(ar)
        })
            .then((res) => {
                setUzenet("Sikeres módosítás!");
            })
            .catch((err) => {
                console.error("Hiba:", err);
                setUzenet("Hiba történt a módosítás során.");
            });
    }
    return (
        <div>
            <h3>Szoba módosítása</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Szoba azonosító (ID)</Form.Label>
                    <Form.Control
                        type="number"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </Form.Group>
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
                <Button type="submit" variant="warning">Módosítás</Button>
            </Form>
            {uzenet && <p className="mt-3">{uzenet}</p>}
        </div>
    );
}

export default SzobaModositas;
