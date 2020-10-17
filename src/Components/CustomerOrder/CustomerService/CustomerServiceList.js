import React from 'react';

const CustomerServiceList = ({service}) => {

    return (
        <div className="col-md-4 mb-3">
            <div>
            <h2>Email: {service.email}</h2>
            <h5>Title: {service.title}</h5>
            <p>{service.description}</p>
            </div>
        </div>
    );
};

export default CustomerServiceList;