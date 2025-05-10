const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()

var db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "felveteli",
  port: 3306
});

app.use(cors())
app.use(bodyParser.json())

app.get('/DropDown', (req, res) => {
    const sqlParancs = "SELECT agazat, nyek,CASE WHEN nyek = 1 THEN 'nyek' ELSE 'nem nyek'END AS nyek_tipusFROM tagozatok;"
    db.query(sqlParancs, (err, result) => {
        res.json(result)
    })
});

app.get('/AllStudent', (req, res) => {
    const sqlParancs = "SELECT diakok.nev, tagozatok.agazat, (diakok.hozott + diakok.kpmagy + diakok.kpmat) AS osszpont FROM diakok INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN 	tagozatok on jelentkezesek.tag = tagozatok.akodORDER BY diakok.nev;"
    db.query(sqlParancs, (err, result) => {
        res.json(result)
    })
});

app.get('/NyekStudnent/:id', (req, res) => {
    const sqlParancs = "SELECT diakok.nev, tagozatok.agazat, (diakok.hozott + diakok.kpmagy + diakok.kpmat) AS osszpontszam FROM diakok INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN 	tagozatok on jelentkezesek.tag = tagozatok.akod WHERE tagozatok.nyek =? ORDER BY osszpontszam DESC LIMIT 32;"
    db.query(sqlParancs, req.params.id, (err, result) => {
        res.json(result)
    })
});

app.get('/SubjectStudnent/:id', (req, res) => {
    const sqlParancs = "SELECT diakok.nev, tagozatok.agazat, (diakok.hozott + diakok.kpmagy + diakok.kpmat) AS osszpontszam FROM diakok INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN 	tagozatok on jelentkezesek.tag = tagozatok.akod WHERE tagozatok.agazat = ? ORDER BY osszpontszam DESC LIMIT 32;"
    db.query(sqlParancs, req.params.id, (err, result) => {
        res.json(result)
    })
});

app.listen(3001, () => {
  console.log(`A szerver a 3001-es porton fut`);
});