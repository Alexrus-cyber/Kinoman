import styles from "./Banner.module.css";
import {GreenButton} from "./Buttons/GreenButton";
import {RedButton} from "./Buttons/RedButton";
import React from "react";

export const Seat = () => {
    return(
        <div className={styles.seat}>
            <div className={styles.row}>
                <GreenButton id={1} />
                <GreenButton id={2} />
                <GreenButton id={3} />
                <RedButton   id={4} />
                <GreenButton id={5} />
                <RedButton   id={6} />
                <GreenButton id={7} />
                <GreenButton id={8} />
                <GreenButton id={9} />
                <GreenButton id={10} />
                <GreenButton id={11} />
            </div>
            <div className={styles.row}>
                <GreenButton id={12} />
                <GreenButton id={13} />
                <GreenButton id={14} />
                <RedButton   id={15} />
                <GreenButton id={16} />
                <RedButton   id={17} />
                <GreenButton id={18} />
                <GreenButton id={19} />
                <RedButton   id={20} />
                <RedButton   id={21} />
                <GreenButton id={22} />
            </div>
            <div className={styles.row}>
                <GreenButton id={23} />
                <RedButton   id={24} />
                <GreenButton id={25} />
                <RedButton   id={26} />
                <GreenButton id={27} />
                <RedButton   id={28}   />
                <GreenButton id={29} />
                <RedButton   id={30}   />
                <GreenButton id={31} />
                <RedButton   id={32}   />
                <GreenButton id={33} />
            </div>
            <div className={styles.row}>
                <GreenButton id={34}   />
                <RedButton   id={35}   />
                <GreenButton id={36}    />
                <RedButton   id={37}   />
                <GreenButton id={38}   />
                <RedButton   id={39}   />
                <GreenButton id={40} />
                <GreenButton id={41} />
                <GreenButton id={42} />

            </div>
            <div className={styles.row}>
                <RedButton   id={43}   />
                <RedButton   id={44}   />
                <GreenButton id={45} />
                <RedButton   id={46}   />
                <GreenButton id={47} />
                <RedButton   id={48}   />
                <GreenButton id={49} />
            </div>
            <div className={styles.row}>
                <GreenButton id={50} />
                <RedButton   id={51}   />
                <GreenButton id={52} />
                <RedButton   id={53}   />
                <GreenButton id={54} />
                <RedButton   id={55}   />
                <GreenButton id={56} />

            </div>
        </div>
    );

}