import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Projects.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';

 
 
const handleDragStart = (e) => e.preventDefault();
 
const items = [
  <img src={carousel1} onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={carousel2} onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={carousel3} onDragStart={handleDragStart} className="yours-custom-class" />,
];

const Projects = () => {
    return (
    <section style={{backgroundColor: '#111430',marginTop: '70px'}}>
    <div className="container" >
        <h2 className=" tex-center text-white mt-3 mb-3" >Here are some of <span style={{color: '#7AB259'}}>our works</span></h2>
         <AliceCarousel mouseTracking items={items} />
    
        </div>
    </section>
        
       
    );
};

export default Projects;