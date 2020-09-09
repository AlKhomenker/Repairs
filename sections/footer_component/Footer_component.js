import React, {useState} from 'react';
import styles from './footer.module.css';
import {Item_btn} from "../../components/item_btn_component/Item_btn_component";
import footerSection from "../../localstore/footer_store";
import contactsSection from "../../localstore/contactSection_store";

let arraySocialMedia = ['fa fa-facebook','fa fa-telegram','fa fa-whatsapp','fa fa-instagram'];
let arrayIcons = ['fa fa-phone','fa fa-at','fa fa-home'];

const Footer = (props) => {
    const [status, setStatus] = useState (false);
    const showAll = () => {
        setStatus(!status);
    };
    if(props.lang === 'ru'){
        const info = arrayIcons.map((item,index) => {
            return(
                <div>
                <span className={styles.icons}>
                    <i className={item }></i>
                </span>
                    <div>
                        <p>{footerSection.ru.contact[index][0]}</p>
                        <p>{footerSection.ru.contact[index][1]}</p>
                    </div>
                </div>
            )
        });
        const socislMedia = arraySocialMedia.map((item,index) => {
            return(
                <a href={contactsSection.links[index]} target='_blank' className={styles.icons_socislMedia}>
                    <i className={item}/></a>
            )
        });
        return (
            <div className={(status === true) ? (styles.footer_block_active) : (styles.footer_block)}>
                <Item_btn className={styles.btn} title = {(status === true) ? 'скрыть' : 'посмотреть все отзовы'} clicked = {showAll}
                />
                <div className={styles.footer}>
                    <div className={styles.block}>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.ru.heading[0]}</h3>
                            <p className={styles.left}>{footerSection.ru.discription[0]}</p>
                            <h3 className={styles.left} style={{fontWeight :'bold', color:'#C6A47E'}}>
                                {footerSection.ru.heading[4]}</h3>
                        </div>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.ru.heading[1]}</h3>
                            <p className={styles.left}>{footerSection.ru.discription[1]}</p>
                        </div>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.ru.heading[3]}</h3>

                            {info}

                        </div>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.ru.heading[2]}</h3>

                            {socislMedia}

                            <h3 className={styles.bold}>{footerSection.ru.heading[5]}</h3>
                            <a href={contactsSection.links[4]}
                               target='_blank' className={styles.icons_socislMedia}>
                                <i className="fa fa-youtube-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.div}>
                            <a href='https://www.linkedin.com/in/alina-khomenker-0a2532137/' target='_blank'
                               className={styles.icon}>
                                <i className="fa fa-linkedin"></i></a>
                            <a href='https://www.behance.net/alinakhomenker' target='_blank'
                               className={styles.icon}>
                                <i className="fa fa-behance"></i></a>
                            <div>
                                <span>SPA developed by Khomenker Alina</span>
                            </div>
                        </div>
                        <div className={styles.div}>all rights reserved 2020 <i className="fa fa-copyright"></i></div>
                        <div className={styles.div}>we maintain a privacy policy</div>
                    </div>
                </div>
            </div>
        );
    }else  if(props.lang === 'en'){
        const info = arrayIcons.map((item,index) => {
            return(
                <div>
                <span className={styles.icons}>
                    <i className={item}></i>
                </span>
                    <div>
                        <p>{footerSection.en.contact[index][0]}</p>
                        <p>{footerSection.en.contact[index][1]}</p>
                    </div>
                </div>
            )
        });
        const socislMedia = arraySocialMedia.map((item,index) => {
            return(
                <a href={contactsSection.links[index]} target='_blank' className={styles.icons_socislMedia}>
                    <i className={item}/></a>
            )
        });
        return (
            <div className={(status === true) ? (styles.footer_block_active) : (styles.footer_block)}>
                <Item_btn className={styles.btn} title = {(status === true) ? 'hide' : 'show all'} clicked = {showAll}
                />
                <div className={styles.footer}>
                    <div className={styles.block}>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.en.heading[0]}</h3>
                            <p className={styles.left}>{footerSection.en.discription[0]}</p>
                            <h3 className={styles.left} style={{fontWeight :'bold', color:'#C6A47E'}}>
                                {footerSection.en.heading[4]}</h3>
                        </div>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.en.heading[1]}</h3>
                            <p className={styles.left}>{footerSection.en.discription[1]}</p>
                        </div>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.en.heading[3]}</h3>

                            {info}

                        </div>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.en.heading[2]}</h3>

                            {socislMedia}

                            <h3 className={styles.bold}>{footerSection.en.heading[5]}</h3>
                            <a href={contactsSection.links[4]}
                               target='_blank' className={styles.icons_socislMedia}>
                                <i className="fa fa-youtube-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.div}>
                            <a href='https://www.linkedin.com/in/alina-khomenker-0a2532137/' target='_blank'
                               className={styles.icon}>
                                <i className="fa fa-linkedin"></i></a>
                            <a href='https://www.behance.net/alinakhomenker' target='_blank'
                               className={styles.icon}>
                                <i className="fa fa-behance"></i></a>
                            <div>
                                <span>SPA developed by Khomenker Alina</span>
                            </div>
                        </div>
                        <div className={styles.div}>all rights reserved 2020 <i className="fa fa-copyright"></i></div>
                        <div className={styles.div}>we maintain a privacy policy</div>
                    </div>
                </div>
            </div>
        );
    }else  if(props.lang === 'heb'){
        const info = arrayIcons.map((item,index) => {
            return(
                <div>
                <span className={styles.icons}>
                    <i className={item }></i>
                </span>
                    <div>
                        <p>{footerSection.heb.contact[index][0]}</p>
                        <p>{footerSection.heb.contact[index][1]}</p>
                    </div>
                </div>
            )
        });
        const socislMedia = arraySocialMedia.map((item,index) => {
            return(
                <a href={contactsSection.links[index]} target='_blank' className={styles.icons_socislMedia}>
                    <i className={item}/></a>
            )
        });
        return (
            <div className={(status === true) ? (styles.footer_block_active) : (styles.footer_block)}>
                <Item_btn className={styles.btn} title = {(status === true) ? 'להתחבא' : 'ראה את כל הביקורות'} clicked = {showAll}
                />
                <div className={styles.footer}>
                    <div className={styles.block}>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.heb.heading[0]}</h3>
                            <p >{footerSection.heb.discription[0]}</p>
                            <h3 style={{fontWeight :'bold', color:'#C6A47E'}}>
                                {footerSection.heb.heading[4]}</h3>
                        </div>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.heb.heading[1]}</h3>
                            <p className={styles.right}>{footerSection.heb.discription[1]}</p>
                        </div>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.heb.heading[3]}</h3>

                            {info}

                        </div>
                        <div className={styles.txt}>
                            <h3 className={styles.bold}>{footerSection.heb.heading[2]}</h3>

                            {socislMedia}

                            <h3 className={styles.bold}>{footerSection.heb.heading[5]}</h3>
                            <a href={contactsSection.links[4]}
                               target='_blank' className={styles.icons_socislMedia}>
                                <i className="fa fa-youtube-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.div}>
                            <a href='https://www.linkedin.com/in/alina-khomenker-0a2532137/' target='_blank'
                               className={styles.icon}>
                                <i className="fa fa-linkedin"></i></a>
                            <a href='https://www.behance.net/alinakhomenker' target='_blank'
                               className={styles.icon}>
                                <i className="fa fa-behance"></i></a>
                            <div>
                                <span>SPA developed by Khomenker Alina</span>
                            </div>
                        </div>
                        <div className={styles.div}>all rights reserved 2020 <i className="fa fa-copyright"></i></div>
                        <div className={styles.div}>we maintain a privacy policy</div>
                    </div>
                </div>
            </div>
        );
    }
;}

export {Footer};
