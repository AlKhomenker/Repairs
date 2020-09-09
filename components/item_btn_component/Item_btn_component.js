import React from 'react';
import styles from './item_btn.module.css';


const Item_btn = (props) => {
    return (
            <a className={styles.item_btn}  onClick={props.clicked}>
                <h5>{props.title}</h5>
            </a>
    );
};

export {Item_btn};
