import React, {useState} from 'react';
import styles from './work_stages.module.css';
import {Item_topic} from "../../components/item_topic_component/Item_topic_component";
import {Item_list_element} from "../../components/item_list_element_component/Item_list_element_component";

import stagesSection from "../../localstore/stagesSection_store";
import img1 from '../../assets/icons/1.png';
import img2 from '../../assets/icons/2.png';
import img3 from '../../assets/icons/3.png';
import img4 from '../../assets/icons/4.png';
import img5 from '../../assets/icons/5.png';
import img6 from '../../assets/icons/6.png';
import img7 from '../../assets/icons/7.png';
import img8 from '../../assets/icons/8.png';
import img11 from '../../assets/icons/11.png';
import img33 from '../../assets/icons/33.png';
import img44 from '../../assets/icons/44.png';
import img55 from '../../assets/icons/55.png';

let array_img = [img1,img2,img3,img4,img5,img6,img7,img8];
let array_img2 = [img11,img2,img33,img44,img8,img7,img6,img55];

const WorkStages= (props) => {

    const [itemNumber, setItemNumber] = useState(0);

    const getInfoFromItem = (index) => {
        setItemNumber(index);
        console.log(index);
    };

    if(props.lang === 'ru'){
        const itemsRegular = stagesSection.ru.stages.filter((item,index) => index <= 3 ).map((item,index) => {
            return(
                <Item_list_element groupName='regular'
                                   clicked = {() => {getInfoFromItem(index)}}
                                   key = {index}
                                   title = {item.h3}
                                   img = {array_img[index]}
                                   itemNumber = {itemNumber}
                                   index = {index}/>
            )
        });
        const itemsRevers = stagesSection.ru.stages.filter((item,index) => index > 3 ).map((item,index) => {
            return(
                <Item_list_element groupName='regular'
                                   clicked = {() => {getInfoFromItem(stagesSection.ru.stages.indexOf(item))}}
                                   key = {index}
                                   title = {item.h3}
                                   img = {array_img[stagesSection.ru.stages.indexOf(item)]}
                                   itemNumber = {itemNumber}
                                   index = {stagesSection.ru.stages.indexOf(item)}/>
            )
        });
        return (
            <div className={styles.stages} id='этапы работы'>
                <Item_topic title = {stagesSection.ru.heading[0]} discr = {stagesSection.ru.heading[1]}/>
                <div className={styles.stages_block}>
                    {itemsRegular}
                </div>

                <div className={styles.txt_block}>
                    <h4>{stagesSection.ru.stages[itemNumber].h4}</h4>
                </div>

                <div className={styles.stages_block}>
                        {itemsRevers}
                </div>
            </div>
        );
    }else if(props.lang === 'en'){
        const itemsRegular = stagesSection.en.stages.filter((item,index) => index < 4 ).map((item,index) => {
            return(
                <Item_list_element groupName='regular'
                                   clicked = {() => {getInfoFromItem(index)}}
                                   key = {index}
                                   title = {item.h3}
                                   img = {array_img[index]}
                                   itemNumber = {itemNumber}
                                   index = {index}/>
            )
        });
        const itemsRevers = stagesSection.en.stages.filter((item,index) => index > 3 ).map((item,index) => {
            return(
                <Item_list_element groupName='regular'
                                   clicked = {() => {getInfoFromItem(stagesSection.en.stages.indexOf(item))}}
                                   key = {index}
                                   title = {item.h3}
                                   img = {array_img[stagesSection.en.stages.indexOf(item)]}
                                   itemNumber = {itemNumber}
                                   index = {stagesSection.en.stages.indexOf(item)}/>
            )
        });
        return (
            <div className={styles.stages} id='work stages'>
                <Item_topic title = {stagesSection.en.heading[0]} discr = {stagesSection.en.heading[1]}/>
                <div className={styles.stages_block}>
                    {itemsRegular}
                </div>

                <div className={styles.txt_block}>
                    <h4>{stagesSection.en.stages[itemNumber].h4}</h4>
                </div>

                <div className={styles.stages_block}>
                        {itemsRevers}
                </div>
            </div>
        );
    }if(props.lang === 'heb'){
        const itemsRegular = stagesSection.heb.stages.filter((item,index) => index < 4 ).map((item,index) => {
            return(
                <Item_list_element groupName='revers'
                                   clicked = {() => {getInfoFromItem(stagesSection.heb.stages.indexOf(item))}}
                                   key = {index}
                                   title = {item.h3}
                                   img = {array_img2[index]}
                                   itemNumber = {itemNumber}
                                   index = {stagesSection.heb.stages.indexOf(item)}/>
            )
        });
        const itemsRevers = stagesSection.heb.stages.filter((item,index) => index > 3 ).map((item,index) => {
            return(
                <Item_list_element groupName='revers'
                                   clicked = {() => {getInfoFromItem(stagesSection.heb.stages.indexOf(item))}}
                                   key = {index}
                                   title = {item.h3}
                                   img = {array_img2[array_img.length - index-1]}
                                   itemNumber = {itemNumber}
                                   index = {stagesSection.heb.stages.indexOf(item)}/>
            )
        });
        return (
            <div className={styles.stages} id='שלבי עבודה'>
                <Item_topic title = {stagesSection.heb.heading[0]} discr = {stagesSection.heb.heading[1]}/>
                <div className={styles.stages_block_reverse}>
                    {itemsRegular}
                </div>

                <div className={styles.txt_block}>
                    <h4>{stagesSection.heb.stages[itemNumber].h4}</h4>
                </div>

                <div className={styles.stages_block_reverse}>
                    {itemsRevers}
                </div>
            </div>
        );
    }
};

export {WorkStages};
