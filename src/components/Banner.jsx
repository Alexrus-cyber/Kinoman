import React, {useState} from "react";
import styles from './Banner/Banner.module.css';
import Select from "react-select";
import {Seat} from "./Banner/Seat";
import {NavLink} from "react-router-dom";
import image from "./Banner/Duga.PNG"



export const Banner = (props) => {

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

    const cinema = [{
        value: 'г.Кострома,ТРЦ "Коллаж, Красносельское ш., 1 ',
        label: 'г.Кострома,ТРЦ "Коллаж, Красносельское ш., 1'
    }, {
        value: 'г.Кострома,ТРЦ "РИО, Магистральная ул., 20',
        label: 'г.Кострома,ТРЦ "РИО, Магистральная ул., 20'
    }, {
        value: 'г.Кострома,ул. Советская, 23',
        label: 'г.Кострома,ул. Советская, 23'
    }]

    const data = [{
        value: '4.4.2022',
        label: '4.4.2022'
    }, {
        value: '5.4.2022',
        label: '5.4.2022'
    }, {
        value: '6.4.2022',
        label: '6.4.2022'
    }]
    const coast = [{
        value: '2d 300p',
        label: '2d 300p'
    }, {
        value: '3d 500p',
        label: '3d 500p'
    }]
    const time = [{
        value: '18:00',
        label: '18:00'
    }]


    const [currentFilm, setCurrentFilm] = useState(0)
    const [currentCoast, setCurrentCoast] = useState('2d 300p')

    const getValue = () => {
        return currentFilm ? options.find(c => c.value === currentFilm) : ''
    }

    const getCoast = () => {
        return currentCoast ? coast.find(c => c.value === currentCoast) : ''
    }


    const onChange = (newValue) => {
        setCurrentFilm(newValue.value)
    }


    const onChange1 = (newValue) => {
        setCurrentCoast(newValue.value)
    }


  return (
      <div className={styles.banner} id={'home'}>
            <div  className={styles.container}>
                <div className={styles.places}>
                    <div className={styles.head}>
                        <div className={styles.left}>
                            <p style={{marginRight: 74}} className={styles.p}>Бронирование</p>
                        </div>
                        <div className={styles.red}>
                            <div>
                                <span className={styles.s1}></span>
                            </div>
                            <p className={styles.p} >Занято</p>
                        </div>
                        <div className={styles.green}>
                            <div>
                                <span className={styles.s}></span>
                            </div>
                            <Select styles={props.selectCoast} onChange={onChange1} value={getCoast()} options={coast}/>
                        </div>
                    </div>
                    <div >
                        <img style={{width: 500, marginBottom: 20}} src={image} alt={'Hello'}/>
                    </div>
                    <Seat/>
                </div>

                <div className={styles.choice}>
                    <div className={styles.places1}>
                    <div className={styles.choose}>
                        <Select  styles={props.selectF}  placeholder={'Выберите фильм'}  onChange={onChange} value={getValue()} options={options}/>
                    </div>
                    <div  className={styles.choose}>
                        <Select styles={props.selectF} placeholder={'Выберите кинотеатр'} options={cinema}/>
                    </div>
                    <div className={styles.choose1}>
                        <Select className={styles.marg} styles={props.selectDT} placeholder={'Дату'}  options={data}/>
                        <Select styles={props.selectDT} placeholder={'Время'} options={time}/>

                    </div>
                        <div className={styles.choose}>
                            <button className={styles.button}><NavLink className={styles.link} to="/Checkout">Купить билет</NavLink></button>
                        </div>
                </div>
            </div>
            </div>
      </div>
  );
}