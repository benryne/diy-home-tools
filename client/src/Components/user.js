import React, {useState, useContext} from 'react';
import { UserContext } from './Context/userContext';
import { makeStyles } from '@material-ui/core/styles'
import { fontSize } from '@material-ui/system';
import { Container } from '@material-ui/core';

    const useStyles = makeStyles((theme) => ({
        userTitle:{
            paddingTop: 25,
            paddingBottom: 25,
            fontSize: 40,
            fontWeight: 700,
        },
        containerStyle: {
            backgroundColor: theme.palette.primary.purple,
            color: theme.palette.primary.white
        }
    }));

function User() {

    const { username,loggedIn } = useContext(UserContext)
    const [user, setUser] = username;
    const [loggedInValue,setLoggedInValue] = loggedIn;

    const classes = useStyles()

    if(loggedInValue) {
        return(
            <Container className={classes.containerStyle} maxWidth="xl">
                <div className={classes.userTitle}>Hi {user}!</div>
            </Container>
        )
    } else {
        return null;
    }
}

export default User;