const themeToggle = document.querySelector('#toggle-container');
const circle = document.querySelector('#circle');
const main = document.querySelector('#main');
let dark=false;
themeToggle.addEventListener('click', () => {
    dark=!dark;

    if (dark) {
        circle.style.transform = 'translateX(100%)';
        main.classList.remove('bg-white');
        main.classList.add('bg-gray-900');
        circle.classList.add('bg-gray-900');
        circle.classList.remove('bg-white');

    } else {
        circle.style.transform = 'translateX(0)';
        main.classList.add('bg-white');
        main.classList.remove('bg-gray-900');
        circle.classList.remove('bg-gray-900');
        circle.classList.add('bg-white');
    }
});