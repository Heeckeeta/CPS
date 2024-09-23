import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);

const slider = document.querySelector('.companys__swiper');
let mySwiper;

let showMore=document.querySelector('.show-companys');
let notShow=document.querySelector('.not-show-companys');
let slides=slider.querySelectorAll('.companys-slide:nth-child(n+7)');


function mobileSlider(){
  if (window.innerWidth<768 && slider.dataset.mobile=="false"){
    mySwiper = new Swiper(slider, {
      pagination: {
        el: '.companys-pagination',
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

let addShow=function(){
  if (window.innerWidth>=768){
    if (showMore.classList.contains('hidden') && notShow.classList.contains('hidden')){
      showMore.classList.remove('hidden');
      for (let i=0;i<5;i++){
        slides[i].classList.add('hidden');
      }
      if (window.innerWidth>=1440){
        slides[0].classList.remove('hidden');
        slides[1].classList.remove('hidden');
      }
    }
  }
  else{
    if (!showMore.classList.contains('hidden')){
      showMore.classList.add('hidden');
    }
    if (!notShow.classList.contains('hidden')){
      notShow.classList.add('hidden');
    }
    for (let i=0;i<5;i++){
      if (slides[i].classList.contains('hidden')){
        slides[i].classList.remove('hidden');
      }
    }
  }
}


showMore.addEventListener('click',function(){
  showMore.classList.add('hidden');
  notShow.classList.remove('hidden');
  for (let i=0;i<5;i++){
    slides[i].classList.remove('hidden');
  }
});

notShow.addEventListener('click',function(){
  notShow.classList.add('hidden');
  showMore.classList.remove('hidden');
  for (let i=0;i<5;i++){
    slides[i].classList.add('hidden');
  }
  if (window.innerWidth>=1440){
    slides[0].classList.remove('hidden');
    slides[1].classList.remove('hidden');
  }
});

window.addEventListener('resize',function(){
  mobileSlider();
  addShow();
});


mobileSlider();
addShow();