import React from 'react';

const ClientsDetails = ({clients}) => {
    return (
    //     <div class="card mb-3 text-center">
    //     <div class=" no-gutters">
    //       <div class="col-sm col-md-1">
    //         <img src={clients.img} class="card-img" alt=""/>
    //       </div>
    //       <div class="col-md-3">
    //         <div class="card-body">
    //           <h5 class="card-title">{clients.name}</h5>
    //           <p>{clients.title}</p>
    //           <p class="card-text">{clients.description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="col-sm col-md-4 text-center">
            <img style={{height: '50px'}} src={clients.img} alt=""/>
            <h3>{clients.name}</h3>
            <p>{clients.title}</p>
            <p>{clients.description}</p>
            
        </div>
      
    );
};

export default ClientsDetails;