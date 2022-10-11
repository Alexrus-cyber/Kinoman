import React from "react";
import styles from "./CssModules/PaymentForm.module.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
            <div className={styles.container}>
                <input placeholder={'Visa/MasterCard'} className={styles.input1}/>
            </div>
            <div style={{marginBottom: 30}} className={styles.container}>
                <form className={classes.container} noValidate>
                    <TextField style={{ marginLeft: 30}}
                        id="date"
                        type="date"
                        defaultValue="Дата"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <input style={{width: 50}} placeholder={'cvv'} className={styles.input}/>
            </div>
            <div className={styles.container}>
                <input placeholder={'Промокод'} className={styles.input}/>
            </div>
            <div className={styles.where}>
                <button onClick={() => {
                    props.setActiveStep(0);
                }} className={styles.button1}>Вернуться</button>

                <button onClick={() => {
                    props.setActiveStep(2);
                }} className={styles.button}>Дальше</button>
            </div>

        </div>
    );
}
export default PaymentForm