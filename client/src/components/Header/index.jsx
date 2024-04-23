import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 

import Baner from './../../assets/logoo.png'
import Auth from '../../utils/auth';
import '../css/header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control whether the menu is open or closed

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    Auth.logout();
    window.location.href = '/'; // Redirect to the home page after logout
  };

  return (
    <header>
      {/* Navbar component */}
      <Navbar className="navbar navbar-expand-md">
        <Container>
          {/* Navbar.Toggle to show the collapse menu on small screens */}
          <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
          
          {/* Navbar.Collapse to control the collapsing behavior of the navbar */}
          <Navbar.Collapse id="navbar-nav" className={`justify-content-md-end w-100${isOpen ? ' show' : ''}`}>
            {/* Logo */}
            <img className='banner img-fluid' src={Baner} alt="" /> {/* Add the img-fluid class to make the image responsive */}
          
            {/* Navigation links */}
            <ul className="navbar-nav ml-auto">
              {/* Home link */}

              {Auth.loggedIn()? ( // Check if the user is logged in  
                <>
                   <li className="nav-item">
                       <Link className="nav-link" to="/payment" onClick={toggleMenu}>Payments</Link>
                   </li> 
                    <li className="nav-item">
                       <Link className="nav-link" to="/members" onClick={toggleMenu}>Members</Link>
                   </li>
                    <li className="nav-item">
                       <Link className="nav-link" to="/add-member" onClick={toggleMenu}>New Member</Link>
                   </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/logout" onClick={handleLogout}>Logout</Link>
                   </li>
                   </>
               ) : (
                   <>

                    <li className="nav-item">
                         <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link" to="/login" onClick={toggleMenu}>Login</Link>
                   </li>
                   <li className="nav-item">
                       <Link className="nav-link" to="/Signup" onClick={toggleMenu}>Sign Up</Link>
                   </li>
                </>

              )}
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
