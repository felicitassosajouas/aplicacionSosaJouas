//import logo from './logo.svg'; 
import React from 'react';
import './App.css';
import Nav from './components/nav/nav.js'
import ItemListContainer from './components/items/itemListContainer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> PORTASAHUMERIOS Y CENICEROS</h1>
        <Nav/>
        <ItemListContainer greeting="Porta Sahumerios y Ceniceros"/>
      </header>
    </div>
  );
}

export default App;
