import React from 'react';
import styles from './item_review.module.css';

const Item_review = (props) => {
        return (
            <div className={styles.item_review}>
                <iframe src={props.link} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
                <div className={styles.txt}>
                    <h3 className={styles.bold}>{props.title}</h3>
                    <hr/>
                    <p>{props.discription}</p>
                </div>
            </div>
        );
};

export {Item_review};
