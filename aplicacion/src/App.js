//import logo from './logo.svg'; 
import React, {useState} from 'react';
import './App.css';
import Nav from './components/nav/nav.js'
import ItemListContainer from './components/items/itemListContainer'
import Counter from './components/counter/counter'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [page, setPage] = useState('list')
  //const [show, setShow] = useState(true)
  const handleAdd = () => {
    console.log('se ejecutó')
  }
  return (
    <div className="App">
      <header className="App-header">
        <Counter initial={0} stock={15} title='Carrito' onAdd={handleAdd}/>
        {page === 'list' && <ItemListContainer greeting="Porta Sahumerios y Ceniceros"/>}
        {/* <button onClick={() => setShow(!show)} title='show/hide' /> */}
        {/* {show && <Counter initial={0} stock={15} title='Carrito' onAdd={handleAdd}/>} */}
        {page === 'detail' && <ItemDetailContainer/>}
        <div className="d-grid gap-2">
          <button className="btn btn-outline-light" type="button" onClick={() => setPage('list')}> List </button>
          <button className="btn btn-outline-light" type="button" onClick={() => setPage('detail')}> Detail </button>
        </div>
        <BrowserRouter>{/*DETERMINA Q COMPONENTES HIJOS TENDRÁN ACCESO AL HIST D NAVEGACIÓN */}
          <Nav/>
          <Routes> {/*TODAS LAS RUTAS Q VA TENER LA APLICACIÓN */}
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;