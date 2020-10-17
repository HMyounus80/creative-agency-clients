import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const OrderPlace = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = service => {
        const formData = new FormData()
        formData.append('name', service.name);
        formData.append('email', service.email);
        formData.append('title', service.title);
        formData.append('description', service.description);
        formData.append('price', service.price);

        fetch('http://localhost:5000/customerOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
               if(data){
                   alert('Order Success')
               }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
             <div className="col-md-7">
                <h4 className='ml-5 mt-5'>Order Now</h4>
              
                  <form class ='order-form' onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} className='form-control mt-5 ml-5' placeholder="Your name" /> <br/> 
                    {errors.name && <span className="error">your name/your company name</span>}
                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} className='form-control ml-5' placeholder="Your email address" /><br/> 
                    {errors.email && <span className="error">your Email is required</span>}

                    <input name="title" ref={register({ required: true })} className='form-control ml-5 p-3' placeholder="your project name" /> <br/> 
                    {errors.projectName && <span className="error">your projectName is required</span>}

                    
                    <textarea name="description" ref={register({ required: true })} className='form-control' placeholder='your project details' id="description" cols="30" rows="10"></textarea>
                    {errors.description && <span className="error">your project details</span>} <br/>

                    <input name='price' ref={register({ required: true })} className='form-control' placeholder="price" /> <br/> 
                    {errors.price && <span className="error">price is required</span>}


                    <button className="btn btn-dark ml-5"  type="submit">Send</button>
                    </form>
                    
                </div>
          
             
       </div>
    </div>
    );
};

export default OrderPlace;