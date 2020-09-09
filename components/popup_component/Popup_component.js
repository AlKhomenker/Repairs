import React from 'react';
import styles from './popup.module.css';
import popupStore from "../../localstore/popup_store";
import arraySkills from "../../localstore/arraySkills";

const Popup = (props) => {

    const images = arraySkills[props.index].map((item) => {
       return (
           <img src={item} alt='img'
                className={(props.itemNumber === arraySkills[props.index].indexOf(item)) ? styles.image_active : styles.image}/>
       )
    });

    if(props.lang === 'ru'){
        return (
            <div className={styles.popup}>
                <div className={styles.images}>
                    {images}
                </div>
                <div className={styles.txt}>
                    <h5>{props.title}</h5>
                    <p>{popupStore.ru[props.index][props.itemNumber]}</p>
                </div>
            </div>
        );
    }else  if(props.lang === 'en'){
        return (
            <div className={styles.popup}>
                <div className={styles.images}>
                    {images}
                </div>
                <div className={styles.txt}>
                    <h5>{props.title}</h5>
                    <p>{popupStore.en[props.index][props.itemNumber]}</p>
                </div>
            </div>
        );
    }else  if(props.lang === 'heb'){
        return (
            <div className={styles.popup}>
                <div className={styles.images}>
                    {images}
                </div>
                <div className={styles.txt}>
                    <h5>{props.title}</h5>
                    <p className={styles.txt_p}>{popupStore.heb[props.index][props.itemNumber]}</p>
                </div>
            </div>
        );
    }

};

export {Popup};
