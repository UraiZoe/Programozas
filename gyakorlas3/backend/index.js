const express = require('express')
const mysql = require('mysql');
var bodyParser = require("body-parser")
var cors = require('cors');
const app = express();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "fogado",
  port: 3306
});
app.use(cors());
app.use(bodyParser.json())

app.get('/SzobaMenu', (req, res) => {
    const sqlParancs = "SELECT szobak.sznev FROM szobak;";
    db.query(sqlParancs, (err, result) => {
        res.json(result);
    })
});
app.get('/SzobakKihasznaltsaga', (req, res) => {
    const sqlParancs ="SELECT szobak.sznev, SUM(foglalasok.fo) AS vendegek, SUM(DATEDIFF(foglalasok.tav, foglalasok.erk)*foglalasok.fo) AS vendegejszakak FROM szobak INNER JOIN foglalasok ON szobak.szazon = foglalasok.szoba GROUP BY szobak.sznev ORDER BY vendegejszakak;"
    db.query(sqlParancs, (err, result) => {
        res.json(result);
    })
});
app.get('/SzobaFoglaltsaga/:id', (req, res) => {
    const sqlParancs ="SELECT szobak.sznev, vendegek.vnev, foglalasok.tav, foglalasok.erk FROM szobak INNER JOIN foglalasok ON szobak.szazon = foglalasok.szoba INNER JOIN vendegek ON vendegek.vsorsz = foglalasok.szoba WHERE szobak.sznev = ? ORDER BY vendegek.vnev;"
    db.query(sqlParancs, req.params.id, (err, result) => {
        res.json(result);
    })
});

app.post('/SzobaHozzaadas', (req, res) => {
    console.log("Érkezett POST kérés a /SzobaHozzaadas végpontra");
    console.log("Kapott adat:", req.body);  // <-- ez megmutatja, mi jött a Reactből

    const sqlParancs = "INSERT INTO szobak (sznev, ferohely, ar) VALUES (?, ?, ?)";
    const ertekek = [req.body.sznev, req.body.ferohely, req.body.ar];

    db.query(sqlParancs, ertekek, (err, result) => {
        if (err) {
            console.error("MySQL hiba:", err);  // <-- EZ KELL!
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Sikeres beszúrás!", id: result.insertId });
        }
    });
});


app.put('/SzobaModositas/:id', (req, res) => {
    console.log("MODOSÍTÁS ÉRKEZETT");
    console.log("ID:", req.params.id);
    console.log("BODY:", req.body);

    const sqlParancs = "UPDATE szobak SET sznev = ?, ferohely = ?, ar = ? WHERE szazon = ?";
    const ertekek = [req.body.sznev, req.body.ferohely, req.body.ar, req.params.id];

    db.query(sqlParancs, ertekek, (err, result) => {
        if (err) {
            console.error("MySQL hiba:", err); // ⬅️ EZ MUTATJA MEG A VALÓDI HIBÁT
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Sikeres frissítés!" });
        }
    });
});



app.delete('/SzobaTorles/:id', (req, res) => {
    const sqlParancs = "DELETE FROM szobak WHERE szazon = ?";

    db.query(sqlParancs, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Sikeres törlés!" });
        }
    });
});


app.listen(3001, () => {
  console.log(`Szerver a 3001-es porton fut!`);
});