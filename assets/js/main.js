window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    
    const clientsCounter = document.getElementById('clientCount');
    const servicesCounter = document.getElementById('serviceCount');
    const doctorsCounter = document.getElementById('doctorCount');
    
    let onlyOnce = true;
    
    window.onscroll = function() {
        start();
    }
    
    function start() {
        if (window.scrollY > 0 && onlyOnce) {
            onlyOnce = false;
            if (clientsCounter && servicesCounter && doctorsCounter) {
                animateValue(clientsCounter, 0, clientsCounter.innerText, 3000);
                animateValue(servicesCounter, 0, servicesCounter.innerText, 3000);
                animateValue(doctorsCounter, 0, doctorsCounter.innerText, 3000);
            }
        }
    }
    
    function animateValue(obj, start, end, duration) {
        
        if (start === end) {
            return;
        }
        
        const range = end - start;
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const timer = setInterval(() => {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
});

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

const categoryPage = document.getElementById('categorySection');
if (categoryPage) {
    const categorySwitcherTexts = document.querySelectorAll('.promotion-select-switcher .uk-subnav-pill>*>a');
    const categorySwitcherSelector = document.querySelector('.category-switcher-selector');
    const categorySwitcherSelectorWrapper = document.querySelector('.category-switcher-selector-wrapper');
    const categorySwitcherModal = document.querySelector('.category-switcher-modal');
    categorySwitcherTexts.forEach(function(el) {
       el.addEventListener('click', element => {
           categorySwitcherSelector.textContent = element.target.innerHTML;
       });
    });
    
  
}