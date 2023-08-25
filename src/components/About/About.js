import React from "react";
import * as styles from "./About.module.css"
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import meImage from "../../images/linkdin.jpg"





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
                    <img className = {styles.bioImage} src = {meImage}/> 
                </ScrollAnimation>

                <ScrollAnimation style={{ alignSelf: "center"}} animateIn="slideInRight" animateOut="fadeOut" duration="1" >
                <h2 className={styles.bio}> Hi. I'm a full-stack developer living in the San Jose area. I have a passion for problem solving, 
                    and making things run efficiently while looking great! I have an educational background in Physics and Computer Science, 
                    and I am currently working at Axoni, where I contribute to building next-generation Capital Markets platforms. 
                    In my role as a Full Stack Engineer, I focus on developing robust and scalable systems that address complex problems in the finance realm. 
                    Passionate about technology's transformative power, I am continuously eager to take on new challenges and innovations.
                </h2> 
                </ScrollAnimation>

            </div>

        </div>
    )   
}



export default About


