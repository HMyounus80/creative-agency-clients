import React from 'react';
import Frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
      <main className="container mt-5">
          <div className="row d-flex align-items-center">
          <div className=" col-md-5">
              <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos?</p>
              <button className="btn btn-dark mt-2">Hire Us</button>
          </div>
          <div className="col-md-7">
              <img style={{width: '100%'}} className="img-fluid" src={Frame} alt=""/>
          </div>
          </div>
      </main>
    );
};

export default HeaderMain;