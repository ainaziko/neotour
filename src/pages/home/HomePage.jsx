import React from "react";
import travellerImg from '../../assets/traveller.png'
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.homeInfo}>
                    <h1 className={styles.titleP1}>Winter </h1>
                    <h1 className={styles.titleP2}>Vocation Trips</h1>
                    <p>Enjoy your winter vacations with warmth</p>
                    <p> and amazing sightseeing on the mountains.</p>
                    <p>Enjoy the best experience with us!</p>
                    <button className={styles.letsGoBtn}>Let's Go! &rarr; </button>
                </div>
                <div className={styles.homeImgContainer}>
                    <img src={travellerImg} alt="travellers img"></img>
                </div>
            </section>
        </>
        
    )
}

export default HomePage;