//import logo from './logo.svg'; 
import React from 'react';
import './App.css';
import Nav from './components/nav/nav.js'
import ItemListContainer from './components/items/itemListContainer'
import Counter from './components/counter/counter'
function App() {
  //const [show, setShow] = useState(true)

  const handleAdd = () => {
    console.log('se ejecutó')
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <ItemListContainer greeting="Porta Sahumerios y Ceniceros"/>
        {/* <button onClick={() => setShow(!show)} title='show/hide' /> */}
        {/* {show && <Counter initial={0} stock={15} title='Carrito' onAdd={handleAdd}/>} */}
        <Counter initial={0} stock={15} title='Carrito' onAdd={handleAdd}/>
      </header>
    </div>
  );
}

export default App;
