let sidebarChat=document.querySelector('.sidebar__chat');
let navigationChat=document.querySelector('.navigation__chat');
let chat=document.querySelector('.feedback');
let closeChat=document.querySelector('.close-chat');
let sidebar=document.querySelector('.sidebar');
let main=document.querySelector('.main');
let notSidebar=document.querySelector('.not-sidebar');


sidebarChat.addEventListener('click', function(){
  chat.classList.remove('hidden');
  sidebar.classList.add('blur');
  main.classList.add('blur');
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
});

closeChat.addEventListener('click', function(){
  chat.classList.add('hidden');
  sidebar.classList.remove('blur');
  main.classList.remove('blur');
});