import React from 'react';

const ClientsDetails = ({clients}) => {
    return (
   
    <div className="col-md-4 text-center mt-4 mb-4">
            <img style={{height: '50px',float: 'left'}} src={clients.img} alt=""/>
            <h3>{clients.name}</h3>
            <p>{clients.title}</p>
            <p className="mt-2">{clients.description}</p>
            
        </div>
      
    );
};

export default ClientsDetails;