import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);

const slider = document.querySelector('.price__swiper');
let mySwiper;


function mobileSlider(){
  if (window.innerWidth<768 && slider.dataset.mobile=="false"){
    mySwiper = new Swiper(slider, {
      pagination: {
        el: '.price__pagination',
      },
      slidesPerView: 'auto',
      spaceBetween: 16,
    });
    
    slider.dataset.mobile="true"
  }
  else{
    slider.dataset.mobile="false"
    if (slider.classList.contains('swiper-initialized')){
      mySwiper.destroy();
    }
  }
}


window.addEventListener('resize',function(){
  mobileSlider();
});


mobileSlider();