import React from 'react';
import styles from './item_project.module.css';


const Item_project = (props) => {
    return (
            <div className={(props.index === props.itemNumber)&&(props.index!==undefined)?
                (styles.item_info_block_active):(styles.item_info_block)}>
                <h3 className={styles.bold}>{props.title}</h3>
                <hr/>
                <p>{props.discription}</p>
                <p>{props.price}</p>
            </div>
    );
};

export {Item_project};
