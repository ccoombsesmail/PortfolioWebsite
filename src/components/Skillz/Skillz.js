import React from "react";
import styles from "./Skillz.module.css"
import Card from '../Cards/Card'
import ScrollAnimation from 'react-animate-on-scroll';
import CardCircle from "../CardCircle/CardCircle";





const Skillz = (props) => {

    return (
    <div className = {styles.wrapper}>
        
            <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" duration="1" >
                <h1> Skills </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" duration="1" >
                <h1 style={{ marginTop: '-40px' }}> ─── </h1>
            </ScrollAnimation>



        <div className={styles.cardWrapper}>
            <ScrollAnimation animateIn="fadeInUp"  duration = "1" >
            <Card imgURL = "/backend.png" title = "Backend"/>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp"  duration = "1" delay = "200" >
            <Card imgURL = "/front-end.png" title = "Front-End"/>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp"  duration = "1" delay = "400" >
            <Card imgURL = "/database.png" title = "Database"/>
            </ScrollAnimation>

        </div>
            <CardCircle>

            </CardCircle>
    </div>


    );

    }
export default Skillz



  //   About
  //   </Typography> */}