let sidebarChat=document.querySelector('.sidebar__chat');
let navigationChat=document.querySelector('.navigation__chat');
let chat=document.querySelector('.feedback');
let closeChat=document.querySelector('.close-chat');
let sidebar=document.querySelector('.sidebar');
let main=document.querySelector('.main');
let notSidebar=document.querySelector('.not-sidebar');
let notModal=document.querySelector('.not-modal');


sidebarChat.addEventListener('click', function(){
  chat.classList.remove('hidden');
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

navigationChat.addEventListener('click', function(){
  chat.classList.remove('hidden');
  sidebar.classList.add('blur');
  main.classList.add('blur');
  notModal.classList.remove('hidden');
});

closeChat.addEventListener('click', function(){
  chat.classList.add('hidden');
  sidebar.classList.remove('blur');
  main.classList.remove('blur');
  notModal.classList.add('hidden');
});

notModal.addEventListener('click', function(){
  chat.classList.add('hidden');
  sidebar.classList.remove('blur');
  main.classList.remove('blur');
  notModal.classList.add('hidden');
});

document.addEventListener('keydown', function(evt){
 if ((!chat.classList.contains('hidden')) && evt.keyCode===27){
   chat.classList.add('hidden');
   sidebar.classList.remove('blur');
   main.classList.remove('blur');
   notModal.classList.add('hidden');
 }
});