import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Products from './components/pages/products';
import Contact from './components/pages/contact';
import Cart from './components/pages/cart';
import { CartProvider } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.css';


const App = () =>{
  return (
    <React.Fragment>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
      <Footer />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
