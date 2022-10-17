import { useState } from "react";
import React from "react";
import styles from "./Home/Home.module.css";
import image from "./Home/img/Hello.PNG";
import image2 from "./Home/img/Hello2.png";
import image3 from "./Home/img/Hello3.png";
import image4 from "./Home/img/Hello4.png";
import gsap from "gsap";

export const Home = () => {


    const [isActive, setIsActive] = useState(0);

    const textClick = () => {
        setIsActive(isActive + 1)
        if (isActive % 2 == 0){
            gsap.to("#text",{
                x:0,
                duration:0.5 ,
                color: "white",
                cursor: 'pointer',
            })
        }else{
            gsap.to("#text",{
                x:0,
                duration: 0.5,
                color: "#BCBCBC",
            })
        }
    }


    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div><p className={styles.p} >Сеть кинотеатров</p></div>
                    <div><h1 className={styles.h1}>Открой для себя увлекательный мир кино</h1></div>
                    <div><p id={'text'} onMouseOver={textClick} onMouseLeave={textClick}  className={styles.p1}>Сеть кинотеатров «Киноман», основанная в 1997 году, установила новые стандарты оформления кинозалов в России.
                        На сегодняшний день «Киноман» является ведущей сетью кинотеатров в России, управляющей 35 современными кинотеатрами (286 экранов) в Москве,
                        Московской области, Санкт-Петербурге, Самаре, Калининграде, Екатеринбурге, Новосибирске, Тюмени и Сургуте, которые ежегодно посещают почти
                        12 млн. человек.</p></div>
                </div>
                <div className={styles.image}>
                    <img className={styles.img} src={image}/>
                </div>
            </div>
        </div>
    )
}