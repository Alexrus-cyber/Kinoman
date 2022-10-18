import styles from "./Profile/Profile.module.css";
import {Form} from "./Profile/Form";
import image from "./Help/img/cinema.png";
import React, {useRef, useState} from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {Tickets} from "./Profile/Tickets/Tickets";
import {UnCheckedTicket} from "./Profile/Tickets/UnCheckedTicket";
import {Hlinks} from "./Profile/Refs/Hlinks";


export const MyProfile = () => {
        let [active, setActive] = useState(true);
        let [activeStep,setActiveStep] = useState(0);
        let [a, setA] = useState(false);

    const handleClick = () => {
       if (activeStep === 1){
           setActiveStep(0)
           setA(false)
           setActive(true)
       }
    };
    const Click = () => {
        // 👇️ toggle
        if (activeStep === 0){
            setActiveStep(1);
            setA(true)
            setActive(false)
        }

    };

    const Dor = () => activeStep === 0
        ? <Tickets setActiveStep={setActiveStep}/>
        : <UnCheckedTicket setActiveStep={setActiveStep}/>

        return(
            <div className={styles.profile}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <div className={styles.p}><p>Личный кабинет</p></div>
                        <Form/>
                        <div className={styles.buttonContainer}>
                            <div>
                                <button className={styles.button}>Сохранить</button>
                            </div>
                            <div>
                                <button style={{background:"#9d1d1d"}} className={styles.button}>Отмена</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ticketsContainer}>
                        <div className={styles.superCont}>
                            <div className={styles.links}>
                                <Hlinks click = {handleClick} class = {(active ? styles.active : styles.link)} text = {'АКТИВНЫЕ СЕАНСЫ'}/>
                                <Hlinks click = {Click} class = {(a ? styles.active : styles.link)} text = {'ИСТОРИЯ БРОНИРОВАНИЯ'}/>
                                {/*  <div>
                                <p onClick={handleClick} className={(active ? styles.active : styles.link)}  to={''}>АКТИВНЫЕ СЕАНСЫ</p>
                            </div>
                            <div>
                                <p onClick={Click} className={(active ? styles.active : styles.link)}  to={''}>ИСТОРИЯ БРОНИРОВАНИЯ</p>
                            </div>*/}
                            </div>

                            <div >
                                <Dor/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
}