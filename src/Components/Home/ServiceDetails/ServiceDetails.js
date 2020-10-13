import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-sm col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt=""/>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
        </div>
    );
};

export default ServiceDetails;