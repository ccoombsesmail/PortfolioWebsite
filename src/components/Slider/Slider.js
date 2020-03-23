import React from 'react';
import styles from "./Slider.module.css"







const Slider = (props) => {
    return(

    <div className = {styles.wrapper}>
        <div className={styles.slider}>
            <div className={styles.slideTrack}>

                <div className={styles.slide}>
                    <img src = {require("../../images/go.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src = {require("../../images/react-icon.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/gatsby-icon.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/html-icon.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/ruby.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/js.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/SQL.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/git.png")} height="100" width="100" alt="" />
                </div> 
                <div className={styles.slide}>
                    <img src={require("../../images/go.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/react-icon.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/gatsby-icon.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/html-icon.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/ruby.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/js.png")} height="100" width="100" alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={require("../../images/SQL.png")} height="100" width="100" alt="" />
                </div> 
                <div className={styles.slide}>
                    <img src={require("../../images/git.png")} height="100" width="100" alt="" />
                </div> 
          
            </div>
        </div>
     </div>
    )

}


export default Slider;