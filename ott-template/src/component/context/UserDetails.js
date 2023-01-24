import React from 'react';
import {UserDetails}  from './context';

const UserDetailscom = (props) => {

    const getUserDetails = localStorage.getItem('user-details');
    
    return (
        <React.Fragment>
            <UserDetails.Provider value={getUserDetails}>
                {props.children}
            </UserDetails.Provider>
        </React.Fragment>
    );
}
 
export default UserDetailscom;