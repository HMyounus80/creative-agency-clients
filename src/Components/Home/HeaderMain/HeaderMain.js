import React from 'react';
import Frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
      <main style={{height: '600px'}} className="row d-flex align-items-center container">
          <div className="col-sm col-md-6">
              <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos?</p>
              <button className="btn btn-dark">Hire Us</button>
          </div>
          <div className="col-sm col-md-6">
              <img className="img-fluid" src={Frame} alt=""/>
          </div>
      </main>
    );
};

export default HeaderMain;