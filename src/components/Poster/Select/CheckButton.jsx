import styles from "../Poster.module.css";
import React, {useState} from "react";

export const CheckButton = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
        // 👇️ or set to true
        // setIsActive(true);
    };
    return(

        <div onClick={handleClick} style={{
            padding: isActive ? '5px' : '5px',
            fontSize: 15,
            fontWeight: isActive ? "700" : "500" ,
            color: isActive ? 'white' : "#BCBCBC",
            border: isActive ? '1px solid #4151f6' : '1px solid transparent' ,
            backgroundColor: isActive ? "#4151f6" : "transparent",
            borderRadius: '15px',
            cursor: "pointer",
            marginRight: isActive ? '10px' : '10px',
        }}>{props.text}
        </div>
    );
}