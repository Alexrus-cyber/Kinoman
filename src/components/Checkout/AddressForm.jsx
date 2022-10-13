import React from "react";
import {InputLabel,Select, MenuItem, Button, Grid, Typography, FormControl} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import {Link, NavLink} from 'react-router-dom';
import FormInput from './CustomTextField';
import styles from "./CssModules/Addres.module.css";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {customStyles} from "./CssModules/Select/customStyles";
import Select1 from "react-select";


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

const AddressForm = (props) => {
    const data = [{
        value: '4.4.2022',
        label: '4.4.2022'
    }, {
        value: '5.4.2022',
        label: '5.4.2022'
    }, {
        value: '6.4.2022',
        label: '6.4.2022',
    }]
    const defaultValues = {
        TextField: "",
    };
    const methods = useForm();
    const { control } = useForm({ defaultValues });

    const [kino, setKino, age, setAge, country, setCountry] = React.useState('');
    const x = 1;
    const handleChange = (event: SelectChangeEvent) => {
        if (x === 1){

        }else {
            setCountry(event.target.value);
            setAge(event.target.value);
        }
    };

    const handleChange1 = (event: SelectChangeEvent) => {
        setKino(event.target.value);
    };

    const classes = useStyles();


  return(
    <div>
          <Typography variant="h6" gutterBottom style={{marginBottom: 50}}>Адрессация</Typography>
                        <div className={styles.address}>
                                <div className={styles.addressItem}>
                                    <FormControl style={{width: 300}} variant="standard" sx={{ m: 1, minWidth: 140 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Город</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={country}
                                            onChange={handleChange}
                                            label="Возраст"
                                        >
                                            <MenuItem value={11}>Кострома</MenuItem>
                                            <MenuItem value={12}>Ярославль</MenuItem>
                                            <MenuItem value={13}>Нея</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={styles.addressItem}>
                                    <FormControl style={{width: 100}} variant="standard" sx={{ m: 1, minWidth: 140 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Возраст</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={age}
                                            onChange={handleChange}
                                            label="Возраст"
                                        >

                                            <MenuItem value={16}>16</MenuItem>
                                            <MenuItem value={17}>17</MenuItem>
                                            <MenuItem value={18}>18</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl style={{width: 300}} variant="standard" sx={{ m: 1, minWidth: 140 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Кинотеатр</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={kino}
                                            onChange={handleChange1}
                                            label="Кинотеатр"
                                        >
                                            <MenuItem value={1}>ТРЦ "Коллаж, Красносельское ш., 1</MenuItem>
                                            <MenuItem value={2}>ул. Советская, 23</MenuItem>
                                            <MenuItem value={3}>ТРЦ "РИО, Магистральная ул., 20</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            <div className={styles.addressItem}>
                                <form className={classes.container} noValidate>
                                    <TextField style={{
                                    }}
                                               id="datetime-local"
                                               label="Выберите время"
                                               type="datetime-local"
                                               defaultValue="2017-05-24T10:30"
                                               className={classes.textField}
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                    />
                                </form>
                                <div className={styles.inputCont}>
                                    <input placeholder={'Фамилия/Имя/Отчество'} className={styles.input1}/>
                                </div>
                            </div>
                            <div className={styles.addressItem}>
                                <div className={styles.inputCont}>
                                    <input style={{width: 200}} placeholder={'Номер телефона'} className={styles.input1}/>
                                </div>
                                <div className={styles.inputCont}>
                                    <input  style={{width: 300}} placeholder={'E-mail'} className={styles.input1}/>
                                </div>
                            </div>
                            <div className={styles.where}>
                                <button onClick={() => {
                                    props.setActiveStep(1);
                                }} className={styles.button}>Дальше</button>
                            </div>
                        </div>

               {/*   <Grid container spacing={3}>


                      <div className={styles.where}>
                          <button onClick={() => {
                              props.setActiveStep(1);
                          }} className={styles.button}>Дальше</button>
                      </div>*/}
                  {/*</Grid>*/}
    </div>
  );
}
export default AddressForm