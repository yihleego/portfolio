/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')

themeButton.addEventListener('click', () => {
    const theme = localStorage.theme === 'dark' ? 'light' : 'dark'
    setTheme(theme)
    localStorage.theme = theme;
})

function setTheme(theme) {
    if (!theme) {
        let hours = new Date().getHours();
        theme = hours >= 18 || hours <= 5 ? 'dark' : 'light'
    }
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeButton.classList.add('ri-sun-line');
    } else {
        themeButton.classList.remove('ri-sun-line');
    }
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.profile__theme', {distance: '0px'})
sr.reveal('.profile__border')
sr.reveal('.profile__name', {delay: 500})
sr.reveal('.profile__profession', {delay: 600})
sr.reveal('.profile__social', {delay: 700})
sr.reveal('.profile__info-group', {interval: 100, delay: 700})
sr.reveal('.profile__buttons', {delay: 800})
sr.reveal('.filters__content', {delay: 900})
sr.reveal('.filters', {delay: 1000})

window.onload = function () {
    setTheme(localStorage.theme)
}