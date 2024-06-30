import React from "react";
import styles from './Review.module.css'
import anonymous from '../../assets/anonymous.webp'

const Review = ( {name, photo, review} ) => {
    return (
        <div className={styles.review}>
            <div className={styles.reviwer}>
                {photo ? (
                    <img className={styles.reviewerImg} src={anonymous} alt="reviewer"/>
                ) : (
                    <img className={styles.reviewerImg} src={photo} alt="reviewer"/>
                )}
                <p className={styles.reviewerName}>{name}</p>
            </div>
            <p className={styles.reviewTxt}>{review}</p>
        </div>
    )
}

export default Review;