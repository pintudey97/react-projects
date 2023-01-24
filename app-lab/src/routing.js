import React from 'react';
import Footer from './components/perticile/footer';
import Header from './components/perticile/header';
import { Route, Switch } from "react-router-dom";
import Home from './components/pages/home';
import About from './components/pages/about';
import './assets/scss/style.scss';
import Login from './components/pages/login';
import Register from './components/pages/register';


const Routing = () => {

    const path = window.location.href;
    console.log('path', path);
            if(path === true){
                return (
                    <React.Fragment>      
                    <Switch>
                        <Route path="/" component={Register} exact/>
                        <Route path="/login" component={Login}  />
                    </Switch>
                    </React.Fragment>
                    );
            }else{
                return (
                    <React.Fragment>
                    <Header />         
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                    </Switch>
                     <Footer />
                    </React.Fragment>
                );
            }

    
};

export default Routing;