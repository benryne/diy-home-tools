import React, {useState, useContext} from 'react';
import { UserContext } from './Context/userContext';

function User() {

    const { username,loggedIn } = useContext(UserContext)
    const [user, setUser] = username;
    const [loggedInValue,setLoggedInValue] = loggedIn;

        return(
            <div>
                {
                    loggedInValue ? 
                    <div>
                        {user}
                    </div> :
                    null 
                }
            </div>
        )
}

export default User;