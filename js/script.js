// togle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#burger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// klik diluar navbar untuk menghilangkan nav
const mu = document.querySelector('#burger-menu');
document.addEventListener('click', function (e) {
    if (!mu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});