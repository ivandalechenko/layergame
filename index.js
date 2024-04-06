import gsap from 'gsap';
import './index.scss'
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
import './indexUspDecor'
import animOrbit from './indexOrbitsAnim'
import teamList from './indexTeamList'
import menu from './menu'
import uspAnim from './indexUspAnim'
import indexIntroducing from './indexIntroducingAnim.js'
import indexRoadmap from './indexRoadmapAnim.js'
import indexGetting from './indexGettingAnim.js'

menu(gsap);



setTimeout(() => {

    gsap.to('.indexUsp_header', {
        opacity: 1,
        duration: 2,
        delay: 1,
    })

    gsap.to('.indexUsp_p', { duration: 2, text: { value: "Blurring the lines between Web2 and Web3" } })
    let mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
        teamList(ScrollTrigger, gsap)
        uspAnim(gsap)
        indexIntroducing(gsap)
        indexRoadmap(gsap)
        indexGetting(gsap)


    });


    animOrbit(gsap)



}, 500);