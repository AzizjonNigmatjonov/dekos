window.onload = function() {
    const el = document.getElementById('overlay');
    el.style.display = 'none';
};

const ukContainers = document.querySelectorAll('.uk-container');
let large = 1540
if (window.innerWidth < large) {
    ukContainers.forEach(element => {
        element.classList.remove('uk-container-large')
    });
}