import {AppBar,Toolbar,makeStyles,Typography,Box,withStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

import SearchBar from './searchBar.jsx'
import HeaderButtons from './HeaderButtons.jsx'


const useStyle= makeStyles({
    header:{
        background:'#2874f0',
        height: 55,
    },logo:{
        width:75,
    },subURL:{
        width:10,
        marginLeft:4,
    },container:{
        display:'flex',
        height:10,
    },component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:'none',
        color:'#fff',
    },subheading:{
        fontSize:10,
        fontStyle:'Italic',
    }
})

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

 const Header =() =>
 {
     const classes= useStyle();
     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
        const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
     return (
        <AppBar className={classes.header}>
        <ToolBar>
          <HeaderButtons />
        </ToolBar>
      </AppBar>
     )
 }
 export default Header;