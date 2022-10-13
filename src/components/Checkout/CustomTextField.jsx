import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Grid } from '@material-ui/core';
import styles from "./styles";

function FormInput({control , label} , props) {
    function countryToFlag(isoCode) {
        return typeof String.fromCodePoint !== "undefined"
            ? isoCode
                .toUpperCase()
                .replace(/./g, (char) =>
                    String.fromCodePoint(char.charCodeAt(0) + 127397)
                )
            : isoCode;
    }

    const countries = [
        { code: "RU", label: "Кострома", phone: "7" },
        { code: "RU", label: "Ярославль", phone: "7" },
    ];


    return (
        <Grid style={{width: 250,}} item>
            <Controller
                render={({ field }) => (
                    <Autocomplete
                        {...field}
                        options={countries}
                        getOptionLabel={(option) => option.label}
                        renderOption={(option) => (
                            <span>
              {countryToFlag(option.code)}
                                {option.label}
            </span>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={label}
                                variant="outlined"
                            />
                        )}
                        onChange={(_, data) => field.onChange(data)}
                    />
                )}
                name="country"
                control={control}
            />
        </Grid>

    );
}

export default FormInput;