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

    <About></About>

      <Skillz>

      </Skillz>

      <Projects></Projects>

    </Layout>
  

      )

  }
}
export default IndexPage
