import './ourMission.scss'
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
import './ourMissionDecor'
document.getElementById('menuOpener').onclick = () => {
    document.getElementById('menu').classList.toggle('menu_open')
}
import menu from './menu'
menu(gsap)
import hideLoader from './hideLoader.js'



window.onload = function () {
    setTimeout(() => {

        let mm = gsap.matchMedia();
        // USP хедер
        gsap.to('#ourMissionUspText', { duration: 4, text: { value: "Welcome aboard the LAYERGAME Space Station!" } })

        mm.add("(min-width: 800px)", () => {
            // Медиа орбиты
            // Полет ракеты по звёздному небу
            gsap.to("#mediaPlanet1", {
                ease: "none",
                repeat: -1,
                duration: 80,
                motionPath: {
                    path: '#mediaOrbit1',
                    align: '#mediaOrbit1',
                    alignOrigin: [.5, .5],
                    start: 0.5,
                    end: 1,
                },
            })
            gsap.to("#mediaPlanet2", {
                ease: "none",
                repeat: -1,
                duration: 130,
                motionPath: {
                    path: '#mediaOrbit2',
                    align: '#mediaOrbit2',
                    alignOrigin: [.5, .5],
                    start: 0.2,
                    end: 0.85,
                },
            })
            gsap.to("#mediaPlanet3", {
                ease: "none",
                repeat: -1,
                duration: 130,
                motionPath: {
                    path: '#mediaOrbit3',
                    align: '#mediaOrbit3',
                    alignOrigin: [.5, .5],
                    start: 1,
                    end: 0.5,
                },
            })
            gsap.to("#mediaPlanet4", {
                ease: "none",
                repeat: -1,
                duration: 56,
                motionPath: {
                    path: '#d',
                    align: '#d',
                    alignOrigin: [.5, .5],
                    start: 0.5,
                    end: 1,
                },
            })
            // Улёт ракеты на первом экране и скрытие света под ней
            gsap.fromTo("#rocketHero", {
                rotate: 0
            }, {
                y: '-50vh',
                rotate: 0,
                scrollTrigger: {
                    trigger: ".ourMissionUsp",
                    start: 'top top',
                    scrub: 0.5,
                },
            })

            gsap.to("#landLight", {
                opacity: 0,
                scrollTrigger: {
                    trigger: ".ourMissionUsp",
                    start: 'top top',
                    end: 'center top',
                    scrub: 0.5,
                },
            });
            // Роадмап хедер
            gsap.fromTo("#roadMap_header", {
                opacity: 0,
            }, {
                opacity: 1,
                scrollTrigger: {
                    trigger: "#roadMap_header",
                    start: 'top 60%',
                    end: 'end 40%',
                    scrub: 1,
                },
            });

            gsap.fromTo("#aboutOurMission_content", {
                opacity: 0,
                y: -200
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: "#aboutOurMission_content",
                    start: 'center 60%',
                    end: 'center 40%',
                    scrub: 0.5,
                    // markers: true
                },
            });

            // Роадмап
            gsap.fromTo("#roadMap_list_element_q1", {
                opacity: 0,
                y: -100
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: "#roadMap_list_element_q1",
                    start: 'top 60%',
                    end: 'end 40%',
                    scrub: 0.5,
                },
            });

            gsap.fromTo("#roadMap_list_element_q2", {
                opacity: 0,
                x: -100
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: "#roadMap_list_element_q2",
                    start: 'top 60%',
                    end: 'end 40%',
                    scrub: 0.5,
                },
            });

            gsap.fromTo("#roadMap_list_element_q3", {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: "#roadMap_list_element_q3",
                    start: 'top 60%',
                    end: 'end 40%',
                    scrub: 0.5,
                },
            });

            gsap.fromTo("#roadMap_list_element_q4", {
                opacity: 0,
                x: 100
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: "#roadMap_list_element_q4",
                    start: 'top 60%',
                    end: 'end 40%',
                    scrub: 0.5,
                },
            });

        });
        function restartAnimation() {
            // Удаление текущей анимации
            gsap.killTweensOf("#rocketMain");

            let mm = gsap.matchMedia();
            // USP хедер
            gsap.to('#ourMissionUspText', { duration: 4, text: { value: "Welcome aboard the LAYERGAME Space Station!" } })

            mm.add("(min-width: 800px)", () => {
                // Перезапуск анимации
                gsap.to("#rocketMain", {
                    ease: "none",
                    motionPath: {
                        path: '#rocketPath',
                        align: '#rocketPath',
                        alignOrigin: [.5, .3],
                        autoRotate: 90,
                    },
                    scrollTrigger: {
                        trigger: ".roadMapAndAbout",
                        start: '-5% top',
                        end: "75%, top",
                        scrub: 3,
                        // markers: true,
                        onUpdate: function (self) {
                            var progress = self.progress * 100;
                            if (progress >= 5) {
                                gsap.to("#rocketMain", { opacity: 1, duration: 0.5 });
                            }
                            if (progress < 5) {
                                gsap.to("#rocketMain", { opacity: 0, duration: 0.5 });
                            }
                        }
                    },
                });
            })

        }

        // Добавление обработчика события изменения размера окна
        window.addEventListener("resize", restartAnimation);

        // Запуск анимации при загрузке страницы
        restartAnimation();
        hideLoader();

    }, 500);

}
try {
    // Выпадалочки (все)
    const dds = document.getElementsByClassName('ddOpener');
    for (let i = 0; i < dds.length; i++) {
        dds[i].onclick = () => {
            dds[i].classList.toggle('ourMissionFaq_open')
            if (dds[i].getElementsByTagName('img')[0].classList.contains('openerOpen')) {
                setTimeout(() => {
                    dds[i].getElementsByTagName('img')[0].src = "/img/general/plus.svg"
                }, 150);
            } else {
                setTimeout(() => {
                    dds[i].getElementsByTagName('img')[0].src = "/img/general/minus.svg"
                }, 150);
            }
            dds[i].getElementsByTagName('img')[0].classList.toggle('openerOpen')
            dds[i].getElementsByClassName('ourMissionFaq_element_num_text')[0].classList.toggle('gradientText')
            dds[i].getElementsByClassName('ourMissionFaq_element_header_text')[0].classList.toggle('gradientText')



            document.getElementById(dds[i].getAttribute("for")).classList.toggle('ddOpen')
        }
    }
} catch (error) {
}



setTimeout(() => {
    document.getElementById('mediaPlanet1').onclick = () => {
        window.open('https://google.com', '_blank');
    }
    document.getElementById('mediaPlanet2').onclick = () => {
        window.open('https://google.com', '_blank');
    }
    document.getElementById('mediaPlanet3').onclick = () => {
        window.open('https://google.com', '_blank');
    }
    document.getElementById('mediaPlanet4').onclick = () => {
        window.open('https://google.com', '_blank');
    }
}, 1000);
