import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';
import { authenticateLogin, authenticateSignup } from '../../service/api';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 10,
        fontWeight: 600
    }
})

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const Login = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box style={{display: 'flex'}}>
                    {
                        account.view === 'login' ? 
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                            { error && <Typography className={classes.error}>Please enter valid Email ID/Mobile number</Typography> }
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
    
                            <Button className={classes.loginbtn} onClick={() => loginUser()} >Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                            <Button className={classes.requestbtn}>Request OTP</Button>
                            <br></br>
                            <Typography className={classes.createText} onClick={() => toggleSignup()}>New to SplitIt? Create an account</Typography>
                        </Box> : 
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <Button className={classes.loginbtn} onClick={() => signupUser()} >Continue</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;