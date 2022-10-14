import styles from "../Poster.module.css";
import React, {useState} from "react";

export const UncheckedButton = (props) => {
    const handleClick = () => {
       props.setActiveStep(0)
    };

    return(
    <div onClick={handleClick} className = {styles.divUnChecked}>{props.text}
    </div>
    );
}