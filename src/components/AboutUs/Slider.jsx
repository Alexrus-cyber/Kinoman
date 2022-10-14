import meter1 from "./Slider/img/meter1.svg";
import meter2 from "./Slider/img/meter2.svg";
import meter3 from "./Slider/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "./Slider/img/arrow1.svg";
import arrow2 from "./Slider/img/arrow2.svg";
import colorSharp from "./Slider/img/color-sharp.png"
import styles from './Slider/Slider.module.css'

export const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className={styles.slider} id="slider">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.bx}>
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className={`owl-carousel owl-theme ${styles.sliderMain}`}>
                                <div className={styles.image}>
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className={styles.image}>
                                    <img src={meter2} alt="Image" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className={styles.image}>
                                    <img src={meter3} alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className={styles.image}>
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}