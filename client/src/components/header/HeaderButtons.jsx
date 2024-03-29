import {AppBar,Toolbar,makeStyles,Typography,Box,withStyles,Button,Badge} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import {useContext, useState} from 'react';
import { useSelector } from 'react-redux';
import LoginDialog from '../login/Login.jsx';
import { LoginContext } from '../../context/contextProvider.jsx';
import Profile from './Profile.jsx';


const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center', 
        }, 
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
    }
}));

const HeaderButtons=()=>{
    const classes= useStyle();

    const [open,setOpen]=useState(false);

    const {account,setAccount}=useContext(LoginContext);


    const openLoginDialog=()=>{
        setOpen(true);
    }

    return(
        <Box className={classes.wrapper}>
        {
            account ? <Profile account={account} setAccount={setAccount} />:
            <Link >
            <Button variant="contained" onClick={()=>openLoginDialog()} className={classes.login}>Login</Button>
            </Link>

        }
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>

    )
}

export default HeaderButtons;