import React from "react";
import styles from "./About.module.css"
import Image from "../image"
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";





const About = (props) => {

    return ( 
    <div className = {styles.aboutWrapper}>

            <div id = "about" className={styles.headerWrapper}>
                <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" duration="1" >
                    <h1> ABOUT </h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" duration="1" >
                    <h1 > ───── </h1>
                </ScrollAnimation>
            </div>

            <div className = {styles.imgWrapper}>
                {/* <Image /> */}
                <ScrollAnimation animateIn="rollIn" animateOut="fadeOut" duration="1" >
                <img className = {styles.bioImage} src = {require("../../images/linkdin.jpg")}/> 
                </ScrollAnimation>

                <ScrollAnimation style={{ alignSelf: "center"}} animateIn="slideInRight" animateOut="fadeOut" duration="1" >
                <h2 className={styles.bio}> I'm a full-stack developer living in the San Francisco area. I have a passion for problem solving, 
                    and making things run efficiently while looking great! I have an educational background in Physics and Computer Science, 
                    and have previously worked in the blockchain industry 
                </h2> 
                </ScrollAnimation>

            </div>

        </div>
    )   
}



export default About


