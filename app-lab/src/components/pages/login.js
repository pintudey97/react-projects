import React, { useState } from 'react';

const Login = () => {
    const [int, setInt] = useState({
        email:'',
        password:'',
    })
    const handel = (e) =>{
        const newdata = {...int}
        newdata[e.target.name] = e.target.value;
        setInt(newdata);
        console.log(newdata);
    }
    const LoginSubmit = (e) =>{
        localStorage.setItem('login-deatils', JSON.stringify({
            'email': int.email,
            'password': int.password,
        }))
    }
    const OneTokenRemove = ()=>{
        localStorage.removeItem('user-deatils');
    }
    const ClearLocalStorage = ()=>{
        localStorage.clear();
    }
    

    return (
        <React.Fragment>
            <h1>Login Page </h1>
            <input type="email" value={int.email} name="email" onChange={(e) => handel(e)} />
            <input type="password" value={int.password} name="password" onChange={(e) => handel(e)} />
            <button onClick={LoginSubmit}>Set Storage</button>

            <button onClick={OneTokenRemove}>one token remove</button>
            <button onClick={ClearLocalStorage}>Clear Local Storage</button>

        </React.Fragment>
    );
};

export default Login;