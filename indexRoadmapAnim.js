const indexRoadmap = (gsap) => {
    gsap.fromTo('#indexRoadmap_element1', {
        opacity: 0,
        y: -100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#indexRoadmap_element1',
            scrub: 1,
            // markers: true,
            start: 'top 60%',
            end: '100% 60%',
        }
    })
    gsap.fromTo('#indexRoadmap_element2', {
        opacity: 0,
        y: -100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#indexRoadmap_element2',
            scrub: 1,
            // markers: true,
            start: 'top 60%',
            end: '100% 60%',
        }
    })
    gsap.fromTo('#indexRoadmap_element3', {
        opacity: 0,
        y: -100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#indexRoadmap_element3',
            scrub: 1,
            // markers: true,
            start: 'top 60%',
            end: '100% 60%',
        }
    })
    gsap.to('#indexRoadmap_planetBlue', {
        y: -300,
        scrollTrigger: {
            trigger: '#indexRoadmap_planetBlue',
            scrub: 1,
            // markers: true,
            start: '-200 60%',
            end: '800 60%',
        }
    })
    gsap.to('#indexRoadmap_planetRed', {
        y: -200,
        scrollTrigger: {
            trigger: '#indexRoadmap_planetRed',
            scrub: 1,
            // markers: true,
            start: '-400 60%',
            end: '800 60%',
        }
    })


}

export default indexRoadmap