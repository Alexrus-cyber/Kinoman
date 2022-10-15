import React, {useRef} from "react";
import {Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from './AboutUs/img/Alex.jpg';
import Image from './AboutUs/img/Dan.jpg';
import {useState, useEffect} from "react";
import styles from "./AboutUs/AboutUs.module.css";
import {Slider} from "./AboutUs/Slider";
import gsap from "gsap";
import {Alex} from "./AboutUs/Alex";


export const AboutUs = () => {

    return (
        <div className={styles.AboutUs} >
            <Alex tagline ={'О разработчике'}
                  h1={'Привет я Алексей, '}
                  text = {'Реакт разработчик'}
                  text1={'Веб дизайнер'}
                  text2={'UI/UX дизайнер'}
                  image = {headerImg}
            />
            <Slider procents1={'60%'}
                    procents2={'20%'}
                    procents3={'50%'}
                    procents4={'70%'}
                    text1 = {'HTML и CSS'}
                    text2 = {'React js'}
                    text3 = {'Дизайн'}
                    text4 = {'Веб разработка'}
            />
            <Alex tagline ={'О Дизайнере'}
                  h1={'Я Даниил, '}
                  text = {'Дизайнер'}
                  text1={'Веб дизайнер'}
                  text2={'UI/UX дизайнер'}
                  image = {Image}
            />
            <Slider procents1={'20%'}
                    procents2={'50%'}
                    procents3={'20%'}
                    procents4={'80%'}
                    text1 = {'HTML и CSS'}
                    text2 = {'UI/UX Дизайн'}
                    text3 = {'Веб разработка'}
                    text4 = {'Веб Дизайн'}

            />
        </div>
    );
}