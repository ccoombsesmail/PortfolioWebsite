import React from "react"
import IconCard from '../Cards/IconCard'
import styles from './CardCircle.module.css'

const CardCircle = () => {


return (

<div className={styles.skillsWrapper}>
    <ul className={styles.skillCircles}>
        <li> <IconCard imgURL="/gatsby-icon.png" /> </li>
        <li> <IconCard imgURL="/react-icon.png" /> </li>
        <li> <IconCard imgURL="/go.png" /> </li>
        <li> <IconCard imgURL="/html-icon.png" />  </li>
        <li> <IconCard imgURL="/ruby.png" />  </li>
        <li> <IconCard imgURL="/SQL.png" />  </li>
        <li> <IconCard imgURL="/js.png" />  </li>



    </ul>
</div>
)

}



export default CardCircle