import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logog.PNG';
import styles from './Navigation.module.css';
import navIcon1 from "../assets/img/nav-icon1.svg";

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
                <div href="/">
                    <img className={styles.brand} src={logo} alt="Logo" />
                    <Nav className={styles.brand}>
                        <Nav.Link href="/Banner"  className={styles.link} onClick={() => onUpdateActiveLink('Banner')}>Главная</Nav.Link>
                        <Nav.Link href="/Checkout"  className={styles.link} onClick={() => onUpdateActiveLink('Checkout')}>Афиша</Nav.Link>
                        <Nav.Link href="/Banner"  className={styles.link} onClick={() => onUpdateActiveLink('projects')}>Бронирование</Nav.Link>
                    </Nav>
                </div>
                <div>
                    <button className={styles.circle}>
                        <img src={navIcon1}/>
                    </button>
                </div>
            </Container>
        </Navbar>
    )
}