
const contactsSection = {
    links : [
        'https://www.facebook.com/RuslanKhomenker','https://web.telegram.org/#/im?p=@zoferm','https://wa.me/972502654941','https://instagram.com/ruslankhomenker?igshid=1lli6fb9h05wg','https://www.youtube.com/watch?v=H-YqFhl7rlg'
    ],
    en:{
        heading : ['let\'s talk','Ask us any question you are interested in.','Fields marked with * are required'],
        heading2 : 'connect with us !',
        btn : 'send',
        form : [
            {label : '* Client\'s Name', warning : 'This field must not be empty' ,placeholder : 'First Name Last Name'},
            {label : '* Email', warning : 'The field must not be empty and must contain @' , placeholder : 'Email'},
            {label : 'Type of repair work' , placeholder : ['Сантехника','Керамика','Покраска стен']},
            {label : 'Comment' , placeholder : 'I am curious...'}
        ],
        contact : [
            {title : 'our numbers',discription : ['+ (972) 50-265-49-41','+ (972) 58-285-43-21']},
            {title : 'Email',discription : ['ruslan@gmail.com','rushom@list.ru']},
            {title : 'address',discription : ['Israel, Netanya']}
    ]
    },
    ru:{
        heading : ['Давайте поговорим','Задайте нам любой интересующий Вас вопрос.','Поля помечанные * - обязательные'],
        heading2 : 'наши контакты',
        btn : 'отправить',
        form : [
            {label : '* Имя клиента', warning : 'Это поле не должно быть пустым' , placeholder : 'Имя Фамилия'},
            {label : '* Email', warning : 'Поле не должно быть пустым и должно содержать @' , placeholder : 'Email'},
            {label : 'Вид ремонтных работ', placeholder : ['Сантехника','Керамика','Покраска стен']},
            {label : 'Комментарий', placeholder : 'Я бы хотел уточнить...'}
        ],
        contact : [
            {title : 'наши номера',discription : ['+ (972) 50-265-49-41','+ (972) 58-285-43-21']},
            {title : 'Email',discription : ['ruslan@gmail.com','rushom@list.ru']},
            {title : 'адрес',discription : ['Израиль , Нетания']}
        ]
    },
    heb:{
        heading : ['בוא נדבר','שאל אותנו כל שאלה שאתה מעוניין בה.','שדות המסומנים ב- * נדרשים'],
        heading2 : 'אנשי קשר',
        btn : 'לִשְׁלוֹחַ',
        form : [
            {label : 'שם הלקוח *', warning : 'אסור שדה זה יהיה ריק' , placeholder : 'שם פרטי שם משפחה'},
            {label : 'אימייל *', warning : ' אסור שהשדה יהיה ריק ועליו להכיל @' , placeholder : 'אימייל'},
            {label : 'סוג עבודות התיקון',placeholder : ['Сантехника','Керамика','Покраска стен']},
            {label : 'תגובה',placeholder : 'אני סקרן...'}
        ],
            contact : [
            {title : 'המספרים שלנו',discription : ['+ (972) 50-265-49-41','+ (972) 58-285-43-21']},
            {title : 'אימייל',discription : ['ruslan@gmail.com','rushom@list.ru']},
            {title : 'כתובת',discription :['ישראל, נתניה']}
        ]
    }
};

export default contactsSection;