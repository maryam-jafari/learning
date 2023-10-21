// var swiper = new Swiper(".about", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//
//             return '<div className="slide-content ' + className + '" ><img\n' +
//                 '                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/07/1-e1503473231691-130x130.jpg">\n' +
//                 '            </div>'
//         },
//     }
// });
var menu = ['swiper.webp', 'girl-1797769.webp', 'girl-1797769.webp','swiper.webp', 'girl-1797769.webp', 'girl-1797769.webp']
var mySwiper = new Swiper ('.about', {
    // If we need pagination
    loop:true,

    pagination: {

        el: '.swiper-pagination',
        clickable: true,

        renderBullet: function (index, className) {

            return '<img class="slide-content ' + className + '"  src="./assets/images/'+menu[index]+'">'

        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
document.querySelectorAll(".swiper-pagination-bullet").forEach(function (val){
    val.addEventListener("click",function (){
        document.querySelectorAll(".swiper-pagination-bullet").forEach(function (val2){
            val2.style.display="none";
        })
        if(val.nextElementSibling){
            val.nextElementSibling.style.display="inline-block";
            val.nextElementSibling.style.display="inline-block";
        }

        val.previousElementSibling.style.display="inline-block";
        // val.nextElementSibling.style.margin="-24px !important";
        // val.previousElementSibling.style.margin="-24 !important";

    })
})

document.querySelector(".swiper-pagination-bullet-active").nextElementSibling.style.display="inline-block";
// document.querySelector(".swiper-pagination-bullet-active").previousElementSibling.style.display="inline-block";
// document.querySelector(".swiper-pagination-bullet-active").nextElementSibling.style.margin="-24px !important";
// document.querySelector(".swiper-pagination-bullet-active").previousElementSibling.style.marginRight="-70";
document.querySelector(".swiper-button-prev").addEventListener("click",function (){

    document.querySelector(".swiper-pagination-bullet-active").click();
})
document.querySelector(".swiper-button-next").addEventListener("click",function (){

    document.querySelector(".swiper-pagination-bullet-active").click();
})