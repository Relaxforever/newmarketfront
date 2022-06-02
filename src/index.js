import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from './routes/inventory'
import Contacto from './routes/contacto'
import Products from './routes/products';
import InformacionCliente from './routes/informacion-cliente-compra';
import Brand from './routes/marcas'
import InformacionClientePago from './routes/informacion-cliente-pago'
import Pedido from "./routes/pedido"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='productos' element={<Products />} />
        <Route path='inventario' element={<Inventory />} />
        <Route path='marcas' element={<Brand />} />
        <Route path='contacto' element={<Contacto />} />
        <Route path='informacion-cliente-compra' element={<InformacionCliente />} />
        <Route path='informacion-cliente-pago' element={<InformacionClientePago />} />
        <Route path='pedidos' element={<Pedido />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);