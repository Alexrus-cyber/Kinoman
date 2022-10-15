import styles from "./AboutUs.module.css";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "./img/Alex.jpg";
import {Slider} from "./Slider";
import React, {useEffect, useState} from "react";
import gsap from "gsap";

export const Alex = (props) => {
    const [loopNum, setLoopName] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [props.text, props.text1, props.text2]
    const [text,setText] = useState('');
    const period = 2000;
    const [delta,setDelta] = useState(300 - Math.random()* 100) ;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return ()=> {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length + 1);
        setText(updateText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        };

        if (!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopName(loopNum+1);
            setDelta(500);
        }
    }


    const Jaba = () => {
        gsap.fromTo('#ban', {opacity: "30%" ,x : 300, y: 0},{opacity: "100%", x: 0, duration: 3})
    }


  return(

      <div className={styles.container}>
          <div className={styles.superCont}>
              <span className={styles.tagline}>{props.tagline}</span>
              <h1 className={styles.h1}>{props.h1} <span className={styles.txtRotate} data-rotate='[ "Реакт разработчик", "Веб дизайнер", "UI/UX дизайнер" ]'></span><span  className={styles.wrap}>{text}</span></h1>
              <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button  className={styles.button} ><a className={styles.a} href={'https://vk.com/arassadin2014'}>Let connect</a><a className={styles.a} href={'https://vk.com/arassadin2014'}><ArrowRightCircle size={25}></ArrowRightCircle></a> </button>
          </div>
          <div>
              <img id={'ban'} onLoad={Jaba}  style={{width: 500}} className={styles.mainImage} src={props.image} alt={'Header IMG'}/>
          </div>
      </div>
  );
}