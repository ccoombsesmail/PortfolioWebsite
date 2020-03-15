//import { Link } from "gatsby"
import React from "react"
import HeaderLinks from "./HeaderLinks"
import AppBar from '@material-ui/core/AppBar';

import PropTypes from 'prop-types';
//import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { withStyles } from '@material-ui/core/styles';


// const windowGlobal = typeof window !== 'undefined' && window;

const styles = {


  show: {

    transition: "opacity 1.5s",
    opacity: "1"
  },
  hide: {

    opacity:0,

  },
  

}


class Header extends React.PureComponent {

  
  
 constructor(props) {
    super(props);

    this.state = {
      barPosition: "relative",
      height: 0
      
 
    };
    this.handleScroll = this.handleScroll.bind(this);
  

  
  }


  componentDidMount() {
    // document.getElementsByTagName('body')[0].addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    var h = document.getElementById('area').offsetHeight
    this.setState({
      barPosition: "relative",
      height: h })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

   
  handleScroll(evt) {
    var lastScroll = window.pageYOffset;

   

    if (lastScroll > this.state.height) {

      this.setState(  {
        barPosition: "sticky",
      })
    

    // } else {
      
    //   this.setState(  {
    //     barPosition: "relative",

    //   })


    }

  

    this.lastScroll = lastScroll;
  }
   
  
 
  render() {


return (
  


  <AppBar  onScroll = {this.handleScroll} style = {{backgroundColor: "#5A5FCC"}}  position={this.state.barPosition}>
       <HeaderLinks />
  </AppBar>



    )


  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);
