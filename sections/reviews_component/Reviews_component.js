import React from 'react';
import styles from './reviews.module.css';
import {Item_topic} from "../../components/item_topic_component/Item_topic_component";
import {Item_review} from "../../components/item_review_component/Item_review_component";
import reviewsSection from "../../localstore/reviewsSection_store";

let arrayVidio = [
    'https://www.youtube.com/embed/H-YqFhl7rlg',
    'https://www.youtube.com/embed/unxGi3kF0jg',
    'https://www.youtube.com/embed/tQjp0-b1Bbk',
    'https://www.youtube.com/embed/gvYhFtj_NG4',
    'https://www.youtube.com/embed/H-YqFhl7rlg',
    'https://www.youtube.com/embed/unxGi3kF0jg'];

const Reviews= (props) => {
    if(props.lang === 'ru') {
        const items = reviewsSection.ru.reviews.map((item, index) => {
            return (
                <div className={styles.item_info}>
                    <Item_review
                        key = {index}
                        title = {item.title}
                        discription = {item.discription}
                        link = {arrayVidio[index]}/>
                </div>
            )
        });
        return (
            <div className={styles.reviews} id='отзывы'>
                <Item_topic title = {reviewsSection.ru.heading[0]} discr = {reviewsSection.ru.heading[1]}/>
                <div className={styles.block}>
                    {items}
                </div>
            </div>
        );
    }else  if(props.lang === 'en') {
        const items = reviewsSection.en.reviews.map((item, index) => {
            return (
                <div className={styles.item_info}>
                    <Item_review
                        key = {index}
                        title = {item.title}
                        discription = {item.discription}
                        link = {arrayVidio[index]}/>
                </div>
            )
        });
        return (
            <div className={styles.reviews} id='reviews'>
                <Item_topic title = {reviewsSection.en.heading[0]} discr = {reviewsSection.en.heading[1]}/>
                <div className={styles.block}>
                    {items}
                </div>
            </div>
        );
    }else  if(props.lang === 'heb') {
        const items = reviewsSection.heb.reviews.map((item, index) => {
            return (
                <div className={styles.item_info}>
                    <Item_review
                        key = {index}
                        title = {item.title}
                        discription = {item.discription}
                        link = {arrayVidio[index]}/>
                </div>
            )
        });
        return (
            <div className={styles.reviews} id='ביקורות'>
                <Item_topic title = {reviewsSection.heb.heading[0]} discr = {reviewsSection.heb.heading[1]}/>
                <div className={styles.block}>
                    {items}
                </div>
            </div>
        );
    }
};

export {Reviews};
