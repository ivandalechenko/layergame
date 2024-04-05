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
    gsap.to('.indexUsp_header', {
        opacity: 1,
        duration: 2,
        delay: 1,
    })

    gsap.to('.indexUsp_p', { duration: 2, text: { value: "Blurring the lines between Web2 and Web3" } })
}

export default uspAnim