import React from "react";

import "./Card.css"

const Card = (props) => {


   /*  const styles = {

        wrapper: {
        boxShadow: "4px 5px 4px #000000",
        transition: "0.3s",
        borderRadius: "15px", 
        color: "black",
        backgroundColor: "white",
        width: "22vw",
        height: "25vh",
        marginLeft: "10px",
        textAlign: "center"
        },

        contents: {
        display: "inline-flex",
        marginTop: "10%"



        }

    } */

    let img2 = props.imgURL
   

    return (


        // <div className = "wrapper" >

        // <div className = "contents"   >
         <img alt = "" className = "icon rotating" src = {require("../images" + img2)} />  
    
    
        //     <h2> {props.title} </h2>
        // </div>
        // </div>


    )


}



export default Card