









































const skill_point_list = document.querySelectorAll('.skillpoint .counter');

skill_point_list.forEach(changetext)

function changetext(element) {
    let text = parseInt(element.innerHTML)
    element.innerHTML = "0"
    const updateCounter = () => {
        const target = +element.getAttribute("data-target");
        const count = +element.innerText;
        const increment = target / 100;
        if (count < target) {
            element.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
        }
        else element.innerText = target;
    }

    updateCounter()
}

function setchangesrefresh(){
    skill_point_list.forEach(changetext)
}
if(document.querySelectorAll(".coursescard .card").length>0){
    let co=document.querySelectorAll(".coursescard .card").length
    if(co%2!=0){
        document.querySelector(".coursescard .parent-btn").style.width='30%';
    }
    else{
        document.querySelector(".coursescard .parent-btn").style.width='100%';
    }
}


let lastScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
document.querySelector(".quick-direction").style.top="100%";
window.addEventListener(
    'scroll',
    function handleScroll() {
        const scrollTopPosition =
            window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTopPosition>80){
            document.querySelector(".quick-direction").style.top="93%";
        }
        else{
            document.querySelector(".quick-direction").style.top="100%";
        }
        if (scrollTopPosition > lastScrollTop && scrollTopPosition>20 ) {
            document.querySelector(".header").style.top ="-81px"
            document.querySelector(".header").style.boxShadow="0 10px 25px 0 rgba(24,23,24,.2)"
        } else if (scrollTopPosition < lastScrollTop) {
            document.querySelector(".header").style.top ="0px"
            document.querySelector(".header").style.boxShadow="0 10px 25px 0 rgba(24,23,24,.2)"
            if(scrollTopPosition==0){
                document.querySelector(".header").style.boxShadow="unset"
            }
        }

        lastScrollTop =scrollTopPosition <= 0 ? 0 : scrollTopPosition;

    },
    false,
);
const scrollWindow = function () {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 80);
            scrollWindow();
        }, 10);
    }
};
document.querySelector(".quick-direction").addEventListener("click", scrollWindow);
let menu = document.querySelectorAll('.Sec')
for (const myElement of menu) {
    let menubar = myElement.querySelector('.secmenubar')
    myElement.addEventListener("mouseenter", () => {
        menubar.classList.remove('secmenubargrowupanimation')
        menubar.classList.add('secmenubargrowdownanimation')
    });

    myElement.addEventListener("mouseleave", () => {
        menubar.classList.remove('secmenubargrowdownanimation')
        menubar.classList.add('secmenubargrowupanimation')
    });
}
let icon_menu=document.querySelectorAll(".ul-menu .sub .fa-solid");
icon_menu.forEach(function (val){
    val.addEventListener("click",function (){
        if(val.parentElement.nextElementSibling.classList.contains("dno")){
            val.parentElement.nextElementSibling.classList.remove("dno")
        }
        else{
            val.parentElement.nextElementSibling.classList.add("dno")
        }
    })
})
document.querySelector(".berger_menu .m-menu__header .fa-xmark").addEventListener("click",function (){
    document.querySelector(".berger_menu .m-menu").style.left="-100vw";
    document.querySelector(".berger_menu .m-menu__overlay").style.display="none";
})
/* transform: translate3d(0, 0, 0);
})

 */
document.querySelector(".berger_menu .fa-bars").addEventListener("click",function (){

    document.querySelector(".berger_menu .m-menu").style.left="0";
    document.querySelector(".berger_menu .m-menu__overlay").style.display="block";
})