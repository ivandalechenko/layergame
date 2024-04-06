const navFirst = (gsap) => {
    gsap.to('#navigatorMenu1', {
        scrollTrigger: {
            trigger: '#navigatorBlock1',
            scrub: 1,
            start: '-100px top',
            end: '95% top',
            toggleClass: { targets: "#navigatorMenu1", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navigatorMenu2', {
        scrollTrigger: {
            trigger: '#navigatorBlock2',
            scrub: 1,
            start: '-100px top',
            end: '95% top',
            // markers: true,

            toggleClass: { targets: "#navigatorMenu2", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navigatorMenu3', {
        scrollTrigger: {
            trigger: '#navigatorBlock3',
            scrub: 1,
            start: '-100px top',
            end: '95% top',

            toggleClass: { targets: "#navigatorMenu3", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navigatorMenu4', {
        scrollTrigger: {
            trigger: '#navigatorBlock4',
            scrub: 1,
            start: '-100px top',
            end: '95% top',
            toggleClass: { targets: "#navigatorMenu4", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navFirstPlanet', {
        y: 6400,
        ease: 'none',
        scrollTrigger: {
            trigger: '#navigatorContent',
            scrub: 0,
            start: 'top bottom',
            // markers: true
        }
    })

    gsap.fromTo('#navigatorBlock1', {
        opacity: 0,
        y: 100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#navigatorBlock1',
            start: 'top center',
            end: 'end center',
            scrub: 1,
        }
    })
    gsap.fromTo('#navigatorBlock2', {
        opacity: 0,
        y: 100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#navigatorBlock2',
            start: 'top center',
            end: 'end center',
            scrub: 1,
        }
    })
    gsap.fromTo('#navigatorBlock3', {
        opacity: 0,
        y: 100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#navigatorBlock3',
            start: 'top center',
            end: 'end center',
            scrub: 1,
        }
    })
    gsap.fromTo('#navigatorBlock4', {
        opacity: 0,
        y: 100,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '#navigatorBlock4',
            start: 'top center',
            end: 'end center',
            scrub: 1,
        }
    })

    function restartAnimation(gsap) {
        // Удаление текущей анимации
        gsap.killTweensOf("#navigator");

        gsap.to('#navigator', {
            y: document.getElementById('navigatorContent').getBoundingClientRect().height - 400,
            ease: 'none',
            pin: true,
            scrollTrigger: {
                trigger: '#navigatorContent',
                scrub: 0,
                start: '400px top',
                end: '100% top'
            }
        })

    }

    // Добавление обработчика события изменения размера окна
    window.addEventListener("resize", restartAnimation);

    // Запуск анимации при загрузке страницы
    restartAnimation(gsap);

}

export default navFirst