//import logo from './logo.svg'; 
import React, {useState} from 'react';
import './App.css';
import Nav from './components/nav/nav.js'
//import Cart from './components/cart/cart';
import ItemListContainer from './components/items/itemListContainer'
//import Counter from './components/counter/counter'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import ButtonCount from '../src/components/itemDetail'
import { CartProvider } from './context/cartContext';

function App() {
  
  const [page, setPage] = useState('list')
  //const [show, setShow] = useState(true)


  return (
    <div className="App">
      {/* le doy el valor a context */}
      <header className="App-header">
        {page === 'list' && <ItemListContainer greeting="Porta Sahumerios y Ceniceros"/>}
        {/* <button onClick={() => setShow(!show)} title='show/hide' /> */}
        {/* {show && <Counter initial={0} stock={15} title='Carrito' onAdd={handleAdd}/>} */}
        {page === 'detail' && <ItemDetailContainer/>}
        <div className="d-grid gap-2">
          <button className="btn btn-outline-light" type="button" onClick={() => setPage('list')}> List </button>
          <button className="btn btn-outline-light" type="button" onClick={() => setPage('detail')}> Detail </button>
        </div>

        <CartProvider>

          {/* <ButtonCount/> */}
          <BrowserRouter>{/*DETERMINA Q COMPONENTES HIJOS TENDRÁN ACCESO AL HIST D NAVEGACIÓN */}
            <Nav/>
            {/* <Cart/> */}
            <Routes> {/*TODAS LAS RUTAS Q VA TENER LA APLICACIÓN */}
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<h1>CART</h1>} /> {/* puede cont cartList */}
            </Routes>
          </BrowserRouter>

        </CartProvider>
        {/* <Counter initial={0} stock={15} title='Carrito' onAdd={handleAdd}/> */}
      </header>
    </div>
  );
}

export default App;