const uspAnim = (gsap) => {
    gsap.to(".indexUsp_wrapper", {
        y: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: '.indexUsp_wrapper',
            scrub: 1,
            // markers: true,
            start: "top top",
            end: "50% top"
        }
    })
}

export default uspAnim