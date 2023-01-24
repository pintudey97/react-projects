import React from 'react';
import './App.css';
import './Assets/css/grobal.css';
import Header from './Components/Common/Header';
import { Switch, Route, Redirect, } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Common/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header />      
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Redirect to={Home} />
        </Switch>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
