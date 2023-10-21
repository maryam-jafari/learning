var swiper = new Swiper(".courses", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints:{
        320:{
            slidesPerView:1,
            spaceBetween: 30,
            freeMode: true,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 30,
            freeMode: true
        },1024:{
            slidesPerView: 3,
            spaceBetween: 30,
        }
        ,1025:{
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
});