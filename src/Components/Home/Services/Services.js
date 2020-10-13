import React from 'react';
import mobile from '../../../images/icons/service1.png';
import graphic from '../../../images/icons/service2.png';
import web from '../../../images/icons/service3.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const serviceData = [
    {
        img: mobile,
        title: 'Web & Mobile design',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos'
    },
    {
        img: graphic ,
        title: 'Graphic design',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos'
    },
    {
        img: web,
        title: 'Web development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia aliquam sapiente corporis quas fugit temporibus maiores voluptates tempora eos'
    },
]

const Services = () => {
    return (
       <section className="container mt-5 ">
           <div className="text-center">
               <h2>Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
           </div>
           <div className="d-flex justify-content-center">
               <div className="row">
                   {
                       serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                   }

               </div>

           </div>
       </section>
    );
};

export default Services;