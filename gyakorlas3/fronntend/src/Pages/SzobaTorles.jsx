import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function SzobaTorles() {
    const [id, setId] = useState("");
    const [uzenet, setUzenet] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.delete("http://localhost:3001/SzobaTorles/"+id)
            .then((res) => {
                setUzenet("Sikeres törlés!");
                setId("");
            })
            .catch((err) => {
                console.error(err);
                setUzenet("Hiba történt a törlés során.");
            });
    };

    return (
        <div>
            <h3>Szoba törlése</h3>
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
                <Button type="submit" variant="danger">Törlés</Button>
            </Form>
            {uzenet && <p className="mt-3">{uzenet}</p>}
        </div>
    );
}

export default SzobaTorles;
