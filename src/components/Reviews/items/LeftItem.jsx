import styles from "../Reviews.module.css";
import image from "../../Home/img/Hello.PNG";
import React, {useEffect} from "react";
import gsap from "gsap";

export const LeftItem = (props) => {
    useEffect(()=> {

        gsap.fromTo('#item', {opacity: "0%" , y: props.coordinatY, x: props.coordinatX},{opacity: "100%",y : 200, x: 200, duration: 2 , scrollTrigger: {
                trigger: "#item",
                scrub:2 ,
                toggleActions: "restart revers none none",
            }})
        gsap.fromTo('#item3', {opacity: "0%" , y: props.startY, x: props.coorX},{opacity: "100%",y : 700, x: 200, duration: 2 , scrollTrigger: {
                trigger: "#item3",
                scrub: 4,
                toggleActions: "restart revers none none",
            }})
    })
    return(
        <div id={props.id}  className={styles.itemContainer} >
            <div>
                <img className={styles.img} src={props.image}/>
            </div>
            <div className={styles.text}>
                <p  className={styles.p}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                <div className={styles.data}>
                    <p>Alisa 18 лет</p>
                    <p>22.09.2022</p>
                </div>
            </div>

        </div>
    );
}