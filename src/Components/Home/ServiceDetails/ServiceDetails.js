import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';


const ServiceDetails = ({service}) => {
    return (
       
        <div className="col-md-4 text-center services mt-3 mb-2">
            <Link to="/orderPlace" className="links">
            <img style={{height: '50px'}} src={service.img} alt=""/>
            <h3>{service.title}</h3>
            <p className="text-secondary">{service.description}</p>
            </Link>
        </div>
        
      
    );
};

export default ServiceDetails;