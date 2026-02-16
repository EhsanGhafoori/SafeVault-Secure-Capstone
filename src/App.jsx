import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import './App.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/plants');
  };

  return (
    <div className="app-container">
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-tagline">Bringing Nature's Beauty to Your Home</p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={
            <>
              <Navbar />
              <ProductList />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Navbar />
              <CartItem />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <AboutUs />
            </>
          } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
