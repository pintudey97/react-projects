import React, { useState } from 'react';

const Register = () => {
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
            <h1>Register Page </h1>
            <div className="d-flex flex-lg-wrap">
            <div className="f-50">
                <input type="text" value={int.firstName} name="firstName" className="w-100" onChange={(e) => handel(e)} />
            </div>
            <div className="f-50">
                <input type="text" value={int.LastName} name="lastName" className="w-100" onChange={(e) => handel(e)} />
            </div>
            <div className="f-50">
                <input type="email" value={int.email} name="email" className="w-100" onChange={(e) => handel(e)} />
            </div>
            <div className="f-50">
                <input type="password" value={int.password} name="password" className="w-100" onChange={(e) => handel(e)} />
            </div>
            <div className="f-50">
                <input type="text" value={int.mobile} name="mobile" className="w-100" onChange={(e) => handel(e)} />
            </div>
            <button onClick={LoginSubmit}>Set Storage</button>

            <button onClick={OneTokenRemove}>one token remove</button>
            <button onClick={ClearLocalStorage}>Clear Local Storage</button>
            </div>
        </React.Fragment>
    );
};

export default Register;