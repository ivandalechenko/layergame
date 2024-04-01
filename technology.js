import gsap from 'gsap';
import './technology.scss'
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)

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


    gsap.to('#navigator2', {
        y: document.getElementById('navigator2content').getBoundingClientRect().height / 3,
        ease: 'none',
        scrollTrigger: {
            trigger: '#navigator2content',
            scrub: 1,
            start: '400px top',
            end: "50% top",
        }
    })
    gsap.to('#navigator2_1_link', {
        scrollTrigger: {
            trigger: '#navigator2_1_block',
            scrub: 1,
            start: '-200px center',
            end: '10px center',
            toggleClass: { targets: "#navigator2_1_link", className: "technologyMultiplanet_navigator_element_active" },
            markers: true,
        }
    })
    gsap.to('#navigator2_2_link', {
        scrollTrigger: {
            trigger: '#navigator2_2_block',
            scrub: 1,
            start: '-200px top',
            end: '10px top',
            toggleClass: { targets: "#navigator2_2_link", className: "technologyMultiplanet_navigator_element_active" },
        }
    })
    gsap.to('#navigator2_3_link', {
        scrollTrigger: {
            trigger: '#navigator2_3_block',
            scrub: 1,
            start: '-200px top',
            end: '10px top',
            toggleClass: { targets: "#navigator2_3_link", className: "technologyMultiplanet_navigator_element_active" },
        }
    })
    gsap.to('#navigator2_4_link', {
        scrollTrigger: {
            trigger: '#navigator2_4_block',
            scrub: 1,
            start: '-200px top',
            end: '10px top',
            toggleClass: { targets: "#navigator2_4_link", className: "technologyMultiplanet_navigator_element_active" },
        }
    })
    gsap.to('#navigator2_5_link', {
        scrollTrigger: {
            trigger: '#navigator2_5_block',
            scrub: 1,
            start: '-200px top',
            end: '10px top',
            toggleClass: { targets: "#navigator2_5_link", className: "technologyMultiplanet_navigator_element_active" },
        }
    })
    gsap.to('#navigator', {
        y: document.getElementById('navigatorContent').getBoundingClientRect().height / 1.3,
        ease: 'none',
        scrollTrigger: {
            trigger: '#navigatorContent',
            scrub: 1,
            start: '400px top',
            end: "80% top"
        }
    })

    gsap.to('#navigatorMenu1', {
        scrollTrigger: {
            trigger: '#navigatorBlock1',
            scrub: 1,
            start: '-10px top',
            toggleClass: { targets: "#navigatorMenu1", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navigatorMenu2', {
        scrollTrigger: {
            trigger: '#navigatorBlock2',
            scrub: 1,
            start: '-10px top',
            toggleClass: { targets: "#navigatorMenu2", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navigatorMenu3', {
        scrollTrigger: {
            trigger: '#navigatorBlock3',
            scrub: 1,
            start: '-10px top',
            toggleClass: { targets: "#navigatorMenu3", className: "technologyMultiplanet_navigator_element_active" }
        }
    })
    gsap.to('#navigatorMenu4', {
        scrollTrigger: {
            trigger: '#navigatorBlock4',
            scrub: 1,
            start: '-10px top',
            toggleClass: { targets: "#navigatorMenu4", className: "technologyMultiplanet_navigator_element_active" }
        }
    })


}, 500);