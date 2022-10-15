import React, {useEffect, useRef, useState} from "react";
import styles from "./Reviews/Reviews.module.css";
import image from "./Reviews/img/man.jpg";
import image1 from "./Reviews/img/girl.jpg";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {duration} from "@material-ui/core";
import {Item} from "./Reviews/items/Item";
import {LeftItem} from "./Reviews/items/LeftItem";
gsap.registerPlugin(ScrollTrigger)

export const Reviews = () => {


    return (
        <div className={styles.aboutUs}>
            <div className={styles.container}>
                <Item image={image} id = {'item1'} coordinatX = {0} coordY={0}/>
                <LeftItem image={image1} id = {'item'}  coordinatX = {0} coordinatY={0}/>
                <Item image={image} id = {'item2'} coordinatX = {0} coordinatY={400}/>
                <LeftItem image={image1} id = {'item3'} startY={400} coorX = {0} coordinatY={0}/>
            </div>

        </div>
    );
}