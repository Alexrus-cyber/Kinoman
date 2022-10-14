import React from "react";
import {Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import {useState, useEffect} from "react";
import styles from "./AboutUs/AboutUs.module.css";


export const AboutUs = () => {
    const [loopNum, setLoopName] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Реакт разработчик", "Веб дизайнер", "UI/UX дизайнер"]
    const [text,setText] = useState('');
    const period = 2000;
    const [delta,setDelta] = useState(300 - Math.random()* 100) ;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return ()=> {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length + 1);
        setText(updateText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        };

        if (!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopName(loopNum+1);
            setDelta(500);
        }
    }


    return (
        <div className={styles.AboutUs} >
            <div className={styles.container}>
                <div className={styles.superCont}>
                    <span className={styles.tagline}>Обо мне</span>
                    <h1 className={styles.h1}>Привет я Алексей, <span className={styles.txtRotate} data-rotate='[ "Реакт разработчик", "Веб дизайнер", "UI/UX дизайнер" ]'></span><span  className={styles.wrap}>{text}</span></h1>
                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button  className={styles.button} ><a className={styles.a} href={'https://vk.com/arassadin2014'}>Let connect</a><a className={styles.a} href={'https://vk.com/arassadin2014'}><ArrowRightCircle size={25}></ArrowRightCircle></a> </button>
                </div>
                <div>
                    <img style={{width: 500}} className={styles.mainImage} src={headerImg} alt={'Header IMG'}/>
                </div>
            </div>

        </div>
    );
}