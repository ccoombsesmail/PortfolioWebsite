import { Link } from "gatsby"
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
      display: "inline-flex",
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      display: "inline-flex !important",
      width: "100vw",
      marginLeft: "2vw",
      justifyContents: "flex-start"
    },
    button: {
      
      margin: "5px",
      flexBasis: "100px !important",
      fontWeight: "bold",
      color: 'white'
    }
  
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


  <div className = {classes.toolbar} >

    <Link style={{ textDecoration: 'none'}} to="/#about"><Button className={classes.button} size="large" color="black"> About </Button></Link>
    <Link style={{ textDecoration: 'none' }} to="/#skills"><Button className={classes.button} size="large" color="black">Skills</Button></Link>
    <Link style={{ textDecoration: 'none' }} to="/#projects"><Button className={classes.button} size="large" color="black">Projects</Button></Link>
    
  </div>
  // <Toolbar  >
  //   <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
  //   {menu}
  //   </IconButton>
  //   {/* <Typography variant="h6" className={classes.title}>
  //   About
  //   </Typography> */}
  //   <Button  size = "large" color="inherit">About</Button>
  //   <Button size="large"  color="inherit">Projects</Button>
  //   <Button size="large" color="inherit">Projects</Button>
  //   <Button size="large" color="inherit">Projects</Button>
  //   <Button size="large" color="inherit">Projects</Button>

  //   </Toolbar>
    


     
  )
}


export default HeaderLinks
