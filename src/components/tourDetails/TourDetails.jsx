import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { tourDetailsApi } from "../../api";
import styles from './TourDetails.module.css';
import vector from '../../assets/Vector.svg';

const TourDetails = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            const response = await tourDetailsApi.getTourDetailsById(id);
            setTour(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [id, fetchData]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!tour) {
        return <p>No tour details available</p>;
    }

    return (
        <div className={styles.details}>
            <img className={styles.detailsImg} src={tour.thumbnail} alt="tour img" />
            <div className={styles.detailsInfo}>
                <p className={styles.title}>{tour.name}</p>
                <p className={styles.location}>
                    <span className={styles.vector}>
                        <img src={vector} alt="location icon" />
                    </span>
                    {tour.location}
                </p>
                <p className={styles.descriptionTitle}>Description</p>
                <p className={styles.description}>{tour.description}</p>
                <p className={styles.reviewsTitle}>Reviews</p>
                {tour.reviews.map((review, index) => (
                    <div key={index}>
                        <p className={styles.reviewerName}>{review.reviewer_name}</p>
                        <img className={styles.reviewerImg} src={review.reviewer_photo} alt="reviewer" />
                        <p className={styles.reviewTxt}>{review.review_text}</p>
                    </div>
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.bookBtn}>Book now</button>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;
