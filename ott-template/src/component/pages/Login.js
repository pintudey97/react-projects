import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ImagePath } from "../../ImagePath";
import axios from 'axios';
import AuthCheck  from '../context/context';


const Login = () => {
  const [filddata, setFilddata] = useState({
    email:'',
    password:''
  })

  const [errors, setErrors] = useState({});

  const [apimsg, setApimsg] = useState('');

  const change=(e)=>{
    setFilddata({...filddata,[e.target.name]:e.target.value})
  }

  let loginAPIUrl = 'https://reqres.in/api/login';

  //email: eve.holt@reqres.in
  //password: cityslicka

  const navigate = useNavigate();

  useEffect(() => {
    setErrors("");
  }, [filddata]);



  const validation =()=>{
    let errors = {}
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!filddata.email){
      errors.email = 'Enter correct email';
    }else if(!mailformat.test(filddata.email)){
      errors.email = 'Enter @';
    }else if(!filddata.password){
      errors.password = 'Enter correct password';
    }
    return errors;
  }

  const HandelSubmit =(e)=>{
    e.preventDefault();
    setErrors(validation(filddata));
    
    axios.post(loginAPIUrl,{
      email:filddata.email,
      password:filddata.password
    })
    .then(function (response) {
      console.log(response);
      if(response.status == '200' &&  response.data.token == 'QpwL5tke4Pnpja7X4'){
        setApimsg('Login susfully');
        localStorage.setItem('user-token', response.data.token);
        navigate('/profile');
      }
    }).catch(function (errors) {
      setApimsg(errors.message)
    })
    
    
    console.log(filddata);
  }
  

  const userlogintoken = useContext(AuthCheck);
  return userlogintoken ? <Navigate to="/profile" /> : 
    
        <React.Fragment>
            <section className="sign-process">
  <div className="content">
    <div className="sign-form-layout">
      <h2 className="pb-8 mb-3">Login to your account.</h2>
      {apimsg}
      {/* <form > */}
        <div className="form-group">
          <div className="mb-16">
            <input type="text" className="form-control" name="email" value={filddata.email} onChange={change} placeholder="willie.jennings@example.com" />    
            <span className="error">{errors.email}</span>
          </div>
          <input type="password" className="form-control" name="password" value={filddata.password} placeholder="******" onChange={change} />
          <span className="error">{errors.password}</span>
        </div>
        <div className="form-group mb-40">          
          <button type="button" className="primary-button" onClick={HandelSubmit}>Login</button>
        </div> 
        <p className="text-center back">
          <Link to="#"><span className="mr-10"><img src={ImagePath.arrowLeft} alt="left" /></span>Back to Sign up</Link>
          <Link to="/"><span className="ml-10 mr-10"><img src={ImagePath.arrowLeft} alt="left" /></span>Back to Home</Link>
        </p>
      {/* </form> */}
    </div>
  </div>
</section>
        </React.Fragment>
    
}
 
export default Login;