import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import LoginModal from './loginModal'

function LoginUser() {

    const [modalOpen,setModalOpen] = useState(false)

    const closeModal = () => {
        setModalOpen(false)
    }

    return  (
        <div>
            <Button onClick={() => setModalOpen(true)}>Login</Button>
            {modalOpen ? <LoginModal closeModal={closeModal}/> : null}
        </div>
    )

}

export default LoginUser;