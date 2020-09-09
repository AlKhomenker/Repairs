import React ,{useState}from 'react';
import styles from './contacts.module.css';
import {Item_topic} from "../../components/item_topic_component/Item_topic_component";
import {Item_btn} from "../../components/item_btn_component/Item_btn_component";
import contactsSection from "../../localstore/contactSection_store";

let array = ['fa fa-mobile','fa fa-envelope-square','fa fa-map-marker'];
let arraySocialMedia = ['fa fa-facebook','fa fa-telegram','fa fa-whatsapp','fa fa-instagram','fa fa-youtube'];

const Contacts= (props) => {
    const [nameStatus, setNameStatus] = useState(true);
    const [emailStatus, setEmailStatus] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [option, setOption] = useState('another');
    const [comment, setComment] = useState('');

    const changeNameStatus = () => {
        if(name === ''){
            setName(''); setEmail(email); setOption(option); setComment(comment);
            setNameStatus(false);
        }else {
            setNameStatus(true);
        }
    };

    const changeEmailStatus = () => {
        if(!email.includes('@')){
            setName(name); setEmail(''); setOption(option); setComment(comment);
            setEmailStatus(false);
        }else {
            setEmailStatus(true);
        }
    };


    const getCommentfromClient = (props) => {
        setName({...name});
        setEmail({...email});
        setOption({...option});
        setComment({...comment});
        props.preventDefault();

        if(name !== '' && email.includes('@') ){
            setNameStatus(true);  setEmailStatus(true);
            const body = `Client's name : ${name}%0AEmail : ${email} %0AComment : ${(comment === '')?'no comment' : comment}`;
            window.open(`mailto:alinahom@me.com?subject=${option}&body=${body}`);

            setName(''); setEmail(''); setOption(''); setComment('');
        }else {
            changeNameStatus();
            changeEmailStatus();
        }
    };
    const socislMedia = arraySocialMedia.map((item,index) => {
        return(
                <a href={contactsSection.links[index]} target='_blank' className={styles.icons_socislMedia}>
                    <i className={item}/></a>
        )
    });
    if(props.lang === 'ru'){
        const items = contactsSection.ru.contact.map((item,index) => {
            return(
                <div className={styles.item_contacts}>
                    <div className={styles.icons}><i className={array[index]}/></div>
                    <h3 className={styles.bold}>{item.title}</h3>
                    <hr className={styles.hr}/>
                    <p>{item.discription[0]}</p>
                    <p>{item.discription[1]}</p>
                </div>
            )
        });
        return (
            <div className={styles.contacts} id='контакты'>
                <Item_topic title = {contactsSection.ru.heading[0]} discr = {contactsSection.ru.heading[1]}
                            comment = {contactsSection.ru.heading[2]}/>

                <form>
                    <div className={styles.contacts_form}>
                        <label htmlFor="name">{contactsSection.ru.form[0].label}
                            <span className={styles.warning}>{contactsSection.ru.form[0].warning}</span>
                        </label>
                        <input className={(nameStatus === true) ? (styles.input) : (styles.input_empty)}
                               type="text" id="name" name="name" placeholder={contactsSection.ru.form[0].placeholder}
                               value={name} onChange = {event => setName(event.target.value)} />

                        <label htmlFor="email">{contactsSection.ru.form[1].label}
                            <span className={styles.warning}>{contactsSection.ru.form[1].warning}</span>
                        </label>
                        <input className={(emailStatus === true) ? (styles.input) : (styles.input_empty)}
                               type="email" id="email" name="email" placeholder={contactsSection.ru.form[1].placeholder}
                               value={email} onChange = {event => setEmail(event.target.value)} />

                        <label htmlFor="types">{contactsSection.ru.form[2].label}</label>
                        <select id="types" name="types" value={option} onChange = {event => setOption(event.target.value)} >
                            <option value="zero">не выбранно</option>
                            <option value="one">{contactsSection.ru.form[2].placeholder[0]} </option>
                            <option value="two">{contactsSection.ru.form[2].placeholder[1]} </option>
                            <option value="three">{contactsSection.ru.form[2].placeholder[2]} </option>
                        </select>
                    </div>
                    <div className={styles.contacts_form}>
                        <label htmlFor="discription">{contactsSection.ru.form[3].label}</label>
                        <textarea id="discription" name="discription" placeholder={contactsSection.ru.form[3].placeholder}
                                  value={comment} onChange = {event => setComment(event.target.value)} />
                    </div>
                </form>


                 <Item_btn title = {contactsSection.ru.btn} clicked = {getCommentfromClient}/>
                 <Item_topic title = {contactsSection.ru.heading2}/>

                <div className={styles.contacts_block}>
                    {items}
                </div>

                <div className={styles.block_socislMedia}>
                    <h2 className={styles.bold}>гор. линия * 9090</h2>
                        {socislMedia}
                </div>
            </div>
        );
    }else if(props.lang === 'en'){
        const items = contactsSection.en.contact.map((item,index) => {
            return(
                <div className={styles.item_contacts}>
                    <div className={styles.icons}><i className={array[index]}/></div>
                    <h3 className={styles.bold}>{item.title}</h3>
                    <hr className={styles.hr}/>
                    <p>{item.discription[0]}</p>
                    <p>{item.discription[1]}</p>
                </div>
            )
        });
        return (
            <div className={styles.contacts} id='contact'>
                <Item_topic title = {contactsSection.en.heading[0]} discr = {contactsSection.en.heading[1]}
                            comment = {contactsSection.en.heading[2]}/>

                <form>
                    <div className={styles.contacts_form}>
                        <label htmlFor="name">{contactsSection.en.form[0].label}
                            <span className={styles.warning}>{contactsSection.en.form[0].warning}</span>
                        </label>
                        <input className={(nameStatus === true) ? (styles.input) : (styles.input_empty)}
                               type="text" id="name" name="name" placeholder={contactsSection.en.form[0].placeholder}
                               value={name} onChange = {event => setName(event.target.value)} />

                        <label htmlFor="email">{contactsSection.en.form[1].label}
                            <span className={styles.warning}>{contactsSection.en.form[1].warning}</span>
                        </label>
                        <input className={(emailStatus === true) ? (styles.input) : (styles.input_empty)}
                               type="email" id="email" name="email" placeholder={contactsSection.en.form[1].placeholder}
                               value={email} onChange = {event => setEmail(event.target.value)} />

                        <label htmlFor="types">{contactsSection.en.form[2].label}</label>
                        <select id="types" name="types" value={option} onChange = {event => setOption(event.target.value)} >
                            <option value="zero">not selected</option>
                            <option value="one">{contactsSection.en.form[2].placeholder[0]} </option>
                            <option value="two">{contactsSection.en.form[2].placeholder[1]} </option>
                            <option value="three">{contactsSection.en.form[2].placeholder[2]} </option>
                        </select>
                    </div>
                    <div className={styles.contacts_form}>
                        <label htmlFor="discription">{contactsSection.en.form[3].label}</label>
                        <textarea id="discription" name="discription" placeholder={contactsSection.en.form[3].placeholder}
                                  value={comment} onChange = {event => setComment(event.target.value)} />
                    </div>
                </form>

                <Item_btn title = {contactsSection.en.btn} clicked = {getCommentfromClient}/>
                <Item_topic title = {contactsSection.en.heading2}/>

                <div className={styles.contacts_block}>
                    {items}
                </div>

                <div className={styles.block_socislMedia}>
                    <h2 className={styles.bold}>hot line * 9090</h2>
                    {socislMedia}
                </div>
            </div>
        );
    }else if(props.lang === 'heb'){
        const items = contactsSection.heb.contact.map((item,index) => {
            return(
                <div className={styles.item_contacts}>
                    <div className={styles.icons}><i className={array[index]}/></div>
                    <h3 className={styles.bold}>{item.title}</h3>
                    <hr className={styles.hr}/>
                    <p>{item.discription[0]}</p>
                    <p>{item.discription[1]}</p>
                </div>
            )
        });
        return (
            <div className={styles.contacts} id='קשר'>
                <Item_topic title = {contactsSection.heb.heading[0]} discr = {contactsSection.heb.heading[1]}
                            comment = {contactsSection.heb.heading[2]}/>

                <form>
                    <div className={styles.contacts_form}>
                        <label htmlFor="name">{contactsSection.heb.form[0].label}
                            <span className={styles.warning_heb}>{contactsSection.heb.form[0].warning}</span>
                        </label>
                        <input className={(nameStatus === true) ? (styles.input) : (styles.input_empty)}
                               type="text" id="name" name="name" placeholder={contactsSection.heb.form[0].placeholder}
                               value={name} onChange = {event => setName(event.target.value)} />

                        <label htmlFor="email">{contactsSection.heb.form[1].label}
                            <span className={styles.warning_heb}>{contactsSection.heb.form[1].warning}</span>
                        </label>
                        <input className={(emailStatus === true) ? (styles.input) : (styles.input_empty)}
                               type="email" id="email" name="email" placeholder={contactsSection.heb.form[1].placeholder}
                               value={email} onChange = {event => setEmail(event.target.value)} />

                        <label htmlFor="types">{contactsSection.heb.form[2].label}</label>
                        <select id="types" name="types" value={option} onChange = {event => setOption(event.target.value)} >
                            <option value="zero">לא נבחר</option>
                            <option value="one">{contactsSection.ru.form[2].placeholder[0]} </option>
                            <option value="two">{contactsSection.heb.form[2].placeholder[1]} </option>
                            <option value="three">{contactsSection.heb.form[2].placeholder[2]} </option>
                        </select>
                    </div>
                    <div className={styles.contacts_form}>
                        <label htmlFor="discription">{contactsSection.heb.form[3].label}</label>
                        <textarea id="discription" name="discription" placeholder={contactsSection.heb.form[3].placeholder}
                                  value={comment} onChange = {event => setComment(event.target.value)} />
                    </div>
                </form>

                <Item_btn title = {contactsSection.heb.btn} clicked = {getCommentfromClient}/>

                <Item_topic title = {contactsSection.heb.heading2}/>

                <div className={styles.contacts_block}>
                    {items}
                </div>

                <div className={styles.block_socislMedia}>
                    <h2 className={styles.bold}>hot line * 9090</h2>
                    {socislMedia}
                </div>
            </div>
        );
    }
};

export {Contacts};
