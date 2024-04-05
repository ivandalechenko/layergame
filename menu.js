const menu = (gsap) => {

    document.getElementById('menuOpener').onclick = () => {
        document.getElementById('menu').classList.toggle('menu_open')
    }

    document.getElementById('menuNavLinkTechnology').onmouseenter = () => {
        gsap.to('#menuHeader', { duration: 2, text: { value: "Build with LayerGame" } })
        gsap.to('#menuSubheader', { duration: 2, delay: 0.5, text: { value: "Millions Of Possibilities, Do Not Think About Anything Superfluous Except The Game" } })
        gsap.to('#menuLinks', { duration: 1, delay: 1, opacity: 1 })
        gsap.to('#menuTwitterLink', { duration: 1, delay: 1.5, opacity: 0 })
        gsap.to('#menuTgLink', { duration: 1, delay: 1.5, opacity: 0 })
        gsap.to('#menuDocAndDiscordLink', { duration: 0.5, text: { value: "Docs" } })
        document.getElementById('menuDocAndDiscordLink').href = 'google.com'

    }
    document.getElementById('menuNavLinkOurMission').onmouseenter = () => {
        gsap.to('#menuHeader', { duration: 2, text: { value: "Get Into Our Mission" } })
        gsap.to('#menuSubheader', { duration: 2, delay: 1, text: { value: "A Whole Galaxy Of Incredible Adventures" } })
        gsap.to('#menuLinks', { duration: 1, delay: 1, opacity: 1 })
        gsap.to('#menuTwitterLink', { duration: 1, delay: 0.5, opacity: 1 })
        gsap.to('#menuTgLink', { duration: 1, delay: 0.5, opacity: 1 })
        gsap.to('#menuDocAndDiscordLink', { duration: 0.5, text: { value: "Discord" } })
        document.getElementById('menuDocAndDiscordLink').href = 'youtube.com'

    }
}

export default menu