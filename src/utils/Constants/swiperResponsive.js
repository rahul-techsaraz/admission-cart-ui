export const swiperResponsive = (breakpoints)=>{
    const responsive = {
        1400:{
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 50,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 40,
        },
        640:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        460:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
    }
    if(!breakpoints){
        return responsive;
    }
    return {...responsive, ...breakpoints};
}