const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    breakpoints:{
      400:{
        slidesPerView:1,
        spaceBetween: 50,
        //freeMode: true,
       }, 600:{
        slidesPerView:2,
        spaceBetween: 50,
        //freeMode: true,
       },
      768:{
        slidesPerView: 4,
        spaceBetween: 30,
        //freeMode: true
      },
      850:{
          slidesPerView: 4,
          spaceBetween: 50,
      },1024:{
            spaceBetween: 30,
            slidesPerView: 4,
        },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
 
  })
  const swiper2 = new Swiper('.swiper2', {
      // Optional parameters
      direction: 'horizontal',

      breakpoints:{
        200:{
          slidesPerView:2,
          spaceBetween: 50,
          freeMode: true,
         },
        768:{
          slidesPerView: 4,
          spaceBetween: 50,
          freeMode: true
        },1440:{
          slidesPerView: 6,
          spaceBetween: 50,
        }
      },
      // If we need pagination

      slidesPerView: 6,
      spaceBetween: 30,
      freeMode: true,


      // Navigation arrows


      // And if we need scrollbar

  })
  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
})
