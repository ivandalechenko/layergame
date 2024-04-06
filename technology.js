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


setTimeout(() => {

    navFirst(gsap);
    navSecond(gsap);


}, 500);