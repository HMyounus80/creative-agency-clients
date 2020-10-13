import React from 'react';
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
              <a class="nav-link mr-3" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">Our Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">Our Team</a>
            </li>
             <li class="nav-item">
              <a class="nav-link mr-5" href="#">Contact Us</a>
            </li>
            <button className="btn btn-dark">Login</button>
            
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;