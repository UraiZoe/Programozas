const express  = require('express');
var cors  = require('cors');
const bodyParser  = require('body-parser');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database:"fogado",
  port: 3306
});

app.use(cors())
app.use(bodyParser.json())

app.get('/Menu', (req, res) => {
    const sqlParancs ="SELECT szobak.sznev FROM szobak;"
    db.query(sqlParancs, (err, result)=>{
        res.json(result)
    })
});

app.get('/SzobakKihasznaltsaga', (req, res) => {
    const sqlParancs ="SELECT szobak.sznev, SUM(foglalasok.fo) AS vendegek, SUM(DATEDIFF(foglalasok.tav, foglalasok.erk)*foglalasok.fo) AS vendegejszakak FROM szobak INNER JOIN foglalasok ON szobak.szazon = foglalasok.szoba GROUP BY szobak.sznev ORDER BY vendegejszakak;"
    db.query(sqlParancs, (err, result)=>{
        res.json(result)
    })
});

app.get('/Valasztott/:id', (req, res) => {
    const sqlParancs ="SELECT szobak.sznev, vendegek.vnev, foglalasok.tav, foglalasok.erk FROM szobak INNER JOIN foglalasok ON szobak.szazon = foglalasok.szoba INNER JOIN vendegek ON vendegek.vsorsz = foglalasok.szoba WHERE szobak.sznev = ? ORDER BY vendegek.vnev;"
    db.query(sqlParancs, req.params.id, (err, result)=>{
        res.json(result)
    })
});

app.listen(3001, () => {
  console.log(``);
});