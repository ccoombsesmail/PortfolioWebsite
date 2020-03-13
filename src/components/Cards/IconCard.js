import React from "react";
import styles from "./IconCard.module.css"

const IconCard = (props) => {
    let img2 = props.imgURL
    return (
        <img alt="" className={styles.icon} src={require("../../images" + img2)} />
    )


}



export default IconCard