import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShopContextProvider from './context/Shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ShopContextProvider>
    <App/>
   </ShopContextProvider>
   
);

   