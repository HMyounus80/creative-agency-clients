import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import CustomerServiceList from './CustomerServiceList';

const CustomerService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [serviceList, setServiceList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/customerService/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setServiceList(data)
        })
    }, [loggedInUser.email])
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
              <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                {
                    serviceList.map(service => <CustomerServiceList service={service} key={service._id}></CustomerServiceList>)
                }
            </div>
        </div>
        </div>
    );
};

export default CustomerService;