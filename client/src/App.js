import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';

import Header from '../src/components/header/Header';
import DashboardBody from './components/body/DashBoard/Dashboard-Body';
import Footer from '../src/components/footer/Footer';
import Drivers_Body from './components/body/Drivers/Drivers_Body';
import TripDetail_Body from './components/body/TripDetail/TripDetail_Body';
function App() {
  return (
    <>
      <Header />
      <Router>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/drivers">
              <span>Drivers</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/trip">
              <span>Trip Detail</span>
            </NavLink>
          </li>
        </ul>

        <Route exact path="/" component={DashboardBody} />
        <Route path="/drivers" component={Drivers_Body} />
        <Route path="/trip" component={TripDetail_Body} />
      </Router>
      {/* <DashboardBody /> */}
      <Footer />
    </>
  );
}

export default App;
