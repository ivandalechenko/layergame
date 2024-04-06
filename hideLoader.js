const loader = document.getElementById('loader');

loader.style.transition = '500ms opacity';
setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
}, 1000);