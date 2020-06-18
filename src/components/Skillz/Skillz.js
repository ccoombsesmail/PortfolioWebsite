import React from "react";
import styles from "./Skillz.module.css"
import Card from '../Cards/Card'
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "../Slider/Slider"
import TechnologyItem from './TechnologyItem/TechnologyItem'



const Skillz = (props) => {

  const technologies = ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'Ruby', 'Ruby on Rails', 'Postgres', 'SQL', 
  'MongoDB', 'AWS S3', 'GO', 'Git', 'HTML5/CSS3', 'WebSockets', 'D3', 'Three.js', 'RSpec']

    return (
    <div id = "skills" className = {styles.wrapper}>
        <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" duration="1" >
            <h1> Skills </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" duration="1" >
            <h1 style={{ marginTop: '-1.2vh' }}> ─── </h1>
        </ScrollAnimation>
        <Slider></Slider>
        <div className={styles.technologiesWrapper}>
        {
            technologies.map((technology) =>{
              return <TechnologyItem technology={technology}/>
            })
        }
        </div>
        
        <div className={styles.cardWrapper}>
            <ScrollAnimation animateIn="fadeInUp"  duration = "1" >
            <Card 
            imgURL = "/backend.png" 
            title = "Backend"
            sub= "Experience with Node.js/Express, Ruby on Rails, and some knowledge of lower level languages such as GO and Rust" />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp"  duration = "1" delay = "200" >
            <Card 
            imgURL = "/front-end.png" 
            title = "Front-End"
            sub= "Proficient in Javascript and HTML/CSS3, along with modern front-end frameworks such as React/Redux"/>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp"  duration = "1" delay = "400" >
                <Card 
                imgURL = "/database.png" 
                title = "Database"
                sub = "RDBMS database managment systems such as Postgres, along with NoSQL databases like MongoDB"/>
            </ScrollAnimation>

        </div>

    </div>


    );

    }
export default Skillz


