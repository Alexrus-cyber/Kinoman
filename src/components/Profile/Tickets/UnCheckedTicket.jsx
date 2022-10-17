import styles from './Tickets.module.css'


export const UnCheckedTicket = () => {
    return(
        <>
            <div className={styles.unContainer}>
                <div className={styles.data}>
                    <p className={styles.p}>Билет  № 12-34-56-78</p>
                    <p className={styles.p}>Дата: 08.10.2022</p>
                    <p className={styles.p}>Ряд: 08</p>
                    <p className={styles.p}>Место: 09</p>
                    <p className={styles.p}>Время: 20:00</p>
                    <p className={styles.p}>Фильм: Не грози южному централу, попивая сок в своем черном квартале</p>
                </div>

                <div className={styles.control}>

                </div>
            </div>
            <div className={styles.unContainer}>
                <div className={styles.data}>
                    <p className={styles.p}>Билет  № 12-34-56-78</p>
                    <p className={styles.p}>Дата: 08.10.2022</p>
                    <p className={styles.p}>Ряд: 08</p>
                    <p className={styles.p}>Место: 09</p>
                    <p className={styles.p}>Время: 20:00</p>
                    <p className={styles.p}>Фильм: Не грози южному централу, попивая сок в своем черном квартале</p>
                </div>

                <div className={styles.control}>

                </div>
            </div>
        </>


    )
}