import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tourDetailsApi } from "../../api";
import styles from './TourDetails.module.css'
import vector from '../../assets/Vector.svg'

const TourDetails = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await tourDetailsApi.getTourDetailsById(id);
            setTour(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!tour) {
        return <p>No tour details available</p>;
    }

    return (
        <div className={styles.details}>
            <img className={styles.detailsImg} src={tour.thumbnail} alt="tour photo"></img>
            <div className={styles.detailsInfo}>
                <p className={styles.title}>{tour.name}</p>
                <p className={styles.location}><span className={styles.vector}><img src={vector}></img></span>{tour.location}</p>
                <p className={styles.descriptionTitle}>Description</p>
                <p className={styles.description}>{tour.description}</p>
                <p className={styles.reviewsTitle}>Reviews</p>
                {tour.reviews.map((review) => (
                    <>
                        <p className={styles.reviewerName}>{review.reviewer_name}</p>
                        <img className={styles.reviewerImg} src={review.reviewer_photo} alt="tour detail location icon"/>
                        <p className={styles.reviewTxt}>{review.review_text}</p>

                    </>
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.bookBtn}>Book now</button>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;
