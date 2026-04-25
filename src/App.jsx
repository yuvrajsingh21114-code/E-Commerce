import './App.css'
import { Route } from 'react-router'
import { Routes } from 'react-router';
import { HomePage } from './pages/HomePage'
import { Cart } from './pages/Cart'
import { Orders } from './pages/Orders'

function App() {

  return (
    
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Orders" element={<Orders />} />
      </ Routes>
    
  );
}

export default App
