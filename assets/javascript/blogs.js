var swiper = new Swiper(".blogs", {
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

