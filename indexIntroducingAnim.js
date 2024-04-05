const indexIntroducing = (gsap) => {
    gsap.fromTo('.indexIntroducing', {
        opacity: 0,
        scale: 0.8,
    }, {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
            trigger: '.indexIntroducing',
            scrub: 1,
            // markers: true,
            start: 'top 70%',
            end: '100% 70%',
        }
    })
    gsap.to(".comet1", {
        opacity: 1,
        ease: "none",
        repeat: -1,
        duration: 20,
        motionPath: {
            path: '#comet1Path',
            align: '#comet1Path',
            autoRotate: 179,
            alignOrigin: [.5, .5],
        },
    })
    gsap.to(".comet2", {
        ease: "none",
        repeat: -1,
        duration: 8,
        motionPath: {
            path: '#comet2Path',
            align: '#comet2Path',
            autoRotate: 179,
            alignOrigin: [.5, .5],
        },
    })
    gsap.to(".comet4", {
        ease: "none",
        repeat: -1,
        duration: 32,
        motionPath: {
            path: '#comet4Path',
            align: '#comet4Path',
            autoRotate: 179,
            alignOrigin: [.5, .5],
        },
    })
    gsap.to(".comet3", {
        ease: "none",
        repeat: -1,
        duration: 11,
        motionPath: {
            path: '#comet3Path',
            align: '#comet3Path',
            autoRotate: 179,
            alignOrigin: [.5, .5],
        },
    })
}

export default indexIntroducing