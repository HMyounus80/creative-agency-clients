import React from 'react';



const ServiceList = ({serviceList}) => {
    console.log(serviceList)
   
    return (
        
            <div className="container-fluid row">
              
            <h2 className="text-center">Service List{serviceList.length}</h2>
                    <div className="col-md-7">
                {
                   
                    serviceList.map(service => <li key={service._id}>{service.name}</li>)
                }
            </div>
            </div>
     
    );
};

export default ServiceList;