import { Link } from "gatsby"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
      justifyContent: "space-between",
      alignItems: 'center'
    },
    button: {
      
      margin: "5px",
      flexBasis: "100px !important",
      fontWeight: "bold",
      color: 'white',
    },
    left: {
      marginLeft: '2vw'
    },
    right: {
      marginRight: '2vw',
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      width: '35px',
      margin: '10px'
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
    <div className={classes.left}>
    <Link style={{ textDecoration: 'none'}} to="/#about"><Button className={classes.button} size="large" color="black"> About </Button></Link>
    <Link style={{ textDecoration: 'none' }} to="/#skills"><Button className={classes.button} size="large" color="black">Skills</Button></Link>
    <Link style={{ textDecoration: 'none' }} to="/#projects"><Button className={classes.button} size="large" color="black">Projects</Button></Link>
    </div> 

    <div className={classes.right} >
      <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/charles-coombs-esmail-1b5a20113/"><img alt="" className={classes.icon} src = {require('../../images/linkedin_icon.png')}/></a>
      <a style={{ textDecoration: 'none' }} href="https://github.com/ccoombsesmail"><img alt="" className={classes.icon} src = {require('../../images/github-icon.png')}/></a>
      <a style={{ textDecoration: 'none' }} href="https://angel.co/u/charlie-coombs"><img alt="" className={classes.icon} src = {require('../../images/angelist.png')}/></a>
    </div>
  </div>

  )
}


export default HeaderLinks
