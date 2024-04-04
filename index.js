import gsap from 'gsap';
import './index.scss'
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
setTimeout(() => {
    const races = document.querySelector(".indexTeam_elements");
    const containers = document.getElementsByClassName('container');
    const containerWidth = containers[0].getBoundingClientRect().width;
    console.log(`Ширина всей хуйни что надо двигать ${races.scrollWidth}`)
    console.log(`Ширина бади ${window.innerWidth}`);
    console.log(getScrollAmount());
    function getScrollAmount() {
        let racesWidth = races.scrollWidth;
        return -(racesWidth - window.innerWidth + (window.innerWidth - containerWidth + 30));
    }

    const tween = gsap.to(races, {
        x: getScrollAmount,
        // duration: 3,
        ease: "none",
    });


    ScrollTrigger.create({
        trigger: ".indexTeam",
        start: "top 20%",
        end: () => `+=${(getScrollAmount() * -1)}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: true
    })

}, 500);