import React from "react";
import styles from "./CssModules/Confirmation.module.css";
import accept from "./img/accept.png";

const Confirmation = (props) => {
    return(
        <div className={styles.Confirmation}>
            <div className={styles.cont}>
                <img className={styles.img} src={accept}/>
                <div className={styles.text}>
                    <h2>Оплата прошла успешно!</h2>
                </div>
            </div>

        </div>
    );
}
export default Confirmation