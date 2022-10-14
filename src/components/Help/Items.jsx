import styles from "./Help.module.css";
import React from "react";

export const Items = (props) => {
   return(
       <div className={styles.itemContainer}>
           <div className={styles.item}>
               <div className={styles.authText}>
                   <p className={styles.simple}>{props.text1}</p>
               </div>
               <div className={styles.inputContainer}>
                   <input className={styles.input}/>
               </div>
           </div>
           <div className={styles.item}>
               <div className={styles.authText}>
                   <p className={styles.simple}>{props.text2}</p>
               </div>
               <div className={styles.inputContainer}>
                   <input className={styles.input}/>
               </div>
           </div>
       </div>
   );
}