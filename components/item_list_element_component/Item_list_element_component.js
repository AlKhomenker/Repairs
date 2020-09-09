import React, {useState} from 'react';
import styles from './item_list_element.module.css';


const Item_list_element = (props) => {

    if(props.groupName === 'regular'){
        return (
            <div className={(props.index === props.itemNumber) ? (styles.item_active) : (styles.item_list_element_regular)}
                 onClick={props.clicked}>
                <img src={props.img} alt='item_list_element'
                     className={(props.index === props.itemNumber)? (styles.img_active) : (styles.img_list_element)}/>
                <h6 className={styles.h6_txt}>{props.title}</h6>
            </div>
        );
    }if(props.groupName === 'revers'){
        return (
            <div className={(props.index === props.itemNumber) ? (styles.item_active_reverse) : (styles.item_list_element_revers)}
                 onClick={props.clicked}>
                <img src={props.img} alt='item_list_element'
                     className={(props.index === props.itemNumber)? (styles.img_active_reverse) : (styles.img_list_element_revers)}/>
                <h6 className={styles.h6_txt}>{props.title}</h6>
            </div>
        );
    }

};

export {Item_list_element};
