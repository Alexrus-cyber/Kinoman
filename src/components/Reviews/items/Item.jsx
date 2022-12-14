import styles from "../Reviews.module.css";
import React, {useEffect} from "react";
import gsap from "gsap";

export const Item = (props) => {

    useEffect(()=> {
        gsap.fromTo('#item1', {opacity: "30%" ,x : 300, y: props.coordY},{opacity: "100%", x: -200, duration: 3, scrollTrigger: {
                trigger: '#item1',
                scrub: 1,
                toggleActions: "restart revers none none"
            }})
        gsap.fromTo('#item2', {opacity: "50%" ,x : 300, y: props.coordinatY},{opacity: "100%", x: -200, duration: 3 , scrollTrigger: {
                trigger: '#item2',
                scrub: 2,
                toggleActions: "restart revers none none"
            }})
    })
    return(
        <div id={props.id}  className={styles.itemContainer} >
            <div className={styles.text}>
                <p  className={styles.p}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
                <div className={styles.data}>
                    <p>Dmitry 18 лет</p>
                    <p>21.09.2022</p>
                </div>
            </div>
            <div>
                <img alt={'Hello'} className={styles.img} src={props.image}/>
            </div>
        </div>
    );
}