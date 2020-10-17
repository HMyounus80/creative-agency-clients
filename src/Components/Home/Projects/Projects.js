import React from 'react';
import './Projects.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
  const allCarouselPic=[carousel1, carousel2, carousel3, carousel4, carousel5]
  const responsive = {
      superLargeDesktop: {
      
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
        
    return (
    <section style={{backgroundColor: '#111430',}} className=" slider mt-5 mb-5">
    <div className="container" >
        <div className="text-center text-white mb-5">
        <h2>Here are some of <span style={{color: '#7AB259'}}>our works</span></h2>
        </div>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}
                    keyBoardControl={true}  dotListClass="custom-dot-list-style" showDots={true}>
                    {
                        allCarouselPic.map(carousel=>{
                            return(
                                <div>
                                    <img className='carousel-image' src={carousel} alt=""/>
                                </div>
                            )
                        })
                    }
                </Carousel>;
        </div>
    </section>
        
       
    );
};

export default Projects;