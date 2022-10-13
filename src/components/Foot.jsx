import { useState } from "react";
import React from "react";
import {  Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logog.PNG';
import styles from './Foot.module.css';
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
                            <NavLink to="/"   className={styles.link  } >Личный кабинет</NavLink>
                            <NavLink to="/Poster"  className={styles.link} >Афиша</NavLink>
                            <NavLink to="/Banner"  className={styles.link} >Бронирование</NavLink>
                        </div>
                        <div className={styles.social}>
                            <h3>Информация</h3>
                            <NavLink to="/"   className={styles.link  } >О нас</NavLink>
                            <NavLink to="/"  className={styles.link} >Отзывы</NavLink>
                            <NavLink to="/"  className={styles.link} >Контакты</NavLink>
                        </div>
                        <div className={styles.social}>
                            <h3>Поддержка</h3>
                            <NavLink to="/"   className={styles.link  }>Почта</NavLink>
                            <NavLink to="/"  className={styles.link}>Нужна помощь</NavLink>
                            <NavLink to="/"  className={styles.link}>Бот поддержки</NavLink>
                        </div>
                    </div>
                    </div>

            </Container>
        </div>
    )
}