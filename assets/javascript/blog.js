var swiper = new Swiper(".blog", {
    slidesPerView: 3,
    spaceBetween: 30,



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        325:{
            slidesPerView:1,
            spaceBetween: 30,
            freeMode: true,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true
        },
        769:{
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true
        }

    },
});
let lastScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener(
    'scroll',
    function handleScroll() {
        const scrollTopPosition =
            window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTopPosition>500){
            if(scrollTopPosition>1500){
                document.querySelector(".footer-fixed").style.bottom="0";
            }
            else{
                document.querySelector(".footer-fixed").style.bottom="-60px";
            }
            if(scrollTopPosition>=document.querySelector("body").offsetHeight - 1300){
                document.querySelector(".info-cours").style.position="absolute";
                document.querySelector(".info-cours").style.top="unset";
                document.querySelector(".info-cours").style.bottom="10px";
            }
            else{
                document.querySelector(".info-cours").style.position="fixed";
                document.querySelector(".info-cours").style.top="100px";
            }

        }
        else{

            document.querySelector(".info-cours").style.position="absolute";
            document.querySelector(".info-cours").style.top="75px";
        }

        lastScrollTop =scrollTopPosition <= 0 ? 0 : scrollTopPosition;

    },
    false,
);
let acordian=document.querySelectorAll(".section-box .title-box");
acordian.forEach(function (val,ind){
    val.addEventListener("click",function (){
        if(val.nextElementSibling.classList.contains("close")){
            val.nextElementSibling.classList.remove("close")
        }
        else{
            val.nextElementSibling.classList.add("close")
        }
    })
})