import { useState } from "react";
import React from "react";
import {  Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logog.PNG';
import styles from './Footer/Foot.module.css';
import {NavLink} from "react-router-dom";

export const Foot = () => {

    const [setActiveLink] = useState('Banner');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <div className={styles.Navig +  ' ' + styles.scrolled}>
            <Container>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <img className={styles.img} src={logo} alt="Logo" />
                    </div>
                    <div className={styles.contLink}>
                        <div className={styles.social}>
                            <h3>Навигация</h3>
                            <NavLink to="/"   className={styles.link  } >Главная</NavLink>
                            <NavLink to="/Poster"  className={styles.link} >Афиша</NavLink>
                            <NavLink to="/Banner"  className={styles.link} >Бронирование</NavLink>
                        </div>
                        <div className={styles.social}>
                            <h3>Информация</h3>
                            <NavLink to="/"   className={styles.link  } >О нас</NavLink>
                            <NavLink to="/Review"  className={styles.link} >Отзывы</NavLink>
                            <NavLink to="/"  className={styles.link} >Контакты</NavLink>
                        </div>
                        <div className={styles.social}>
                            <h3>Поддержка</h3>
                            <NavLink to="/"   className={styles.link  }>Почта</NavLink>
                            <NavLink to="/Help"  className={styles.link}>Нужна помощь</NavLink>
                            <a href={'https://t.me/+tnYNFFwCLXc2NTk6'}  className={styles.link}>Бот поддержки</a>
                        </div>
                    </div>
                    </div>

            </Container>
        </div>
    )
}