var swiper = new Swiper(".blog", {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {

        el: '.swiper-pagination',
        clickable: true,


    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
let height_asid=document.querySelector(".blogs-box .asid-box").scrollHeight;
let wid_leftbox=document.querySelector(".blogs-box .left-box").scrollWidth;
let wid_asidbox=document.querySelector(".blogs-box .asid-box").scrollWidth;

