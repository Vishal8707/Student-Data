import { useState } from "react";
import "./App.css";
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNum = (e) => {
    setNumber(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setSubmit([
      { name: name, email: email, number: number, password: password },
    ]);
  };
  console.log(submit);
  return (
    <div className="App">
      <label>Name</label>
      <input onChange={handleName} type="name" />
      <label>Email</label>
      <input onChange={handleEmail} type="email" />
      <label>Number</label>
      <input onChange={handleNum} type="number" />
      <label>Password</label>
      <input onChange={handlePass} type="password" />
      <button onClick={handleSubmit}>Submit</button>

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Password</th>
        </tr>

        {submit.map((x) => (
          <tr>
            <td> {x.name} </td>
            <td> {x.email} </td>
            <td> {x.number} </td>
            <td> {x.password} </td>
          </tr>

        ))}

      </table>
    </div>
  );
}
