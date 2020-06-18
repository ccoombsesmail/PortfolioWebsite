import React from 'react'
import styles from '../Skillz.module.css'



const TechnologyItem = (props) => {

  return (
    <div className={styles.itemWrapper}>
      <span className={styles.technology}>{props.technology}</span>
    </div>
  )
}

export default TechnologyItem