import React from 'react';
import AuthCheck  from './context';

const UserAuth = (props) => {

    const userlogintoken = localStorage.getItem('user-token');
    
    
    return (
        <React.Fragment>
            <AuthCheck.Provider value={userlogintoken}>
                {props.children}
            </AuthCheck.Provider>
        </React.Fragment>
    );
}
 
export default UserAuth;