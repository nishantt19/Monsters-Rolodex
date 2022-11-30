import React from "react";
import { useState , useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list";

const App =()=>{

  const [monsters, setMonsters] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setMonsters(users))
  }
  

  ,[])
  
  return(
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <CardList monsters ={monsters}/>
    </div>
   
   
  )
}


export default App;
