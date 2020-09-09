import React from 'react';
import styles from './item_info.module.css';


const Item_info = (props) => {
    return (
            <div className={(props.index === props.itemNumber) && (props.index !== undefined)?
                (styles.item_info_block_active):(styles.item_info_block)}>
                <h3 className={styles.bold}>{props.title}</h3>
                <hr/>
                <p>{props.discription}</p>
            </div>
    );
};

export {Item_info};
