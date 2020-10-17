import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const CustomerReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = reviewInfo => {
        let newReviewInfo = {...reviewInfo}

        fetch('http://localhost:5000/customerReview', {
            method: 'POST',
            headers: { 

                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReviewInfo)
            
        })
            .then(response => response.json())
            .then(data => {
               if(data){
                   alert('Review Success')
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


                <input name="title" ref={register({ required: true })} className='form-control ml-5 p-3' placeholder="Company's name, Designation" /> <br/> 
                {errors.projectName && <span className="error">your projectName is required</span>}

                
                <textarea name="description" ref={register({ required: true })} className='form-control' placeholder='Description' id="description" cols="30" rows="10"></textarea>
                {errors.description && <span className="error">your project details</span>} <br/>



                <button className="btn btn-dark ml-5"  type="submit">Send</button>
                </form>
                
            </div>
      
         
   </div>
</div>
    );
};

export default CustomerReview;