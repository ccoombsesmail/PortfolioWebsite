//import { Link } from "gatsby"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';




const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  
  }));
  

const HeaderLinks = () => {

   const classes = useStyles();
   const matches = useMediaQuery('(max-width:600px)');
  // let h = <MenuIcon />
  let menu = null
  if (matches === true) {

    menu = <MenuIcon/>

  }
  

return (

    <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    {menu}
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    About
    </Typography>
    
    <Button color="inherit">Projects</Button>
    </Toolbar>
    


     
  )
}


export default HeaderLinks
