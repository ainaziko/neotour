import React from "react";
import Slider from "react-slick";
import Categories from "./Categories";
import styles from './Discover.module.css'
import DiscoverCard from "./DiscoverCard";
import image from '../api/mocks/mountains.jpeg'
import rightArrow from '../assets/rightArrow.svg'
import leftArrow from '../assets/leftArrow.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Discover = () => {
    const slider = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };


    return (
        <div className={styles.discover}>
            <p className={styles.title}>Discover</p>
            <Categories/>

            <div className={styles.slideArrowsContainer}>
                <div className={styles.slideArrows}>
                    <button className={styles.sliderBtn} onClick={() => slider?.current?.slickPrev()}><img src={leftArrow} alt="prev btn"/> </button>
                    <button className={styles.sliderBtn} onClick={() => slider?.current?.slickNext()}><img src={rightArrow} alt="next btn" /></button>
                </div>
            </div>
            
            
            <Slider ref={slider} {...settings}>
                <DiscoverCard
                    card={
                        {
                            img: image,
                            title: "Northern Mountain 1"
                        }
                    }
                />
                <DiscoverCard
                    card={
                        {
                            img: image,
                            title: "Northern Mountain 2"
                        }
                    }
                />
                <DiscoverCard
                    card={
                        {
                            img: image,
                            title: "Northern Mountain 3"
                        }
                    }
                />
                <DiscoverCard
                    card={
                        {
                            img: image,
                            title: "Northern Mountain 4"
                        }
                    }
                />
                <DiscoverCard
                    card={
                        {
                            img: image,
                            title: "Northern Mountain 5"
                        }
                    }
                />
            </Slider>
        </div>
    )
}

export default Discover;