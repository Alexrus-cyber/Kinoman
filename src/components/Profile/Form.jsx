import styles from "./Profile.module.css";
import {Items} from "./Items";
import React from "react";
import eye from './view.png';
import gsap from "gsap";

export const Form = () => {
    
    const x = () => {

    }
    
    return(
        <div className={styles.form}>
            <Items text1={'Фамилия:'} text2={'Имя:'}/>
            <Items text1={'Отчетсво:'} text2={'Дата рождения:'}/>
            <div className={styles.message}>
                <div className={styles.item}>
                    <div className={styles.authText}>
                        <p  className={styles.simple}>Номер телефона:</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <input style={{width: 320}} className={styles.input}/>
                    </div>
                    <div className={styles.authText}>
                        <p  className={styles.simple}>Пароль:</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <input style={{width: 220}} className={styles.input}/>
                        <div>
                            <img onClick={x} style={{width: 25,cursor: "pointer"}} src={eye} alt={'Hello'}/>
                        </div>
                    </div>
                    <div className={styles.authText}>
                        <p  className={styles.simple}>Повтор пароля:</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <input  style={{width: 220}} className={styles.input}/>
                        <div>
                            <img onClick={x} style={{width: 25,cursor: "pointer"}} src={eye} alt={'Hello'}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}