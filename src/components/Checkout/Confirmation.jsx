import React, {useState} from "react";
import styles from "./CssModules/Confirmation.module.css";
import accept from "./img/accept.png";
import {NavLink} from "react-router-dom";

const Confirmation = (props) => {


    const HandleClick = () => {

    }


    return(
        <NavLink style={{textDecoration: 'none',color: "#1c1616"}}  to = {'/Poster'}>
        <div  className={styles.Confirmation}>
            <div className={styles.cont}>
                <img className={styles.img} src={accept}/>
                <div className={styles.text}>
                    <h2>Оплата прошла успешно!</h2>
                </div>
            </div>
        </div>
        </NavLink>
    );
}
export default Confirmation