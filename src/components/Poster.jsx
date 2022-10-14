import { useState } from "react";
import React from "react";
import styles from './Poster/Poster.module.css';
import image from './Poster/img/image 6.png';
import image1 from './Poster/img/image 7.png';
import image2 from './Poster/img/image 8.png';
import image3 from './Poster/img/image 9.png';
import image4 from './Poster/img/image 10.png';
import image5 from './Poster/img/image 5.png';
import {BillBoard} from "./Poster/BillBoard";
import Select from "react-select";
import {customStyles} from "./Poster/Select/customStyles";
import {CheckButton} from "./Poster/Select/CheckButton";
import useStyles from "./Checkout/styles";
import AddressForm from "./Checkout/AddressForm";
import PaymentForm from "./Checkout/PaymentForm";
import {UncheckedButton} from "./Poster/Select/UncheckedButton";

export const Poster = () => {


    const options = [{
        value: 'Spider-man',
        label: 'Spider-man',
        icon : './Banner/spider.png'
    }, {
        value: 'Godzilla',
        label: 'Godzilla',
        icon : './Banner/mark.png'
    }, {
        value: 'Goodbye,America',
        label: 'Goodbye,America'
    }]
    const sort = {
        name: 0,
        rarity: 1,
        popular: 1,
    }
    const [activeStep,setActiveStep] = useState(0);


    return (
        <div className={styles.placard}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p style={{
                        fontWeight: 500,
                        fontSize: '18px',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                    }}>Афиша</p>
                </div>
                <div className={styles.select}>
                    <CheckButton text = {'По популярности'}/>
                    <CheckButton text = {'По названию'}/>
                    <CheckButton text = {'По рейтингу'}/>
                    {/*<div className={''}>  <Select  placeholder={'По полярности'} styles={customStyles} options={options}></Select></div>
                    <div className={''}>  <Select  placeholder={'По названию'} styles={customStyles} options={options}></Select></div>
                    <div className={''}>  <Select  placeholder={'По рейтингу'} styles={customStyles} options={options}></Select></div>*/}
                </div>

                <div className={styles.posters}>
                        <BillBoard text = {'Комедия Тима Бартона про мертвых молодоженов'} title={'Betelgeuse'} image={image1} />
                        <BillBoard text = {'Американский кинофильм 1996 года, носящий сатирический...'} title={'Не грози южному...'} image={image} />
                        <BillBoard text = {'Комедия Тима Бартона про мертвых молодоженов'} title={'Spider-man'} image={image5} />
                        <BillBoard text = {'Комедия Тима Бартона про мертвых молодоженов'} title={'Алиса в зазеркалье'} image={image3} />
                        <BillBoard text = {'Комедия Тима Бартона про мертвых молодоженов'} title={'Elite'} image={image4} />
                        <BillBoard text = {'Комедия Тима Бартона про мертвых молодоженов'} title={'Joker'} image={image2} />
                </div>
            </div>
        </div>
    )
}