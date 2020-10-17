import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav class=" container navbar navbar-expand-lg navbar-light mt-2 ">
            <img style={{height: '50px'}} src={logo} alt=""/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link mr-2" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-4" href="#">Our Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-4" href="/dashboard">Dashboard</a>
            </li>
             <li class="nav-item">
              <a class="nav-link mr-4" href="#">Contact Us</a>
            </li>
            <Link to="/login"><button className="btn btn-dark mr-4 p-2">Login</button></Link>
            <Link to="/admin"><button className="btn btn-primary p-2">Admin</button></Link>
            
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;