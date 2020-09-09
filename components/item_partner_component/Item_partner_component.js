import React, {useState} from 'react';
import styles from './item_partner.module.css';
import img1 from '../../assets/partners/1.png'
import img1c from '../../assets/partners/11.png'
import img2 from '../../assets/partners/2.png'
import img2c from '../../assets/partners/22.png'
import img3 from '../../assets/partners/3.png'
import img3c from '../../assets/partners/33.png'
import img4 from '../../assets/partners/4.png'
import img4c from '../../assets/partners/44.png'
import img5 from '../../assets/partners/5.png'
import img5c from '../../assets/partners/55.png'
import img6 from '../../assets/partners/6.png'
import img6c from '../../assets/partners/66.png'

let arrayImage = [img1,img2,img3,img4,img5,img6];
let arrayImageColor = [img1c,img2c,img3c,img4c,img5c,img6c];

const Item_partner = (props) => {

    const [imgStatus,setImgStatus] = useState(false);
    const changeImg = () => {
        setImgStatus (!imgStatus);
    };
        return (
            <div className={styles.item_partner} >

                <a href={props.link} target ='_blank'>
                    <div className={styles.img_partners} onMouseEnter={() => {changeImg()}} onMouseOut={() => {changeImg()}}
                     style = {(imgStatus === true) ? { backgroundImage: `url(${arrayImageColor[props.index]})`} : { backgroundImage: `url(${arrayImage[props.index]})`}}>
                    </div>
                </a>
                <div className={styles.texts}>
                    <h3 className={styles.bold}>{props.title}</h3>
                    <hr className={styles.hr}/>
                    <p>{props.discription}</p>
                </div>

            </div>
        );
};

export {Item_partner};
