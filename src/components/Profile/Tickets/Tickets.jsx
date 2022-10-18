import styles from './Tickets.module.css';
import image from './Kontrol.png';


export const Tickets = () => {
    return(
        <div className={styles.Container}>
            <div className={styles.data}>
                <p className={styles.p}>Билет  № 12-34-56-78</p>
                <p className={styles.p}>Дата: 08.10.2022</p>
                <p className={styles.p}>Ряд: 08</p>
                <p className={styles.p}>Место: 09</p>
                <p className={styles.p}>Время: 20:00</p>
                <p className={styles.p}>Фильм: Не грози южному централу, попивая сок в своем черном квартале</p>
            </div>

            <div className={styles.control}>
               {/* <img className={styles.img} src={image} alt={'Hello'}/>*/}
            </div>
        </div>
    )
}