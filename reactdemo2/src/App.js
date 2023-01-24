import React from 'react';
import {Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import './Assets/css/style.css';
import Header from './Component/Common/Header';
import Footer from './Component/Common/Footer';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Service from './Component/Service/Service';
import Apitest from './Component/Api/apitest';
function App() {
  return (
    <React.Fragment>
      <Header/>
       <Switch>
          <Route exact path="/" component={Home} />            
          <Route path="/About" component={About} />            
          <Route path="/Contact" component={Contact} />            
          <Route path="/Service" component={Service} />  
          <Route path="/Api" component={Apitest} /> 
          <Redirect to={Home} />         
        </Switch>
        <Footer />
    </React.Fragment>
  );
}

export default App;
