import React from "react";
import * as styles from "./Card.module.css"

const Card = (props) => {
    return (


        <div className = {styles.wrapper} >
            <div className={styles.contents}>
                <img alt="" className={styles.icon} src = {props.img} />
                <h1 > {props.title} </h1>
                <h3>{props.sub}</h3>
            </div>
        </div>


    )


}



export default Card
