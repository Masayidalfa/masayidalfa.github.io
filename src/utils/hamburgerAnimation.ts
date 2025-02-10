export function initializeHamburgerAnimation(): void {

const hamburger = document.querySelector('#hamburger');

hamburger?.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
});
};