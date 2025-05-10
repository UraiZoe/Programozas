import { useState } from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';

function StudentList() {
    const [nevsor, setnevsor] = useState([]);

    axios.get("http://localhost:3001/AllStudent")
      .then((response) => {
        setnevsor(response.data);
      })
      .catch((err) => {
        Console.log(err);
      });
      return (
    <>
        <h4>Előzetes névsor:</h4>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tanuló neve</th>
          <th>Ágazat</th>
          <th>Összpontszám</th>
        </tr>
      </thead>
      <tbody>
        {nevsor.map((nevsoregy) => (
            <tr>
            <td>{nevsoregy.nev}</td>
            <td>{nevsoregy.agazat}</td>
            <td>{nevsoregy.osszpontszam}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default StudentList