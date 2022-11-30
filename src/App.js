import React from "react";
import { useState , useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list";
import Search from "./components/search-box/search-box";

const App =()=>{

  const [monsters, setMonsters] = useState([]);
  const [searchField , setSearchField] = useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setMonsters(users))
  }
  



  ,[])

  const onSearchChange =(event)=>{
    setSearchField(event.target.value);
 }

  const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );


  return(
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <Search placeholder = "Search Monsters"  onSearchChange ={onSearchChange} />
    <CardList monsters ={filteredMonsters}/>
    </div>
   
   
  )
}


export default App;
