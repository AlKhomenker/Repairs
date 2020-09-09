import React from 'react';
import styles from './item_topic.module.css';


const Item_topic = (props) => {
    return (
        <div className={styles.item_topic}>
            <h2>{props.title}</h2>
            <h4>{props.discr}</h4>
            <h4>{props.comment}</h4>
        </div>
    );
};

export {Item_topic};
