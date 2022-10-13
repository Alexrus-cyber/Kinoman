import { useState } from "react";
import React from "react";
import styles from "./Help/Help.module.css";
import image from "./Help/img/cinema.png";
import gsap from "gsap";

export const Help = () => {


    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.p}><p  >Поддержка</p></div>
                    <div className={styles.h1}><h1 >Задай свой вопрос!</h1></div>
                    <div className={styles.p1}><p >E-mail: Kinoman_help@gmail.com
                        Техническая поддержка: +7 (999) 999-99-99
                        Telegram bot: @kinoman_help</p></div>
                </div>
                <div className={styles.image}>
                    <img src={image}/>
                </div>
            </div>
        </div>
    )
}