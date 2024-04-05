const animOrbit = (gsap) => {

    document.getElementById('orbitsAndPlanetSVG').style.opacity = 1;
    gsap.to("#indexUspPlanet1", {
        ease: "none",
        repeat: -1,
        duration: 50,
        motionPath: {
            path: '#indexUspOrbit1',
            align: '#indexUspOrbit1',
            alignOrigin: [.5, .5],
            start: 0.4,
            end: 1,
        },
    })
    gsap.to("#indexUspPlanet2", {
        ease: "none",
        repeat: -1,
        duration: 120,
        motionPath: {
            path: '#indexUspOrbit2',
            align: '#indexUspOrbit2',
            alignOrigin: [.5, .5],
            start: 0.6,
            end: 1,
        },
    })
    gsap.to("#indexUspPlanet3", {
        ease: "none",
        repeat: -1,
        duration: 80,
        motionPath: {
            path: '#indexUspOrbit3',
            align: '#indexUspOrbit3',
            alignOrigin: [.5, .5],
            start: 0.5,
            end: 1,
        },
    })

}

export default animOrbit