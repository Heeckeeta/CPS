let sidebarCall=document.querySelector('.sidebar__call');
let navigationCall=document.querySelector('.navigation__call');
let call=document.querySelector('.call');
let closeCall=document.querySelector('.close-call');
let sidebar=document.querySelector('.sidebar');
let main=document.querySelector('.main');
let notSidebar=document.querySelector('.not-sidebar');
let notModal=document.querySelector('.not-modal');


sidebarCall.addEventListener('click', function(){
  call.classList.remove('hidden');
  sidebar.classList.add('blur');
  main.classList.add('blur');
  notModal.classList.remove('hidden');
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
  notModal.classList.remove('hidden');
});

closeCall.addEventListener('click', function(){
  call.classList.add('hidden');
  sidebar.classList.remove('blur');
  main.classList.remove('blur');
  notModal.classList.add('hidden');
});

 notModal.addEventListener('click', function(){
   call.classList.add('hidden');
   sidebar.classList.remove('blur');
   main.classList.remove('blur');
   notModal.classList.add('hidden');
});

document.addEventListener('keydown', function(evt){
  if ((!call.classList.contains('hidden')) && evt.keyCode===27){
    call.classList.add('hidden');
    sidebar.classList.remove('blur');
    main.classList.remove('blur');
    notModal.classList.add('hidden');
  }
});