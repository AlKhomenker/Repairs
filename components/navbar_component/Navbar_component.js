import React, {useState} from 'react';
import styles from './navbar.module.css';
import mainStore from '../../localstore/mainSection_store';
import {Item_menu} from "../item_menu_component/Item_menu_component";
import logo from '../../assets/icons/logo.png';

const Navbar = (props) => {

    const [status,setStatus] = useState(false);

    const openMenu = () => {
        setStatus(true);
    };

    const closeMenu = () => {
        setStatus(false);
    };

    if(props.lang === 'ru'){
        const items = mainStore.ru.navbar.map((item) => {
            return(
                <Item_menu
                    key = {mainStore.ru.navbar.indexOf(item)}
                    title = {item}/>
            )
        });
        return (
            <div>
                <div className={styles.burger} onClick={openMenu}><i className="fa fa-bars"></i></div>

                <div className={(status === true) ? styles.hamburger_active : styles.hamburger}>
                    <div className={styles.times}><i className="fa fa-times" onClick={closeMenu}></i></div>
                        <ul className={styles.hamburger_menu}>
                            <li className={styles.hamburger_item}>
                                <img src={logo} alt='logo' className={styles.img_logo}/></li>
                            {items}
                        </ul>
                </div>

                <div className={styles.navBar}>
                    <ul className={styles.ul_NavBar}>
                        <li className={styles.li_NavBar}>
                            <img src={logo} alt='logo' className={styles.img_logo}/></li>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }else if(props.lang === 'en'){
        const items = mainStore.en.navbar.map((item) => {
            return(
                <Item_menu
                    key = {mainStore.en.navbar.indexOf(item)}
                    title = {item}/>
            )
        });
        return (
            <div>
                <div className={styles.burger} onClick={openMenu}><i className="fa fa-bars"></i></div>

                <div className={(status === true) ? styles.hamburger_active : styles.hamburger}>
                    <div className={styles.times}><i className="fa fa-times" onClick={closeMenu}></i></div>
                    <ul className={styles.hamburger_menu}>
                        <li className={styles.hamburger_item}>
                            <img src={logo} alt='logo' className={styles.img_logo}/></li>
                        {items}
                    </ul>
                </div>

                <div className={styles.navBar}>
                    <ul className={styles.ul_NavBar}>
                        <li className={styles.li_NavBar}>
                            <img src={logo} alt='logo' className={styles.img_logo}/></li>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }else if(props.lang === 'heb'){
        const items = mainStore.heb.navbar.reverse().map((item) => {
            return(
                <Item_menu
                    key = {mainStore.heb.navbar.indexOf(item)}
                    title = {item}/>
            )
        });
        return (
            <div>
                <div className={styles.burger} onClick={openMenu}><i className="fa fa-bars"></i></div>

                <div className={(status === true) ? styles.hamburger_active : styles.hamburger}>
                    <div className={styles.times}><i className="fa fa-times" onClick={closeMenu}></i></div>
                    <ul className={styles.hamburger_menu}>
                        <li className={styles.hamburger_item}>
                            <img src={logo} alt='logo' className={styles.img_logo}/></li>
                        {items}
                    </ul>
                </div>

                <div className={styles.navBar}>
                    <ul className={styles.ul_NavBar}>
                        <li className={styles.li_NavBar}>
                            <img src={logo} alt='logo' className={styles.img_logo}/></li>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
};

export {Navbar};
