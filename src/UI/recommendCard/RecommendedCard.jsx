import React from "react";
import styles from './RecommendedCard.module.css'

const RecommendedCard = ( { card } ) => {
    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={card.img} alt="recommended card"></img>
            <p className={styles.cardTitle}>{card.title}</p>
        </div>
    )
}

export default RecommendedCard;