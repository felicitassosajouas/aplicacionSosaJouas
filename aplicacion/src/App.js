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
//import {Cart} from './components/cart/cart'
import {NotProvider} from './components/notification/notification'
function App() {
  
  const [page, setPage] = useState('list')
  //const [show, setShow] = useState(true)


  return (
    <div className="App">
      <NotProvider>
        <header className="App-header">
          {/* <ButtonCount/> */}
          {/* <button onClick={() => setShow(!show)} title='show/hide' /> */}
          {/* {show && <Counter initial={0} stock={15} title='Carrito' onAdd={handleAdd}/>} */}
          <div className="d-grid gap-2">
            <button className="btn btn-outline-light" type="button" onClick={() => setPage('list')}> List </button>
            <button className="btn btn-outline-light" type="button" onClick={() => setPage('detail')}> Detail </button>
          </div>
          <CartProvider>
            <BrowserRouter>{/*DETERMINA Q COMPONENTES HIJOS TENDRÁN ACCESO AL HIST D NAVEGACIÓN */}
              
              <Nav/>

              {page === 'category' && <ItemListContainer greeting="Porta Sahumerios y Ceniceros"/>}
              {page === 'detail' && <ItemDetailContainer/>}
          
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
      </NotProvider>
    </div>
  );
}

export default App;