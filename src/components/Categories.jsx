import React from "react";
import styles from './Categories.module.css'

const Categories = () => {
    return(
        <ul>
            <li className={styles.categoryItem}>Popular</li>
            <li className={styles.categoryItem}>Featured</li>
            <li className={styles.categoryItem}>Most visited</li>
            <li className={styles.categoryItem}>Europe</li>
            <li className={styles.categoryItem}>Asia</li>
        </ul>    
    )
}

export default Categories;