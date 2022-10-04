import React from "react";
import './main-info.sass'

export default function MainInfo() {

    return (
        <div className="main-info">
            <div className="main-info__side">
                <div className="photo-wrapper">
                    <img className="main-info__photo" src="https://avatars.githubusercontent.com/u/91686101?v=4" alt="тут должен быть я )=" />
                    <span>Роман Савранский</span>
                </div>
                <p><b>Ростов-на-Дону</b>, ул. Зорге 20</p>
                <ul className="main-info__contacts">
                <li className="contacts-item">
                        <img src="https://cdn.iconscout.com/icon/free/png-64/phone-1559-461603.png" alt="mail" />
                        <a href="tel:89996957812">+7 999 6957812</a>
                    </li>
                    <li className="contacts-item">
                        <img src="https://cdn.iconscout.com/icon/free/png-64/mail-1140-830582.png" alt="mail" />
                        <a href="mailto: quadath@gmail.com">quadath@gmail.com</a>
                    </li>
                    <li className="contacts-item">
                        <img src="https://cdn.iconscout.com/icon/free/png-64/telegram-3691230-3073750.png" alt="mail" />
                        <a href="https://t.me/quadath">Telegram</a>
                    </li>
                </ul>
            </div>
            <div className="main-info__descr">
            <p>Как вы меня уже поняли, меня зовут Роман, мне 15 лет, я начинающий Front-End разработчик.</p>
                <p>Учусь разработке <b>уже более года</b>, сливы платных курсов, видео в ютубе и документация мои лучшие друзья.</p>
                <p>В себе считаю ценным очень быструю обучаемость, мне легко в сжатые сроки освоить что-либо, понять свои ошибки и я хочу найти того, кто мне покажет мои ошибки, то есть попасть в местный офис на работу/стажировку в дружный коллектив.</p>
                <p>Знание английского на уровне технической документации. Эмоциональная устойчивость, лидерские навыки это про меня. Буду рад вашему приглашению!</p>
            </div>
        </div>
    )
}