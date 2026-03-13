import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Nav from './navfayil/Nav';
import Asonav from './navfayil/Asonav';
import Fil from './navfayil/Fil';
import Sweper from './sweper/Sweper';
import Products1 from './product/Products1';
import Products2 from './product/Products2';  // Katta P bilan
import Reklama from './product/Reklama';
import Products3 from './product/Products3';  // Katta P bilan
import Footer from './footer/Footer';
import ProductDetail from './product/ProductDetail';
import SearchResults from './product/SearchResults';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <BrowserRouter>
      <section>
        <Nav/>
        <main>
          <nav>
            <Asonav cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
            <Fil/>
          </nav>
          
          <Routes>
            <Route path="/" element={
              <>
                <Sweper/>
                <Products1 addToCart={addToCart} />
                <Products2 />
                <Reklama/>
                <Products3 />
              </>
            } />
            
            <Route path="/products" element={
              <SearchResults addToCart={addToCart} />
            } />
            
            <Route path="/product/:id" element={
              <ProductDetail addToCart={addToCart} />
            } />
            
            <Route path="*" element={
              <div style={{ 
                textAlign: 'center', 
                padding: '50px',
                fontSize: '24px',
                color: '#666'
              }}>
                404 - Sahifa topilmadi
              </div>
            } />
          </Routes>
        </main>
        <Footer/>
      </section>
    </BrowserRouter>
  )
}

export default App;