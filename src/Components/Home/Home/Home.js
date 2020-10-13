import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import ClientLogo from '../ClientLogo/ClientLogo';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ClientLogo></ClientLogo>
            <Services></Services>
            <Projects></Projects>
            <ClientsFeedback></ClientsFeedback>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;