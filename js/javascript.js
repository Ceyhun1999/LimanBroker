const swiper = new Swiper(".swiper", {
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
const menu = document.querySelector(".menu");
const lang = document.querySelector(".lang");
const dropdownLang = document.querySelector(".dropdown__lang");
const langArrow = document.querySelector(".lang-arrow");

const langMob = document.querySelector(".lang-mobile");
const dropdownLangMob = document.querySelector(".dropdown__lang-mobile");
const langArrowMob = document.querySelector(".lang-arrow_mobile");

const btnOpen = document.querySelector(".btn-open");
const questionText = document.querySelectorAll(".question-text");
const btnWp = document.querySelector(".btn_whatsappIndex");

questionText.forEach((item) => {
    const questionDrop = item.nextElementSibling;
    const questionBtn = item.querySelector(".question-btn");

    item.addEventListener("click", () => {
        questionDrop.classList.toggle("question-active");
        questionBtn.classList.toggle("question-active__btn");
    });
});

function hoverEffectFunc1() {
    /*header.classList.add("headerHoverBackg"); ---------------1 */
    lang.classList.add("textHoverColorLinks");
    langMob.classList.add("textHoverColorLinks");
    langArrow.classList.add("borderHoverLang");
    langArrowMob.classList.add("borderHoverLang");
}

function hoverEffectFunc2() {
    /*header.classList.remove("headerHoverBackg") ---------------1; */
    lang.classList.remove("textHoverColorLinks");
    langMob.classList.remove("textHoverColorLinks");
    langArrow.classList.remove("borderHoverLang");
    langArrowMob.classList.remove("borderHoverLang");
}

menu.addEventListener("mouseover", () => {
    /*hoverEffectFunc1();*/
    /*links.forEach((item) => item.classList.add("textHoverColorLinks"));*/
});

menu.addEventListener("mouseout", () => {
    /*hoverEffectFunc2();*/
    /*links.forEach((item) => item.classList.remove("textHoverColorLinks"));*/
});

links.forEach((item) => item.addEventListener("mouseover", () => item.classList.add("linkHoverStyle")));
links.forEach((item) => item.addEventListener("mouseout", () => item.classList.remove("linkHoverStyle")));

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
        header.classList.add("headerHoverBackg2");
        lang.classList.add("textHoverColorLinks2");
        langMob.classList.add("textHoverColorLinks2");
        langArrow.classList.add("borderHoverLang2");
        langArrowMob.classList.add("borderHoverLang2");
        btnOpen.classList.add("btnOpenHover");
        links.forEach((item) => item.classList.add("textHoverColorLinks2"));
    } else {
        header.classList.remove("headerHoverBackg2");
        lang.classList.remove("textHoverColorLinks2");
        langMob.classList.remove("textHoverColorLinks2");
        langArrow.classList.remove("borderHoverLang2");
        langArrowMob.classList.remove("borderHoverLang2");
        btnOpen.classList.remove("btnOpenHover");
        links.forEach((item) => item.classList.remove("textHoverColorLinks2"));
    }
});

lang.addEventListener("click", () => {
    dropdownLang.classList.toggle("animationDrowLang");
    langArrow.classList.toggle("animationArrowLang");
});

langMob.addEventListener("click", () => {
    dropdownLangMob.classList.toggle("animationDrowLang");
    langArrowMob.classList.toggle("animationArrowLang");
});

const owlDots = document.querySelectorAll(".owl-dot");
owlDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        swiper.slideTo(index);
    });
});
swiper.on("slideChange", function () {
    const activeIndex = swiper.activeIndex;

    const prevIndex = this.previousIndex;
    if (prevIndex >= 0) {
        owlDots[prevIndex].classList.remove("active");
    }

    if (!owlDots[activeIndex].classList.contains("active")) {
        owlDots[activeIndex].classList.add("active");
    }

    if (this.isEnd) {
        setTimeout(() => {
            swiper.slideTo(0);
            swiper.update();
        }, 2500);
    }
});


