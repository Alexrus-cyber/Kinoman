import React, {useState} from "react";
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from "@material-ui/core"
import useStyles from './Checkout/styles';
import AddressForm from "./Checkout/AddressForm";
import PaymentForm from "./Checkout/PaymentForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Confirmation from "./Checkout/Confirmation";
import styles from "./Checkout/CssModules/Checkout.module.css";

const steps = ['Адрессация', 'Платеж']

export const Checkout = () => {
    const [activeStep,setActiveStep] = useState(0);
    const classes = useStyles();



    const Form = () => activeStep === 0
        ? <AddressForm setActiveStep={setActiveStep}/>
        : <PaymentForm setActiveStep={setActiveStep}/>




  return(
      <div className={styles.check}>
          <div className={styles.checkContainer}>
      <div className={classes.toolbar}>
          <main className={classes.layout}>
              <Paper className={classes.paper}>
                  <Typography variant={"h4"} align={"center"}>Подтверждение данных</Typography>
                  <Stepper className={classes.stepper} activeStep={activeStep}>
                      {steps.map((step) => (
                          <Step key={step}>
                              <StepLabel>{step}</StepLabel>
                          </Step>
                          ))

                      }
                  </Stepper>
                  {activeStep === steps.length ? <Confirmation/> : <Form/>}

              </Paper>
          </main>
      </div>
          </div>
      </div>
  );
}