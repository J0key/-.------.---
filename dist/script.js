// hamburger

const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    nav.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != nav) {
        hamburger.classList.remove("hamburger-active");
        nav.classList.add('hidden');
    }
})