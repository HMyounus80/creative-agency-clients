import React from 'react';
import patrik from '../../../images/customer-1.png';
import barron from '../../../images/customer-2.png';
import malone from '../../../images/customer-3.png';
import ClientsDetails from '../ClientsDetails/ClientsDetails';


const clientsData = [
    {
        img: patrik,
        name: 'Nash Patrik',
        title: 'CEO, Manpol',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos'
    },
    {
        img: barron,
        name: 'Miriam Barron',
        title: 'CEO, Manpol',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos'
    },
    {
        img: malone,
        name: 'Bria Malone',
        title: 'CEO, Manpol',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos'
    },
]

const ClientsFeedback = () => {
    
    return (
        <section className="container mt-5 mb-5">
           <div className="text-center mt-5 mb-5">
               <h2>Clients <span style={{color: '#7AB259'}}>Feedback</span></h2>
           </div>
           <div>
               <div className="row d-flex justify-content-center">
                   {
                       clientsData.map(clients => <ClientsDetails clients={clients}></ClientsDetails>)
                   }

               </div>

           </div>
       </section>
    );
};

export default ClientsFeedback;