import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' 
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);
