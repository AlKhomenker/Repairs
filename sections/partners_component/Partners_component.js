import React from 'react';
import styles from './partners.module.css';
import {Item_topic} from "../../components/item_topic_component/Item_topic_component";
import {Item_info} from "../../components/item_info_component/Item_info_component";
import partnersSection from "../../localstore/partnersSection_store";
import {Item_partner} from "../../components/item_partner_component/Item_partner_component";

const Partners= (props) => {
    if(props.lang === 'ru'){
        const items = partnersSection.ru.discription.map((item,index) => {
            return(
                    <div className={styles.item_info}>
                        <Item_partner
                            key = {partnersSection.ru.discription.indexOf(item)}
                            title = {item.title}
                            discription = {item.discription}
                            index = {index}
                            link = {item.link}/>
                    </div>
            )
        });
         return(
             <div className={styles.partners} id='партнеры'>
                 <Item_topic title = {partnersSection.ru.heading[0]} discr = {partnersSection.ru.heading[1]}/>
                 <div className={styles.block}>
                     {items}
                 </div>
             </div>
         )
    }else  if(props.lang === 'en'){
        const items = partnersSection.en.discription.map((item,index) => {
            return(
                <div className={styles.item_info}>
                    <Item_partner
                        key = {partnersSection.en.discription.indexOf(item)}
                        title = {item.title}
                        discription = {item.discription}
                        index = {index}
                        link = {item.link}/>
                </div>
            )
        });
        return(
            <div className={styles.partners} id='partners'>
                <Item_topic title = {partnersSection.en.heading[0]} discr = {partnersSection.en.heading[1]}/>
                <div className={styles.block}>
                    {items}
                </div>
            </div>
        )
    } if(props.lang === 'heb'){
        const items = partnersSection.heb.discription.map((item,index) => {
            return(
                <div className={styles.item_info}>
                    <Item_partner
                        key = {partnersSection.heb.discription.indexOf(item)}
                        title = {item.title}
                        discription = {item.discription}
                        index = {index}
                        link = {item.link}/>
                </div>
            )
        });
        return(
            <div className={styles.partners} id='שותפים'>
                <Item_topic title = {partnersSection.heb.heading[0]} discr = {partnersSection.heb.heading[1]}/>
                <div className={styles.block}>
                    {items}
                </div>
            </div>
        )
    }
};

export {Partners};
