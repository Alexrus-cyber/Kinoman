import React from "react";
import styles from "./CssModules/PaymentForm.module.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";
import image from './img/visa.png'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


const PaymentForm = (props) => {
    const classes = useStyles();
    return(
        <div>
            <Typography variant="h6" gutterBottom style={{marginBottom: 50}}>Платеж</Typography>
            <div className={styles.elementCont}>
                <div className={styles.superContainer}>
                    <div className={styles.container}>
                        <input placeholder={'Visa/MasterCard'} className={styles.input1}/>
                    </div>
                    <div  className={styles.container}>
                        <input style={{width: 80}} placeholder={'MM/YY'} className={styles.input}/>
                        <input style={{width: 50}} placeholder={'cvv'} className={styles.input}/>
                    </div>
                    <div className={styles.container}>
                        <input placeholder={'Промокод'} className={styles.input}/>
                    </div>
                </div>
                <div>
                    <img  src={image}/>
                </div>
            </div>
            <div style={{width: '100%', display: "flex", alignItems: "flex-start" , justifyContent: "flex-start" }}>
                <p  style={{marginLeft: '5px'}}>Итог: 300p</p>
            </div>
            <div className={styles.where}>
                <button onClick={() => {
                    props.setActiveStep(0);
                }} className={styles.button1}>Вернуться</button>

                <button onClick={() => {
                    props.setActiveStep(2);
                }} className={styles.button}>Оплатить</button>
            </div>

        </div>
    );
}
export default PaymentForm