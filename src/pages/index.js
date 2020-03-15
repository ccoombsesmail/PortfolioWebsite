import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/header"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "../components/layout.css"
// import "../../public/show-on-scroll.js"
import About from "../components/About/About"
import Skillz from "../components/Skillz/Skillz"
import Projects from "../components/Projects/Projects";


class IndexPage extends React.Component  {
  

render() {

  return(
   
  <Layout>

    <SEO title="Home" />


    <div className="context">
    <ScrollAnimation animateIn="fadeInUp" >

          <h1>Hi I'm <b style={{ color: "black" }}>Charles</b></h1>
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

    {/* <div className = "about" > */}
  
      {/* <ScrollAnimation animateIn="fadeInUp" animateOut ="fadeOut" duration = "1" >
      <h2> Full-stack web developer with a focus on sucking <b style = {{color: "black"}}>cock</b> {/* dynamic and responsive websites, efficient frameworks, and modular code  </h2>
      </ScrollAnimation> }*/}

    {/* </div> */}

    <About></About>

      <Skillz>

      </Skillz>

      <Projects></Projects>

    </Layout>
  

      )

  }
}
export default IndexPage
