import React from "react";
import { Link } from "react-router-dom";
import styles from './DiscoverCard.module.css'

const DiscoverCard = ( {card} ) => {
    return (
        
            <div className={styles.card}>
                <img className={styles.cardImg} src={card.img} alt="discover card"></img>
                <p className={styles.cardTitle}>{card.title}</p>
            </div>
        
    )
}

export default DiscoverCard;