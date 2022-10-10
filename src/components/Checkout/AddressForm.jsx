import React from "react";
import {InputLabel, Select, MenuItem, Button, Grid, Typography, FormControl} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import {Link, NavLink} from 'react-router-dom';
import FormInput from './CustomTextField';
import styles from "./Addres.module.css";

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

    const [kino, setKino, age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const handleChange1 = (event: SelectChangeEvent) => {
        setKino(event.target.value);
    };
  return(
      <>
          <Typography variant="h6" gutterBottom style={{marginBottom: 50}}>Адрессация</Typography>
                  <Grid container spacing={3}>
                      <FormInput label = 'Город' control={control}/>
                      <FormControl style={{width: 200,marginLeft: 50,}} variant="standard" sx={{ m: 1, minWidth: 140 }}>
                          <InputLabel id="demo-simple-select-standard-label">Возраст</InputLabel>
                          <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={age}
                              onChange={handleChange}
                              label="Возраст"
                          >
                              <MenuItem value="">
                                  <em>None</em>
                              </MenuItem>
                              <MenuItem value={16}>16</MenuItem>
                              <MenuItem value={17}>17</MenuItem>
                              <MenuItem value={18}>18</MenuItem>
                          </Select>
                      </FormControl>
                      <FormControl style={{width: 300,marginLeft: 10,}} variant="standard" sx={{ m: 1, minWidth: 140 }}>
                          <InputLabel id="demo-simple-select-standard-label">Кинотеатр</InputLabel>
                          <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={kino}
                              onChange={handleChange1}
                              label="Кинотеатр"
                          >
                              <MenuItem value="">
                                  <em>None</em>
                              </MenuItem>
                              <MenuItem value={1}>ТРЦ "Коллаж, Красносельское ш., 1</MenuItem>
                              <MenuItem value={2}>ул. Советская, 23</MenuItem>
                              <MenuItem value={3}>ТРЦ "РИО, Магистральная ул., 20</MenuItem>
                          </Select>
                      </FormControl>
                      <input placeholder={'Промокод'} className={styles.input}/>
                      <div className={styles.where}>
                          <button className={styles.button}><NavLink className={styles.link} to={'/Banner'}>Дальше</NavLink></button>
                      </div>
                  </Grid>
      </>
  );
}
export default AddressForm