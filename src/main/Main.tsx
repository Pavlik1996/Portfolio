import React from 'react';
import s from './Main.module.scss'
import mainPhoto from '../assets/images/catmain.jpg'
import {Nav} from '../nav/Nav';

import {Rysing} from "./fsdsfd";
import {Slide, Zoom} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";

export const Main = () => {

    const backgroundImage = {
        backgroundImage: `url(${mainPhoto})`
    }


    return (
        <div>

            <div className={s.mainBlock} style={backgroundImage}>

                    <div className={s.nav}>
                        <Nav/>
                    </div>


                <div className={s.container}>
                    <Rysing/>

                    <div className={s.welcome}>
                        <ReactTypingEffect
                            text={'Welcome'}

                        />
                    </div>
                    <Zoom>
                        <span className={s.fullName}>I'm
                    <span>&nbsp;Pavel&nbsp;</span><span>Khrytso</span></span>
                        <span>based in Los Angeles, California.</span>
                    </Zoom>

                </div>
            </div>

        </div>


    )
}


