let sidebarCall=document.querySelector('.sidebar__call');
let navigationCall=document.querySelector('.navigation__call');
let call=document.querySelector('.call');
let closeCall=document.querySelector('.close-call');
let sidebar=document.querySelector('.sidebar');
let main=document.querySelector('.main');
let notSidebar=document.querySelector('.not-sidebar');


sidebarCall.addEventListener('click', function(){
  call.classList.remove('hidden');
  sidebar.classList.add('blur');
  main.classList.add('blur');
  if (window.innerWidth<1440){
    sidebar.classList.add('hidden');
    if (window.innerWidth>=768){
      notSidebar.classList.add('hidden');
    }
  }
});

navigationCall.addEventListener('click', function(){
  call.classList.remove('hidden');
  sidebar.classList.add('blur');
  main.classList.add('blur');
});

closeCall.addEventListener('click', function(){
  call.classList.add('hidden');
  sidebar.classList.remove('blur');
  main.classList.remove('blur');
});