import React from "react"
import IconCard from '../Cards/IconCard'
import styles from './CardCircle.module.css'

const CardCircle = () => {


return (
    <>
    <ul className={styles.skillCircles}>
        <li> <IconCard imgURL="/gatsby-icon.png" /> </li>
        <li> <IconCard imgURL="/react-icon.png" /> </li>
        <li> <IconCard imgURL="/go.png" /> </li>
        <li> <IconCard imgURL="/html-icon.png" />  </li>
        <li> <IconCard imgURL="/ruby.png" />  </li>
        <li> <IconCard imgURL="/SQL.png" />  </li>
        <li> <IconCard imgURL="/js.png" />  </li>
    </ul>
    <div>
        <h1 className={styles.tech}> Technologies</h1>
    </div>
    </>

)

}



export default CardCircle