import React, { useEffect, useState } from "react";
import RecommendedCard from "../../UI/recommendCard/RecommendedCard";
import styles from './Recommended.module.css'
import { discoverApi } from "../../api";

const Recommended = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDataa = async () => {
        try {
            const response = await discoverApi.getRecommendedTours();
            setRecommendations(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataa();
    }, []);

    return (
        <div className={styles.recommended}>
            <p className={styles.title}>Recommended</p>
            <div className={styles.recommendations}>
                {loading ? (
                    <p>Loading...</p>
                ) : recommendations.length > 0 ? (
                    recommendations.map((tour) => (
                        <RecommendedCard
                            key={tour.id}
                            card={{
                                id: tour.id,
                                img: tour.thumbnail,
                                title: tour.name
                            }}
                        />
                    ))
                ) : (
                    <p>No recommended tours available</p>
                )}
            </div>
        </div>
    );
};

export default Recommended;
