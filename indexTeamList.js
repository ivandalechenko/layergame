const teamList = (ScrollTrigger, gsap) => {
    // Листалка олегов
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

    const filler = gsap.to('.indexTeam_header_filler', {
        width: "100%",
        ease: 'none'
    })


    ScrollTrigger.create({
        trigger: ".indexTeam",
        start: "top 20%",
        end: () => `+=${(getScrollAmount() * -1)}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true
    })
    ScrollTrigger.create({
        trigger: ".indexTeam",
        start: "top 20%",
        end: () => `+=${(getScrollAmount() * -1)}`,
        animation: filler,
        scrub: 1,
        // markers: true
    })



}

export default teamList