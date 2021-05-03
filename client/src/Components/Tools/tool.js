import React, {useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolCard: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.lightGrey,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        height: 100,
        width: 300,
        position: 'relative',
        display: 'inline-block',
        marginRight: 20
    },
    toolName: {
        color: theme.palette.primary.white,
        fontSize: 30,
        fontWeight: 700,
        left: 10,
        top: 10,
        position: 'absolute'
    },
    switchSelectedButton: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        width: 25,
        minWidth: 25,
        height: 25,
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        backgroundColor: theme.palette.primary.purple,
        color: theme.palette.primary.white,
    }
}));

function Tool(props) {

    const [tool,setTool] = useState(props.tool)
    const [toolStatus,setToolStatus] = useState(props.toolStatus)
    const classes = useStyles()

    const changeToolStatus = () => {
        props.changeToolStatus(tool)
    }

    useEffect(() => {
        setTool(props.tool)
    })

    return(
        <div className={classes.toolCard}>
            <div className={classes.toolName}>{tool.name}</div>
            <Button className={classes.switchSelectedButton} onClick={changeToolStatus}>{toolStatus == 'selected' ? '-' : '+'} </Button>
            {/* {toolStatus === 'selected' ? <Button onClick={changeToolStatus}>-</Button> : 
                <Button onClick={changeToolStatus}>+</Button>
            } */}
        </div>
    )

}

export default Tool; 
