import { useState } from "react";
import React from "react";
import styles from './Poster/Poster.module.css'

export const Poster = () => {
    return (
        <div className={styles.placard}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>Афиша</p>
                </div>
                <div className={styles.select}>
                    <div className={''}>  <p>Афиша</p></div>
                    <div className={''}>  <p>Афиша</p></div>
                    <div className={''}>  <p>Афиша</p></div>
                </div>
                <div className={styles.posters}>
                    <div className={styles.item}>
                        <div className={styles.itemContainer}>
                            <div className={styles.img}>

                            </div>
                            <div className={styles.buttonTextContainer}>
                                <div className={styles.textContainer}>
                                    <div className={styles.textTittle}></div>
                                    <div className={styles.text}></div>
                                </div>
                                <div className={styles.button}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemContainer}>
                            <div className={styles.img}>

                            </div>
                            <div className={styles.buttonTextContainer}>
                                <div className={styles.textContainer}>
                                    <div className={styles.textTittle}></div>
                                    <div className={styles.text}></div>
                                </div>
                                <div className={styles.button}></div>
                            </div>
                        </div>
                    </div>
                    <div className={''}></div>
                </div>
            </div>
        </div>
    )
}