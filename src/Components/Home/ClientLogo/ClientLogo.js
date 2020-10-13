import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';


const ClientLogo = () => {
    return (
        <section className="container mt-3">
            <div className=" row d-flex justify-content-center ">
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
                <img className="img-fluid" src={uber} alt=""/>
            </div>
            <div className="col-sm-4 col-md-2">
                <img className="img-fluid" src={netflix} alt=""/>
            </div>
            </div>
        </section>
    );
};

export default ClientLogo;