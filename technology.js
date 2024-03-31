import './technology.scss'

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


