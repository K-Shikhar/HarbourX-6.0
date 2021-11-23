import { Box,makeStyles } from '@material-ui/core';
import {useEffect} from 'react';
import MidSection from './MidSection.jsx'


import {useSelector,useDispatch} from 'react-redux';



const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () =>
{
    const classes=useStyle();
    return (
        <div>
            <Box className={classes.component}>
            </Box>
        </div>
    )
}



export default Home;