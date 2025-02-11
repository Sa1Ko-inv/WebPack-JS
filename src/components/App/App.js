import React, { useState } from 'react';
import * as styles from "./App.module.scss";
import { Link } from "react-router-dom";
import About from "@/pages/about/About";
import avaterPng from '@/assets/2.png';
import avaterJpg from '@/assets/1.jpg';
import AvaterSvg from './../../assets/Profile cart.svg';

import './App.module.scss';

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    console.log(styles);


    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={avaterPng} alt=""/>
                <img width={100} height={100} src={avaterJpg} alt=""/>
            </div>
            <div>
                <AvaterSvg className={styles.icon} width={100} height={100} />
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className={styles.value}>{count}</h1>
            <button className={styles.button} onClick={increment}><span>sadasd</span></button>
            <About />
        </div>
    );
};
