import React, {useState} from 'react';
import CreateUser from './createUser';
import LoginExistingUser from './loginExistingUser';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        width: 500,
        height: 500,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        borderRadius: 25
    },
}));

function LoginModal(props) {

    const [existingUser,setExistingUser] = useState(true)
    const [open, setOpen] = useState(true);

    const closeModal = () => {
        props.closeModal()
    }


    const classes = useStyles();

    return(
        <Modal
            open={open}
            onClose={closeModal}
            className={classes.modal}
        >
            <div className={classes.modalContent}>
                {existingUser ? <LoginExistingUser switchUser={setExistingUser} /> : <CreateUser switchUser={setExistingUser}/> }

            </div>
        </Modal>
    )

}

export default LoginModal;