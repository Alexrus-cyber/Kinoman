import { useState } from "react";
import React from "react";
import {  Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logog.PNG';
import styles from './Foot.module.css';

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
                    <div className={styles.social}>
                        <h3>Навигация</h3>
                        <Nav.Link href="/Banner"   className={styles.link  } onClick={() => onUpdateActiveLink('Banner')}>Личный кабинет</Nav.Link>
                        <Nav.Link href="/Checkout"  className={styles.link} onClick={() => onUpdateActiveLink('Checkout')}>Афиша</Nav.Link>
                        <Nav.Link href="/Banner"  className={styles.link} onClick={() => onUpdateActiveLink('projects')}>Бронирование</Nav.Link>
                    </div>
                    <div className={styles.social}>
                        <h3>Информация</h3>
                        <Nav.Link href="/Banner"   className={styles.link  } onClick={() => onUpdateActiveLink('Banner')}>О нас</Nav.Link>
                        <Nav.Link href="/Checkout"  className={styles.link} onClick={() => onUpdateActiveLink('Checkout')}>Отзывы</Nav.Link>
                        <Nav.Link href="/Banner"  className={styles.link} onClick={() => onUpdateActiveLink('projects')}>Контакты</Nav.Link>
                    </div>
                    <div className={styles.social}>
                        <h3>Поддержка</h3>
                        <Nav.Link href="/Banner"   className={styles.link  } onClick={() => onUpdateActiveLink('Banner')}>Почта</Nav.Link>
                        <Nav.Link href="/Checkout"  className={styles.link} onClick={() => onUpdateActiveLink('Checkout')}>Нужна помощь</Nav.Link>
                        <Nav.Link href="/Banner"  className={styles.link} onClick={() => onUpdateActiveLink('projects')}>Бот поддержки</Nav.Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}