import React from "react";
import styles from "./Card.module.css"

const Card = (props) => {


//    /*  const styles = {

//         wrapper: {
//         boxShadow: "4px 5px 4px #000000",
//         transition: "0.3s",
//         borderRadius: "15px", 
//         color: "black",
//         backgroundColor: "white",
//         width: "22vw",
//         height: "25vh",
//         marginLeft: "10px",
//         textAlign: "center"
//         },

//         contents: {
//         display: "inline-flex",
//         marginTop: "10%"



//         }

//     } */

    let img2 = props.imgURL
   

    return (


        <div className = {styles.wrapper} >
            <div className={styles.contents}>
                <img alt="" className={styles.icon} src = {require("../../images" + img2)} />  
                <h1 > {props.title} </h1>
                <h3>{props.sub}</h3>
            </div>
        </div>


    )


}



export default Card