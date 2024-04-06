const uspAnim = (gsap) => {
    gsap.to(".indexUsp_wrapper", {
        opacity: 0,
        scale: 1.5,
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