import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addServiceList?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setServiceList(data))
         
    }, [])
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <ServiceList serviceList={serviceList}></ServiceList>
            </div>
            </div>
        </section>
    );
};

export default Dashboard;