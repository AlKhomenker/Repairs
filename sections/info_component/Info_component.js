import React, {useState} from 'react';
import styles from './info.module.css';
import {Item_info} from "../../components/item_info_component/Item_info_component";
import infoSection from "../../localstore/infoSection_store";
import skillsSection from "../../localstore/skiilsSection_store";

import arraySkills from "../../localstore/arraySkills";

import img_comand from '../../assets/img2.png';

import img1 from '../../assets/skills/1.png';
import img2 from '../../assets/skills/2.png';
import img3 from '../../assets/skills/3.png';
import img4 from '../../assets/skills/4.png';
import img5 from '../../assets/skills/5.png';
import img6 from '../../assets/skills/6.png';

import {Popup} from "../../components/popup_component/Popup_component";

let array = [img1,img2,img3,img4,img5,img6];

const Info = (props) => {

    const [status,setStatus] = useState(false);
    const [index,setIndex] = useState(0);
    const [item,setItem] = useState(0);

    const dots = arraySkills[index].map((element) =>{
        return(
                <span className={(item === arraySkills[index].indexOf(element)) ? styles.dot_active : styles.dot}
                      onClick={()=>{clickOnDot(arraySkills[index].indexOf(element))}}/>
        )
    });

    const openSlaider = (i) => {
        setItem(0);
        setStatus(true);
        setIndex(i);
    };

    const closeSlaider = () => {
        setStatus(false);
    };

    const clickOnDot = (index) => {
        setItem(index);
    };

    const previousSlaider = () => {
        if(item > 0){
            setItem(item-1);
        }else {
            setItem(arraySkills[index].length-1);
        }
    };

    const nextSlaider = () => {
        if(item < arraySkills[index].length-1){
            setItem(item+1);
        }else {
            setItem(0);
        }
    };

    if(props.lang === 'ru'){

        const list = infoSection.ru.greeting[1].map((item) =>{
            return(
                <p>{item}</p>
            )
        });

        const items = skillsSection.ru.map((item) =>{
            return(
                <div className={styles.item_info} style={{ backgroundImage: `url(${array[skillsSection.ru.indexOf(item)]})`}}
                     onClick = {() => {openSlaider(skillsSection.ru.indexOf(item))}}>
                    <Item_info
                        key = {skillsSection.ru.indexOf(item)}
                        title = {item.title}
                        discription = {item.discription}/>
                </div>
            )
        });
        return (
            <div className={styles.info} id='о компании'>
                <div className={styles.info_block}>
                    <div className={styles.txt_info}>
                        <h2>{infoSection.ru.greeting[0]}</h2>
                        {list}
                    </div>
                    <div >
                        <img src={img_comand} alt='img_company' className={styles.img_info}/>
                    </div>
                </div>

                <div style={(status === true) ? {top: "0"} : {top: "-750px"}} className={styles.popup}>
                    <div className={styles.times}><i className="fa fa-times" onClick={closeSlaider}/></div>

                        <Popup
                            title = {skillsSection.ru[index].title}
                            index = {index}
                            itemNumber = {item}
                            lang = 'ru'/>

                    <div className={styles.arrows}>
                        <i className="fa fa-arrow-left" onClick={previousSlaider}/>
                        <i className="fa fa-arrow-right" onClick={nextSlaider}/>
                    </div>

                    <div className={styles.dots_block}>
                      {dots}
                    </div>
                </div>


                <div className={styles.info_block} id='услуги'>
                    <div className={styles.info_block_items}>
                        {items}
                    </div>
                </div>
            </div>
        );
    }else  if(props.lang === 'en'){
        const items = skillsSection.en.map((item) =>{
            return(
                <div className={styles.item_info} style={{ backgroundImage: `url(${array[skillsSection.en.indexOf(item)]})`}}
                     onClick = {() => {openSlaider(skillsSection.en.indexOf(item))}}>
                    <Item_info
                        key = {skillsSection.en.indexOf(item)}
                        title = {item.title}
                        discription = {item.discription}/>
                </div>
            )
        });
        return (
            <div className={styles.info} id='about us'>
                <div className={styles.info_block}>
                    <div className={styles.txt_info}>
                        <h2>{infoSection.en.greeting[0]}</h2>
                        <p>{infoSection.en.greeting[1]}</p>
                    </div>
                    <div >
                        <img src={img_comand} alt='img_company' className={styles.img_info}/>
                    </div>
                </div>

                <div style={(status === true) ? {top: "0"} : {top: "-750px"}} className={styles.popup}>
                    <div className={styles.times}><i className="fa fa-times" onClick={closeSlaider}/></div>

                    <Popup
                        title = {skillsSection.en[index].title}
                        index = {index}
                        itemNumber = {item}
                        lang = 'en'/>

                    <div className={styles.arrows}>
                        <i className="fa fa-arrow-left" onClick={previousSlaider}/>
                        <i className="fa fa-arrow-right" onClick={nextSlaider}/>
                    </div>

                    <div className={styles.dots_block}>
                        {dots}
                    </div>
                </div>

                <div className={styles.info_block} id='our services'>
                    <div className={styles.info_block_items}>
                        {items}
                    </div>
                </div>
            </div>
        );
    }else  if(props.lang === 'heb'){
        const items = skillsSection.heb.map((item) =>{
            return(
                <div className={styles.item_info} style={{ backgroundImage: `url(${array[skillsSection.heb.indexOf(item)]})`}}
                     onClick = {() => {openSlaider(skillsSection.heb.indexOf(item))}}>
                    <Item_info
                        key = {skillsSection.heb.indexOf(item)}
                        title = {item.title}
                        discription = {item.discription}/>
                </div>
            )
        });
        return (
            <div className={styles.info} id='עלינו'>
                <div className={styles.info_block}>
                    <div >
                        <img src={img_comand} alt='ing_company' className={styles.img_info}/>
                    </div>
                    <div className={styles.txt_info_revers}>
                        <h2>{infoSection.heb.greeting[0]}</h2>
                        <p>{infoSection.heb.greeting[1]}</p>
                    </div>
                </div>

                <div style={(status === true) ? {top: "0"} : {top: "-750px"}} className={styles.popup}>
                    <div className={styles.times}><i className="fa fa-times" onClick={closeSlaider}/></div>

                    <Popup
                        title = {skillsSection.heb[index].title}
                        index = {index}
                        itemNumber = {item}
                        lang = 'heb'/>

                    <div className={styles.arrows}>
                        <i className="fa fa-arrow-left" onClick={previousSlaider}/>
                        <i className="fa fa-arrow-right" onClick={nextSlaider}/>
                    </div>

                    <div className={styles.dots_block}>
                        {dots}
                    </div>
                </div>

                <div className={styles.info_block}id='השירות שלנו'>
                    <div className={styles.info_block_items}>
                        {items}
                    </div>
                </div>
            </div>
        );
    }

};

export {Info};
