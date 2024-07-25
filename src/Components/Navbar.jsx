import React, { useState } from 'react';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector(state => state.ProductSliceInStore.ProductArray)
const Users = useSelector(state => state.UserReducerInStore.UsersArray)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
      <Link className="nav-link" to="/ProductList">Home Page</Link>

      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`} style={{marginRight:150}}>
        <Link className="nav-link" to="/UserDetails">Add Users</Link>
        <Link className="nav-link" to="/CartData">Cart ({cart.length})</Link>
        <Link className="nav-link" to="/CartData">TotalUsers ({Users.length})</Link>

        </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
