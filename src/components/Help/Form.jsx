import styles from "./Help.module.css";
import {Items} from "./Items";
import React from "react";

export const Form = () => {
    return(
        <div className={styles.form}>
            <Items text1={'Фамилия:'} text2={'Имя:'}/>
            <div className={styles.message}>
                <div className={styles.item}>
                    <div className={styles.authText}>
                        <p  className={styles.simple}>Ваш e-mail:</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <input style={{width: 380}} className={styles.input}/>
                    </div>
                </div>
            </div>
            <div className={styles.message}>
                <div className={styles.item}>
                    <div className={styles.authText}>
                        <p className={styles.simple}>Сообщение:</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea style={{width: 380, height: 150, resize: "none"}} className={styles.input}/>
                    </div>
                </div>
            </div>
        </div>
    );
}