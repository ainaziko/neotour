import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import styles from './Discover.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from '../../assets/rightArrow.svg'
import leftArrow from '../../assets/leftArrow.svg'
import DiscoverCard from "../../UI/discoverCard/DiscoverCard";
import { discoverApi } from "../../api";
import Categories from "../categories/Categories";

const Discover = () => {

    const [category, setCategory] = useState('popular');
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const slider = React.useRef(null);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    const fetchData = async (category) => {
        try {
            const data = await discoverApi.getTourListByCategoryName(category);
            setTours(Array.isArray(data.data) ? data.data : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(category || 'popular');
    }, [category]);


    return (
        <div className={styles.discover}>
            <p className={styles.title}>Discover</p>

            <Categories category={category} setCategory={setCategory} />
            
            <div className={styles.slideArrowsContainer}>
                <div className={styles.slideArrows}>
                    <button className={styles.sliderBtn} onClick={() => slider?.current?.slickPrev()}><img src={leftArrow} alt="prev btn" /></button>
                    <button className={styles.sliderBtn} onClick={() => slider?.current?.slickNext()}><img src={rightArrow} alt="next btn" /></button>
                </div>
            </div>


            {loading ? (
                <p>Loading...</p>
            ) : (
                tours.length > 0 ? (
                    <Slider ref={slider} {...settings}>
                        {tours.map((card, index) => (
                            <Link key={card.id} to={`/tours/${card.id}`}>
                                <DiscoverCard
                                    key={index}
                                    card={{
                                        id: card.id,
                                        img: card.thumbnail,
                                        title: card.name
                                    }}
                                />
                            </Link>
                        ))}
                    </Slider>
                ) : (
                    <p>No data available</p>
                )
            )}
        </div>
    )
}

export default Discover;