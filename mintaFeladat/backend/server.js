const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'felveteli',
    port: 3306
  })

app.use(cors())
app.use(bodyParser.json())

app.get('/SelectMenu', (req, res) => {
  const sqlParancs = 'SELECT * FROM `tagozatok`'
  db.query(sqlParancs, (err, result) => {
      res.json(result)
  })
})

app.get('/ElozetesNevsor', (req, res) => {
  const sqlParancs = 'SELECT nev, tagozatok.agazat, diakok.hozott + diakok.kpmagy + diakok.kpmat AS osszpontszam FROM `diakok` INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN tagozatok ON tagozatok.akod = jelentkezesek.tag ORDER by nev LIMIT 4;'
  db.query(sqlParancs, (err, result) => {
      res.json(result)
  })
})

app.get('/FelvettekLista/:id', (req, res) => {
  const sqlParancs = 'SELECT nev, tagozatok.agazat, diakok.hozott + diakok.kpmagy + diakok.kpmat AS osszpontszam FROM `diakok` INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN tagozatok ON tagozatok.akod = jelentkezesek.tag WHERE tagozatok.akod = ? ORDER BY diakok.hozott + diakok.kpmagy + diakok.kpmat DESC LIMIT 4;'
  db.query(sqlParancs, req.params.id, (err, result) => {
      res.json(result)
  })
})

app.get('/FelvettekNyek/:id', (req, res) => {
  const sqlParancs = 'SELECT tagozatok.agazat, tagozatok.nyek, IF(tagozatok.nyek = 1, "Nyelvi előkészítő", "Nem nyelvi előkészítő") AS elokeszito, SUM(jelentkezesek.hely) AS helyekszama FROM `diakok` INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN tagozatok ON tagozatok.akod = jelentkezesek.tag WHERE tagozatok.akod = ? ORDER BY diakok.hozott + diakok.kpmagy + diakok.kpmat DESC LIMIT 1;'
  db.query(sqlParancs, req.params.id, (err, result) => {
      res.json(result)
  })
})

app.listen(3001, () => {
  console.log(`Fut a backend a 3001-es porton.`)
})