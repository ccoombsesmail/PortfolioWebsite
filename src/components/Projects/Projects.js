import React from "react";
import styles from "./Projects.module.css"
import ScrollAnimation from 'react-animate-on-scroll';
import MediaCard from '../Cards/ProjectCard'



const Projects = () => { 

    return (

        <div id="projects" className = {styles.wrapper}>
            <div className={styles.projectsHeader}>
                <h1> Projects </h1>
            </div>
            
            <div  className = {styles.projectsWrapper}>
                <div className = {styles.mediaCardWrapper}>
                    <ScrollAnimation animateIn="fadeInLeft" duration="1.5" >
                        <a style={{ textDecoration: 'none' }} href="https://mystifying-benz-ae46a4.netlify.com/" target="_blank">
                        <MediaCard 
                        imgSrc= {require("../../images/algoviz.png")}
                        title = "Algorithm Visualizer" 
                        body = "Sorting Algorithm Visualizer"
                        iconSrc1={require("../../images/react-icon.png")}
                        iconSrc2={require("../../images/js.png")}
                        iconSrc3={require("../../images/html-icon.png")}
                        iconSrc4 = ""  //Enter an empty string if there is no fourth icon.
                        gitRef= "https://github.com/ccoombsesmail/AlgoVisualizer"
                        siteURL= "https://mystifying-benz-ae46a4.netlify.com/"
                        >
                        </MediaCard>
                        </a>
                    </ScrollAnimation>
                </div>
                <div className={styles.mediaCardWrapper}>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" >
                            <MediaCard 
                            imgSrc={require("../../images/dashIoT4.png")} 
                            title="Smart Home Dashboard" 
                            body="'Secret' Smart Home Control Dashbaord"
                            iconSrc1={require("../../images/go.png")}
                            iconSrc2={require("../../images/react-icon.png")}
                            iconSrc3={require("../../images/js.png")}
                            iconSrc4={require("../../images/html-icon.png")}
                            gitRef="https://github.com/ccoombsesmail/HomeIoTBackend"
                            siteURL="https://github.com/ccoombsesmail/HomeIoTFrontend"
                            ></MediaCard>
                    </ScrollAnimation>

                </div>
                <div className={styles.mediaCardWrapper}>
                    <ScrollAnimation animateIn="fadeInRight" duration="1.5" >
                            <MediaCard 
                            imgSrc={require("../../images/portSite.png")} 
                            title="Portfolio Website"
                            body="Portfolio website from scratch"
                            iconSrc2={require("../../images/gatsby-icon.png")}
                            iconSrc1={require("../../images/react-icon.png")}
                            iconSrc3={require("../../images/js.png")}
                            iconSrc4={require("../../images/html-icon.png")}
                            gitRef="https://github.com/ccoombsesmail/HomeIoTBackend"
                            siteURL="https://github.com/ccoombsesmail/HomeIoTFrontend"
                            ></MediaCard>
                    </ScrollAnimation>

                </div>
            </div>
        </div>
    )




}



export default Projects;