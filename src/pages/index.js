import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Card from "../components/Card"
import "../components/layout.css"
import "../../public/show-on-scroll.js"
import MediaCard from "../components/MediaCard"



class IndexPage extends React.Component  {
  

render() {

  return(
   
  <Layout>

    <SEO title="Home" />


    <div className="context">
    <ScrollAnimation animateIn="fadeInUp" >

        <h1>Hi I'm <b style = {{color: "black"}}>Cock</b></h1>
        </ScrollAnimation>

    </div>

 <div className="area" id = "area">
            <ul class="circles">

                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div > 


    <Header />

    <div className = "about" >
    <ScrollAnimation animateIn="fadeInDown" animateOut ="fadeOut" duration = "1" >

      <h1> WHO AM I!? </h1>

      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOut ="fadeOut" duration = "1" >
      <h2> Full-stack web developer with a focus on sucking <b style = {{color: "black"}}>cock</b> {/* dynamic and responsive websites, efficient frameworks, and modular code */} </h2>
      </ScrollAnimation>

    </div>

    <div className = "majorSkills">

    
     {/* <ScrollAnimation animateIn="fadeInUp"  duration = "1" >
      <Card imgURL = "/gatsby-icon.png" title = "gatsby"/>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp"  duration = "1" delay = "200" >
      <Card imgURL = "/react-icon.png" title = "React.JS"/>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInDown"  duration = "1.5" delay = "1000" >
            <h1>Skillzz</h1>
      </ScrollAnimation>


      <ScrollAnimation animateIn="fadeInUp"  duration = "1" delay = "400" >
      <Card imgURL = "/go.png" title = "Golang"/>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp"  duration = "1" delay = "600" >
      <Card imgURL = "/html-icon.png" title = "HTLM/CSS3"/>
      </ScrollAnimation> */}



    </div>
      <div className = "skills-wrapper">
      <ul className = "skill-circles">
        <li> <Card imgURL="/gatsby-icon.png" /> </li>
        <li> <Card imgURL = "/react-icon.png"/> </li>
        <li> <Card imgURL="/go.png"/> </li>
        <li>  <Card imgURL="/html-icon.png" />  </li> 
      </ul>

      </div>

    </Layout>
  

      )

  }
}
export default IndexPage
