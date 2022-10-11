import { useState } from "react";
import React from "react";
import styles from "./Home/Home.module.css";
import image from "./Home/img/Hello.PNG";

export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div><p className={styles.p}>Сеть кинотеатров</p></div>
                    <div><h1 className={styles.h1}>Открой для себя увлекательный мир кино</h1></div>
                    <div><p className={styles.p1}>Сеть кинотеатров «Киноман», основанная в 1997 году, установила новые стандарты оформления кинозалов в России.
                        На сегодняшний день «Киноман» является ведущей сетью кинотеатров в России, управляющей 35 современными кинотеатрами (286 экранов) в Москве,
                        Московской области, Санкт-Петербурге, Самаре, Калининграде, Екатеринбурге, Новосибирске, Тюмени и Сургуте, которые ежегодно посещают почти
                        12 млн. человек.</p></div>
                </div>
                <div className={styles.image}>
                        <img src={image}/>
                </div>
            </div>
        </div>
    )
}