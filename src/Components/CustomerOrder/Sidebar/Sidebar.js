import React, { useContext } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    

    return (
        <div>
            <img style={{height: '50px', marginBottom: '30px'}} src={logo} alt=""/>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                       <span>Dashboard</span>
                    </Link>
                </li>
                  <li>
                    <Link to="/orderPlace" className="text-white">
                         <span>Order</span>
                    </Link>
                </li>
                  <li>
                    <Link to="/customerServiceList" className="text-white">
                         <span>Service list</span>
                    </Link>
                </li>
                  <li>
                    <Link to="/customerReview" className="text-white">
                         <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                         <span>Home</span>
                    </Link>
                </li>
                 <div>
                 <li>
                        <Link to="/addService" className="text-white" >
                             <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allServiceList" className="text-white">
                            <span>All Service list</span>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <span>Make Admin</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/admin/setting" className="text-white" >
                            <span>Settings</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"> <span>Logout</span></Link>
            </div>
        </div>
        </div>
    );
};

export default Sidebar;