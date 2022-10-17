import styles from "../Profile.module.css";
import React from "react";

export const Hlinks = (props) => {
    return(
        <div>
            <a onClick={props.click} className={props.class}  to={''}>{props.text}</a>
        </div>
    );
}