import React from "react";
import styles from './Poster/Poster.module.css';
import image from './Poster/img/image 6.png';
import image1 from './Poster/img/image 7.png';
import image2 from './Poster/img/image 8.png';
import image3 from './Poster/img/image 9.png';
import image4 from './Poster/img/image 10.png';
import image5 from './Poster/img/image 5.png';
import {BillBoard} from "./Poster/BillBoard";
import {CheckButton} from "./Poster/Select/CheckButton";


export const Poster = () => {



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