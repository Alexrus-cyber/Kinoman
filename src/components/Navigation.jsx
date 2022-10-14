import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logog.PNG';
import styles from './Navigation.module.css';
import navIcon1 from "../assets/img/profile-user.png";
import {Link, NavLink} from "react-router-dom";

export const Navigation = () => {

    const [activeLink, setActiveLink] = useState('/Banner');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar  className={styles.Navig +  ' ' + styles.scrolled + ' ' +  scrolled}>
            <Container>
                <div >
                    <img className={styles.social} src={logo} alt="Logo" />
                    <Nav className={styles.brand}>

                        <NavLink to="/"   className={styles.link} >Главная</NavLink>
                        <NavLink to="Poster"  className={styles.link}>Афиша</NavLink>
                        <NavLink to="Banner"  className={styles.link}>Бронирование</NavLink>
                        <NavLink to="Help"  className={styles.link}>Помощь</NavLink>

                    </Nav>
                </div>
                <div style={{width: 256, height : 58.19}}>

                </div>
            </Container>
        </Navbar>
    )
}