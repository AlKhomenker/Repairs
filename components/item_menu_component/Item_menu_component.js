import React ,{useState,useEffect}from 'react';
import styles from './item_menu.module.css';

const Item_menu = (props) => {
    const [anchorTarget, setAnchorTarget] = useState(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(props.title));
    }, [props.title]);

    const scrollToAnchor = (event) =>{
        event.preventDefault();
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
        /*  setTimeout(() => {
              window.scrollTo({top: 1000, behavior: 'smooth'});
          }, 100);*/
    };
    return(
        <li className={styles.li_NavBar}>
            <a href='#' onClick={scrollToAnchor} className={styles.a}>{props.title}</a></li>
    )
};
export {Item_menu}