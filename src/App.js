import React, { createContext, useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import PrivateRoute from './Components/Home/Login/PrivateRoute/PrivateRoute';
import OrderPlace from './Components/CustomerOrder/OrderPlace/OrderPlace';
import CustomerService from './Components/CustomerOrder/CustomerService/CustomerService';
import CustomerReview from './Components/CustomerOrder/CustomerReview/CustomerReview';
import AddService from './Components/adminDashboard/AddService/AddService';
import NoMatch from './Components/NoMatch/NoMatch';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
            
          <PrivateRoute path="/orderPlace">
              <OrderPlace></OrderPlace>
          </PrivateRoute>

          <PrivateRoute path="/customerServiceList">
              <CustomerService></CustomerService>
          </PrivateRoute>
          
          <PrivateRoute path="/customerReview">
               <CustomerReview></CustomerReview>
          </PrivateRoute>

          <PrivateRoute path="/addService">
               <AddService></AddService>
          </PrivateRoute>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

          
          
        </Switch>
      </Router>

      </UserContext.Provider>
  );
}

export default App;
