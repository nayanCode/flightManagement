import React from 'react';
 import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles,IconButton} from '@material-ui/core';
 import { Link } from 'react-router-dom';

import { Menu } from '@material-ui/core';


const useStyle = makeStyles({
    header: {
        background: '#F5C935',
        height: 60,
       
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none',
        

    },
    logo: {
        width: 75,
        fontSize:30,
        fontWeight: 'bold',
        fontStyle:'italic'
    },
    container: {
        display: 'flex',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    signout: {
   
  
    }
})

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    // const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar position="fixed" className={classes.header}>
        <ToolBar>
            <IconButton color="white">
                <Menu/>
            </IconButton>
            <Link to='/' className={classes.component}>
                <Typography className={classes.logo}>WeFlight</Typography>
                <Box component="span" className={classes.container}>
                    <Typography className = {classes.subHeading}>Explore <Box component="span" style={{color:'#FFFFFF'}}>Flights</Box></Typography>
                    {/* <img src={subURL} className={classes.subURL} /> */}
                </Box>
            </Link>
           {/* <Box className={classes.signout}>
               SignOut
           </Box> */}
        </ToolBar>
    </AppBar>
    );
}



export default Header;