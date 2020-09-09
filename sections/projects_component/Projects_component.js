import React, {useState} from "react";
import styles from './projects.module.css';
import {Item_topic} from "../../components/item_topic_component/Item_topic_component";
import {Item_project} from "../../components/item_project_component/Item_project_component";
import {Item_btn} from "../../components/item_btn_component/Item_btn_component";
import projectsSection from "../../localstore/projectsSection_store";

import project1 from '../../assets/projects/project1.0.png';
import project1new from '../../assets/projects/project1.1.png';
import project2 from '../../assets/projects/project2.0.png';
import project2new from '../../assets/projects/project2.1.png';
import project3 from '../../assets/projects/project3.0.png';
import project3new from '../../assets/projects/project3.1.png';
import project4 from '../../assets/projects/project4.0.png';
import project4new from '../../assets/projects/project4.1.png';


import {Slider} from "../../components/slider_component/Slider_component";



let array = [project1,project2,project3,project4];
let arrayChanges = [project1new,project2new,project3new,project4new];


const Projects = (props) => {

    const [status, setStatus] = useState (false);
    const getAllservices = () => {
      setStatus(!status);
    };

    const [index, setIndex] = useState (0);
    const imageChanger = (index) => {
        setIndex(index);
    };


    if(props.lang === 'ru'){
        const items = projectsSection.ru.discription.map((item) => {
            return(
                <div className={styles.item_info}
                     style={{ backgroundImage: `url(${array[projectsSection.ru.discription.indexOf(item)]})`}}
                     onClick = { () => {imageChanger (projectsSection.ru.discription.indexOf(item))}}>
                    <Item_project
                        key = {projectsSection.ru.discription.indexOf(item)}
                        title = {item.title}
                        discription = {item.discription}
                        price = {item.price}
                        itemNumber = {projectsSection.ru.discription.indexOf(item)}
                        index = {index}/>
                </div>
            )
        });
        return (
            <div className={(status === true) ? (styles.projects_active) : (styles.projects)} id='последние проекты'>
                <Item_btn title = {(status === true) ? 'скрыть' : 'посмотреть все услуги'} clicked = {getAllservices}/>
                <div className={styles.topic}>
                    <Item_topic title = {projectsSection.ru.heading[0]} discr = {projectsSection.ru.heading[1]}/>
                </div>

                <div>

                    <div  className={styles.slider}>
                        <Slider
                            imgLeft = {array[index]}
                            imgRight = {arrayChanges[index]}/>
                    </div>

                </div>
                <div className={styles.blocks_items}>
                    <div className={styles.block}>
                        {items}
                    </div>

                </div>
            </div>
        );
    }else if(props.lang === 'en') {
        const items = projectsSection.en.discription.map((item) => {
            return (
                <div className={styles.item_info}
                     style={{backgroundImage: `url(${array[projectsSection.en.discription.indexOf(item)]})`}}
                     onClick={() => {
                         imageChanger(projectsSection.en.discription.indexOf(item))
                     }}>
                    <Item_project
                        key={projectsSection.en.discription.indexOf(item)}
                        title={item.title}
                        discription={item.discription}
                        price = {item.price}
                        itemNumber={projectsSection.en.discription.indexOf(item)}
                        index={index}/>
                </div>
            )
        });
        return (
            <div className={(status === true) ? (styles.projects_active) : (styles.projects)} id='last projects'>
                <Item_btn title={(status === true) ? 'hide' : 'all services'} clicked={getAllservices}/>
                <Item_topic title={projectsSection.en.heading[0]} discr={projectsSection.en.heading[1]}
                />
                <div>

                    <div  className={styles.slider}>
                        <Slider
                            imgLeft = {array[index]}
                            imgRight = {arrayChanges[index]}/>
                    </div>

                </div>
                <div className={styles.blocks_items}>
                    <div className={styles.block}>
                        {items}
                    </div>

                </div>
            </div>
        );
    }else if(props.lang === 'heb') {
        const items = projectsSection.heb.discription.map((item) => {
            return (
                <div className={styles.item_info}
                     style={{backgroundImage: `url(${array[projectsSection.heb.discription.indexOf(item)]})`}}
                     onClick={() => {
                         imageChanger(projectsSection.heb.discription.indexOf(item))
                     }}>
                    <Item_project
                        key={projectsSection.heb.discription.indexOf(item)}
                        title={item.title}
                        discription={item.discription}
                        price = {item.price}
                        itemNumber={projectsSection.heb.discription.indexOf(item)}
                        index={index}/>
                </div>
            )
        });
        return (
            <div className={(status === true) ? (styles.projects_active) : (styles.projects)} id='פרויקטים אחרונים'>
                <Item_btn title={(status === true) ? 'להתחבא' : 'כל השירותים'} clicked={getAllservices}/>
                <Item_topic title={projectsSection.heb.heading[0]} discr={projectsSection.heb.heading[1]}
                />
                <div>

                    <div  className={styles.slider}>
                        <Slider
                            imgLeft = {array[index]}
                            imgRight = {arrayChanges[index]}/>
                    </div>

                </div>
                <div className={styles.blocks_items}>
                    <div className={styles.block}>
                        {items}
                    </div>

                </div>
            </div>
        );
    }
};

export {Projects};
