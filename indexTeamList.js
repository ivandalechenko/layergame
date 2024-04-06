const teamList = (ScrollTrigger, gsap) => {
    // Листалка олегов
    const races = document.querySelector(".indexTeam_elements");
    const containers = document.getElementsByClassName('container');
    const containerWidth = containers[0].getBoundingClientRect().width;
    // console.log(`Ширина всей хуйни что надо двигать ${races.scrollWidth}`)
    // console.log(`Ширина бади ${window.innerWidth}`);
    // console.log(getScrollAmount());
    function getScrollAmount() {
        let racesWidth = races.scrollWidth;
        return (-(racesWidth - window.innerWidth + (window.innerWidth - containerWidth + 30)));
    }

    const tween = gsap.to(races, {
        x: getScrollAmount,
        ease: "none",
    });

    const filler = gsap.to('.indexTeam_header_filler', {
        width: "100%",
        ease: 'none'
    })


    gsap.fromTo('.indexStarHider', {
        opacity: 0,
    }, {
        opacity: 1,
        scrollTrigger: {
            duration: 0.5,
            trigger: '.indexTeam',
            scrub: 1,
            markers: true,
            start: 'top 50%',
            end: 'top 50%',
        }
    })
    gsap.fromTo('.indexStarHider', {
        opacity: 1,
    }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.indexTeam',
            scrub: 1,
            duration: 0.5,
            markers: true,
            start: '500 50%',
            end: '500 50%',
        }
    })


    ScrollTrigger.create({
        trigger: ".indexTeam",
        start: "top 20%",
        end: () => `+=${(getScrollAmount() * -1) / 2}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true
    })
    ScrollTrigger.create({
        trigger: ".indexTeam",
        start: "top 20%",
        end: () => `+=${(getScrollAmount() * -1) / 2}`,
        animation: filler,
        scrub: 1,
        // markers: true
    })



}

export default teamList