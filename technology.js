import gsap from 'gsap';
import './technology.scss'
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
import menu from './menu'
import faqDds from './faqDds'
import navFirst from './technologyNavFirst'
import navSecond from './technologyNavSecond'



faqDds();
menu(gsap);

import hideLoader from './hideLoader.js'


window.onload = function () {
    setTimeout(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 900px)", () => {
            navFirst(gsap);
            navSecond(gsap);
        });
        hideLoader()
    }, 500);

}