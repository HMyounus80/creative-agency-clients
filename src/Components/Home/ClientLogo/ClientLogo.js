import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';


const ClientLogo = () => {
    return (
        <section className="container mt-5 mb-5">
            <div className=" row d-flex justify-content-center mt-5 mb-5 ">
            <div className="col-sm-4 col-md-2">
                <img className="img-fluid" src={slack} alt=""/>
            </div>
            <div className="col-sm-4 col-md-2">
                <img className="img-fluid" src={google} alt=""/>
            </div>
            <div className="col-sm-4 col-md-2">
                <img className="img-fluid" src={airbnb} alt=""/>
            </div>
            <div className="col-sm-4 col-md-2">
                <img className="img-fluid w-50" src={uber} alt=""/>
            </div>
            <div className="col-sm-4 col-md-2">
                <img className="img-fluid w-50" src={netflix} alt=""/>
            </div>
            </div>
        </section>
    );
};

export default ClientLogo;