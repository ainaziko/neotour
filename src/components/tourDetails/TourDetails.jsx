import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tourDetailsApi } from "../../api";
import BookingForm from "../form/BookingForm";
import styles from './TourDetails.module.css';
import vector from '../../assets/Vector.svg';
import goBackArrow from '../../assets/goBackArrow.svg'
import Review from "../review/Review";
import Modal from 'react-modal';

const TourDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleBookNowClick = () => {
        setIsFormVisible(true);
    }

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
            <button className={styles.goBackBtn} onClick={() => navigate(-1)}><img className={styles.goBackArrow} src={goBackArrow}/>Go back</button> 
            
            <img className={styles.detailsImg} src={tour.thumbnail} alt="tour img" />
            <div className={styles.info}>
                <div className={styles.detailsInfo}>
                    <p className={styles.title}>{tour.name}</p>
                    <p className={styles.location}>
                        <span className={styles.vector}>
                            <img src={vector} alt="location icon" />
                        </span>
                        {tour.location}
                    </p>
                    <p className={styles.subTitle}>Description</p>
                    <p className={styles.description}>{tour.description}</p>
                    {(!tour.reviews || tour.reviews.length === 0) ? (
                        <p className={styles.comment}>No reviews yet</p>
                    ) : (
                        <>
                            <p className={styles.subTitle}>Reviews</p>
                            {tour.reviews.map((review, index) => (
                                <div key={index}>
                                    <Review name={review.reviewer_name} photo={review.reviewer_photo} review={review.review_text} />
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.bookBtn} onClick={handleBookNowClick}>
                        Book now
                    </button>
                </div>
            </div>
            <Modal
                isOpen={isFormVisible}
                onRequestClose={() => setIsFormVisible(false)}
                contentLabel="Booking Form"
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <BookingForm setIsFormVisible={setIsFormVisible} tourId={id}/>
            </Modal>
        </div>
    );
};

export default TourDetails;
