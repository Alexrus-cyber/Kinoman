import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logog.PNG';
import styles from './Navigation/Navigation.module.css';
import { NavLink} from "react-router-dom";

export const Navigation = () => {

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


    const activeLink = styles.active;
    const normalLink = styles.link;
    return (
        <Navbar  className={styles.Navig +  ' ' + styles.scrolled + ' ' +  scrolled}>
            <Container>
                <div >
                    <img className={styles.social} src={logo} alt="Logo" />
                    <Nav className={styles.brand}>
                        <NavLink end to={'/'}  className={({ isActive }) => (isActive ? activeLink : normalLink)} >Главная</NavLink>
                        <NavLink to={'Poster'} className={({ isActive }) => (isActive ? styles.active : styles.link)}>Афиша</NavLink>
                        <NavLink to="Banner"  className={({ isActive }) => (isActive ? styles.active : styles.link)}>Бронирование</NavLink>
                        <NavLink to="Help"  className={({ isActive }) => (isActive ? styles.active : styles.link)}>Помощь</NavLink>

                    </Nav>
                </div>
                <div style={{width: 256, height : 58.19}}>

                </div>
            </Container>
        </Navbar>
    )
}