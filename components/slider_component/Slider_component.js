import React from 'react';
import styles from './slider.module.css';
import ImageSlider from "react-image-comparison-slider";

const Slider = (props) => {
    return (
        <div className={styles.slider}>
            <ImageSlider
                image1={props.imgRight}
                image2={props.imgLeft}
                sliderColor='#ECE1D1'
                handleColor='#ECE1D1'
                handleBackgroundColor='#C6A47E'
                onSlide={() => {}}
            />
        </div>
    );
};

export {Slider};
