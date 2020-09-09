import React ,{useState}from 'react';
import './App.css';
import {Main} from "./sections/main_component/Main_component";
import {Info} from "./sections/info_component/Info_component";
import {Projects} from "./sections/projects_component/Projects_component";
import {WorkStages} from "./sections/work_stages_component/Work_stages_component";
import {Partners} from "./sections/partners_component/Partners_component";
import {Contacts} from "./sections/contacts_component/Contacts_component";
import {Reviews} from "./sections/reviews_component/Reviews_component";
import {Footer} from "./sections/footer_component/Footer_component";


function App() {
    const [language,setLanguage] = useState('ru');
    const [status,setStatus] = useState('lang_active');
    const changeLanguage = (lang) => {
        setLanguage(lang);
        setStatus('lang_active');
    };
  return (
     <div className="App">
        <div className="block_lang">
            <div className={(language === 'ru') ? status : 'lang'} onClick={() => {changeLanguage('ru')}}>ru</div>
            <div className={(language === 'en') ? status : 'lang'} onClick={() => {changeLanguage('en')}}>en</div>
            <div className={(language === 'heb') ? status : 'lang'} onClick={() => {changeLanguage('heb')}}>heb</div>
        </div>
            <Main lang = {language}/>
            <Info lang = {language}/>
            <Projects lang = {language}/>
            <WorkStages lang = {language}/>
            <Partners lang = {language}/>
            <Contacts lang = {language}/>
            <Reviews lang = {language}/>
            <Footer lang = {language}/>
     </div>
  );
}

export default App;
