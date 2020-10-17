import React from 'react';

const Footer = () => {
    return (
        <section style={{backgroundColor: '#FBD062'}} className="mt-5 mb-5">
        <div className="container" >
            <div className="row d-flex justify-content-center ">
                <div className="col-md-5 mt-5">
                    <h2>Let us handle your <br/> project, professionally</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, culpa nesciunt. Praesentium quae illo at.</p>
                </div>
                <div className="col-md-6 mt-5">
                    <form action="">
                        <input className="form-control py-3" type="email" name="email" id="" placeholder="Your email address"/><br/>
                        <input className="form-control py-3" type="text" placeholder="Your name/company's name"/><br/>
                        <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Your message"></textarea><br/>
                        <input className="btn btn-dark p-2 " type="button" value="Send"/>
                    </form>
                </div>
            </div>
            
        </div>
        <div className="text-center mt-5 mb-5">
        <p>copyright creative agency all right reserved 2020</p>
        </div>
 </section>
   
    );
};

export default Footer;