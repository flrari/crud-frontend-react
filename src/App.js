import { useState, useEffect } from 'react';
import './App.css';
import CardList from './card-list/CardList';

function App() {

  const [employees, setEmployees] = useState([]);

 useEffect( () => {

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/dipendenti/all", 
    {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json; charset=UTF-8" 
      }
    })
    const data = await response.json()
    console.log({data})
    setEmployees({data})
  }

  fetchData()

    
  }, []);
  //useState(employees);

  return (
    <div className="App">
      <h1 className="app-title">Employees Management</h1>
      <CardList employees={employees}/>
    </div>
  );
}

export default App;
