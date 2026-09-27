// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Favourites from './pages/Favourites';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import './styles/global.css';

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;