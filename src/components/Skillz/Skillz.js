import React from "react";
import styles from "./Skillz.module.css"
import Card from '../Cards/Card'
import ScrollAnimation from 'react-animate-on-scroll';
import CardCircle from "../CardCircle/CardCircle";
import Slider from "../Slider/Slider"




const Skillz = (props) => {

    return (
    <div className = {styles.wrapper}>
        
            <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" duration="1" >
                <h1> Skills </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" duration="1" >
                <h1 style={{ marginTop: '-1.2vh' }}> ─── </h1>
            </ScrollAnimation>


        <Slider></Slider>
        
        <div className={styles.cardWrapper}>
            <ScrollAnimation animateIn="fadeInUp"  duration = "1" >
            <Card 
            imgURL = "/backend.png" 
            title = "Backend"
             sub= "Knowledge of lower level languages such as GO and Rust, in addition to Node.js and back-end framworks such as Ruby on Rails" />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp"  duration = "1" delay = "200" >
            <Card 
            imgURL = "/front-end.png" 
            title = "Front-End"
            sub = "Focus on responsive and performant UIs. Experience with HTML/CSS3 and Javascript, along with modern front-end frameworks such as React.js and Gatsby.js"/>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp"  duration = "1" delay = "400" >
            <Card 
            imgURL = "/database.png" 
            title = "Database"
            sub = "RDBMS database managment systems such as Postgres and SQLite3, along with NoSQL databases like Firebase"/>
            </ScrollAnimation>

        </div>

            {/* <CardCircle>
            <h1> skills</h1>
            </CardCircle> */}
    </div>


    );

    }
export default Skillz



  //   About
  //   </Typography> */}