import styles from "./Poster.module.css";
import React from "react";
import arrow from "./img/right-arrow.png";
import {NavLink} from "react-router-dom";

export const BillBoard = (props) => {
  return(
      <div className={styles.posters}>
          <div className={styles.item}>
              <div className={styles.itemContainer}>
                  <div className={styles.imgContainer}>
                      <img  className={styles.img} src={props.image}/>
                  </div>
                  <div className={styles.buttonTextContainer}>
                      <div className={styles.textContainer}>
                          <div className={styles.textTittle}>
                              <p>{props.title}</p>
                          </div>
                          <div className={styles.text}>
                              <p>{props.text}</p>
                          </div>
                      </div>
                      <div  >
                          <button className={styles.button}>
                              <NavLink to="/Banner" style={{display:"flex", justifyContent: "center"}}> <img style={{width: '50%'}} src={arrow}/></NavLink>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
