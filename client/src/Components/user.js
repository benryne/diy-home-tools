import React, {useState, useEffect} from 'react';

function User(props) {

    const [user,setUser] = useState('')

    useEffect(() => {
        setUser(props.user);
    })


    if(user === '') {   
        return(null)
    }
    else {
        return(
            <div>{user.name}</div>
        )
    }
}

export default User;