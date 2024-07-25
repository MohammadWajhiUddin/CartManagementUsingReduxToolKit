import React from 'react'
import UserDetails from './Components/UserDetails'
import LoginForm from './Components/UserAuthentication/LoginForm';
import HomePage from './Components/HomePage';
import ProductList from './Components/Products/ProductList';
import CartData from './Components/Cart/CartData'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = ()=>{
  return(
    <Router>
    <div>
      
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/CartData" element={<CartData />} />

      </Routes>
    </div>
  </Router>
  )
}


export default App;