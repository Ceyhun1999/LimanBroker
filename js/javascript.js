const swiper = new Swiper(".swiper", {
    // Optional parameters

    slidesPerView: 1,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,

    },

    navigation: {
        nextEl: ".my-next-button",
        prevEl: ".my-prev-button",
    },
});

const nav = document.querySelector(".header__navbar");
const links = document.querySelectorAll(".menu__item-link");
const header = document.querySelector("header");
const lang = document.querySelector(".lang");
const menu = document.querySelector(".menu");
const dropdownLang = document.querySelector(".dropdown__lang");
const langArrow = document.querySelector(".lang-arrow");
const btnOpen = document.querySelector(".btn-open");

function hoverEffectFunc1() {
    header.classList.add("headerHoverBackg");
    lang.classList.add("textHoverColorLinks");
    langArrow.classList.add("borderHoverLang");
}

function hoverEffectFunc2() {
    header.classList.remove("headerHoverBackg");
    lang.classList.remove("textHoverColorLinks");
    langArrow.classList.remove("borderHoverLang");
}

menu.addEventListener("mouseover", () => {
    hoverEffectFunc1();
    links.forEach((item) => item.classList.add("textHoverColorLinks"));
});

menu.addEventListener("mouseout", () => {
    hoverEffectFunc2();
    links.forEach((item) => item.classList.remove("textHoverColorLinks"));
});

links.forEach((item) => item.addEventListener("mouseover", () => item.classList.add("linkHoverStyle")));
links.forEach((item) => item.addEventListener("mouseout", () => item.classList.remove("linkHoverStyle")));

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
        header.classList.add("headerHoverBackg2");
        lang.classList.add("textHoverColorLinks2");
        langArrow.classList.add("borderHoverLang2");
        btnOpen.classList.add("btnOpenHover");
        links.forEach((item) => item.classList.add("textHoverColorLinks2"));
    } else {
        header.classList.remove("headerHoverBackg2");
        lang.classList.remove("textHoverColorLinks2");
        langArrow.classList.remove("borderHoverLang2");
        btnOpen.classList.remove("btnOpenHover");
        links.forEach((item) => item.classList.remove("textHoverColorLinks2"));
    }
});

lang.addEventListener("click", () => {
    dropdownLang.classList.toggle("animationDrowLang");
    langArrow.classList.toggle("animationArrowLang");
});
