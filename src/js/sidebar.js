let sidebar=document.querySelector('.sidebar');
let main=document.querySelector('.main');
let burger=document.querySelector('.navigation__burger');
let closeS=document.querySelector('.sidebar__close');
let notSidebar=document.querySelector('.not-sidebar');


let sideBig = function(){
  if (window.innerWidth>=1440){
    sidebar.classList.remove('hidden');
  }
  else{
    sidebar.classList.add('hidden');
  }
}


burger.addEventListener('click', function(){
  sidebar.classList.remove('hidden');
  main.classList.add('blur');
  notSidebar.classList.remove('hidden');
});

closeS.addEventListener('click', function(){
  sidebar.classList.add('hidden');
  main.classList.remove('blur');
  if (!notSidebar.classList.contains('hidden')){
    notSidebar.classList.add('hidden');
  }
});

notSidebar.addEventListener('click', function(){
  sidebar.classList.add('hidden');
  main.classList.remove('blur');
  if (!notSidebar.classList.contains('hidden')){
    notSidebar.classList.add('hidden');
  }
});

window.addEventListener('resize',function(){
  sideBig();
});


sideBig();