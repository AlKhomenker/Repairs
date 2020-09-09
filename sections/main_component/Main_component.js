import React from 'react';
import styles from './main.module.css';
import {Navbar} from "../../components/navbar_component/Navbar_component";
import mainStore from '../../localstore/mainSection_store';
import logo from '../../assets/icons/logo.png';

const Main = (props) => {
    if(props.lang === 'ru'){
        return (
            <div>
                <Navbar lang = 'ru'/>
                <div className={styles.main} id='главная'>
                    <h1> <img src={logo} alt='logo' className={styles.logo}/></h1>
                    <h2 className={styles.regular}>{mainStore.ru.txt[1]}</h2>
                </div>
            </div>
        );
    }else if(props.lang === 'en'){
        return (
            <div>
                <Navbar lang = 'en'/>
                <div className={styles.main}  id='home'>
                    <h1> <img src={logo} alt='logo' className={styles.logo}/></h1>
                    <h2 className={styles.regular}>{mainStore.en.txt[1]}</h2>
                </div>
            </div>
        );
    }else if(props.lang === 'heb'){
    return (
        <div>
            <Navbar lang = 'heb'/>
            <div className={styles.main}  id='בית'>
                <h1> <img src={logo} alt='logo' className={styles.logo}/></h1>
                <h2 className={styles.regular}>{mainStore.heb.txt[1]}</h2>
            </div>
        </div>
    );
}
};

export {Main};
