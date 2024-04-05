const indexGetting = (gsap) => {
    gsap.fromTo('#indexKnow_header', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#indexKnow_element_1',
            // markers: true,
            scrub: 1,
            start: '-200 60%',
            end: '0 60%',
        }
    })
    gsap.fromTo('#indexKnow_element_1', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#indexKnow_element_1',
            // markers: true,
            scrub: 1,
            start: '0 60%',
            end: '300 60%',
        }
    })
    gsap.fromTo('#indexKnow_element_line1', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#indexKnow_element_1',
            // markers: true,
            scrub: 1,
            start: '300 60%',
            end: '500 60%',
        }
    })
    gsap.fromTo('#indexKnow_element_2', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#indexKnow_element_1',
            // markers: true,
            scrub: 1,
            start: '500 60%',
            end: '800 60%',
        }
    })
    gsap.fromTo('#indexKnow_element_line2', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#indexKnow_element_1',
            // markers: true,
            scrub: 1,
            start: '800 60%',
            end: '1000 60%',
        }
    })
    gsap.fromTo('#indexKnow_element_3', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#indexKnow_element_1',
            // markers: true,
            scrub: 1,
            start: '1000 60%',
            end: '1300 60%',
        }
    })
    gsap.to('#indexKnow_decorBluePlanet', {
        y: 200,
        x: -300,
        scrollTrigger: {
            trigger: '#indexKnow_decorBluePlanet',
            // markers: true,
            scrub: 1,
            start: 'top 60%',
            end: '1000 60%',
        }
    })
    gsap.to('#indexKnow_decorRedPlanet', {
        y: 100,
        x: 100,
        scrollTrigger: {
            trigger: '#indexKnow_decorRedPlanet',
            // markers: true,
            scrub: 1,
            start: 'top 60%',
            end: '1000 60%',
        }
    })
}

export default indexGetting