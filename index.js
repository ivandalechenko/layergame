import gsap from 'gsap';
import './index.scss'
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
import './indexUspDecor'
import animOrbit from './indexOrbitsAnim'
import teamList from './indexTeamList'
import menu from './menu'

menu(gsap);



setTimeout(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
        teamList(ScrollTrigger, gsap)
    });
    animOrbit(gsap)



}, 500);