const navSecond = (gsap) => {
    gsap.to('#navigator2', {
        y: document.getElementById('navigator2content').getBoundingClientRect().height - 400,
        ease: 'none',
        scrollTrigger: {
            trigger: '#navigator2content',
            scrub: 0,
            start: '400px top',
            end: "100% top",
        }
    })
    gsap.to('#navigator2_1_link', {
        scrollTrigger: {
            trigger: '#navigator2_1_block',
            scrub: 1,
            start: 'top center',
            end: '300 center',
            // markers: true,
            toggleClass: { targets: "#navigator2_1_link", className: "technologyMultiplanet_navigator_element_active" },
        }
    })
    gsap.to('#navigator2_2_link', {
        scrollTrigger: {
            trigger: '#navigator2_2_block',
            scrub: 1,
            start: 'top center',
            end: '300 center',
            // markers: true,
            toggleClass: { targets: "#navigator2_2_link", className: "technologyMultiplanet_navigator_element_active" },
        }
    })
    gsap.to('#navigator2_3_link', {
        scrollTrigger: {
            trigger: '#navigator2_3_block',
            scrub: 1,
            start: 'top center',
            end: '300 center',
            // markers: true,
            toggleClass: { targets: "#navigator2_3_link", className: "technologyMultiplanet_navigator_element_active" },
        }
    })
    gsap.to('#navigator2_4_link', {
        scrollTrigger: {
            trigger: '#navigator2_4_block',
            scrub: 1,
            start: 'top center',
            end: '300 center',
            // markers: true,
            toggleClass: { targets: "#navigator2_4_link", className: "technologyMultiplanet_navigator_element_active" },
        }
    })
    gsap.to('#navigator2_5_link', {
        scrollTrigger: {
            trigger: '#navigator2_5_block',
            scrub: 1,
            start: 'top center',
            end: '300 center',
            // markers: true,
            toggleClass: { targets: "#navigator2_5_link", className: "technologyMultiplanet_navigator_element_active" },
        }
    })
    gsap.to('#navSecondPlanet', {
        x: -500,
        scrollTrigger: {
            trigger: '.technologyTokenInfo',
            scrub: 1,
            start: 'top center',
        }
    })


    gsap.fromTo('#navigator2_1_block', {
        opacity: 0,
        y: -100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#navigator2_1_block',
            start: 'top center',
            end: 'end center',
            scrub: 1,
        }
    })
    gsap.fromTo('#navigator2_2_block', {
        opacity: 0,
        y: -100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#navigator2_2_block',
            start: 'top center',
            end: 'end center',
            scrub: 1,
        }
    })
    gsap.fromTo('#navigator2_3_block', {
        opacity: 0,
        y: -100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#navigator2_3_block',
            start: 'top center',
            end: 'end center',
            scrub: 1,
        }
    })
    gsap.fromTo('#navigator2_4_block', {
        opacity: 0,
        y: -100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#navigator2_4_block',
            start: 'top center',
            end: 'end center',
            scrub: 1,
        }
    })
    gsap.fromTo('#navigator2_5_block', {
        opacity: 0,
        y: -100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#navigator2_5_block',
            start: 'top center',
            end: 'end center',
            scrub: 1,
        }
    })
}

export default navSecond