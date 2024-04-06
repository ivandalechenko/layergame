const navFirst = (gsap) => {
    gsap.to('#navigator', {
        y: document.getElementById('navigatorContent').getBoundingClientRect().height - 400 - (document.getElementById('navigatorContent').getBoundingClientRect().height * 0.1),
        ease: 'none',
        pin: true,

        scrollTrigger: {
            trigger: '#navigatorContent',
            scrub: true,
            start: '400px top',
            end: '90% top'
        }
    })
    gsap.to('#navigatorMenu1', {
        scrollTrigger: {
            trigger: '#navigatorBlock1',
            scrub: 1,
            start: '-10px top',
            end: '95% top',
            toggleClass: { targets: "#navigatorMenu1", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navigatorMenu2', {
        scrollTrigger: {
            trigger: '#navigatorBlock2',
            scrub: 1,
            start: '-10px top',
            end: '95% top',

            toggleClass: { targets: "#navigatorMenu2", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navigatorMenu3', {
        scrollTrigger: {
            trigger: '#navigatorBlock3',
            scrub: 1,
            start: '-10px top',
            end: '95% top',

            toggleClass: { targets: "#navigatorMenu3", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navigatorMenu4', {
        scrollTrigger: {
            trigger: '#navigatorBlock4',
            scrub: 1,
            start: '-10px top',
            end: '95% top',
            toggleClass: { targets: "#navigatorMenu4", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navFirstPlanet', {
        y: 4000,
        scrollTrigger: {
            trigger: '#navigatorContent',
            scrub: 1,
            start: 'top bottom',
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
                scrub: true,
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