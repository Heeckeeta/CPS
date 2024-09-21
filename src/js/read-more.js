let text320=document.querySelector('.first-block__text320--more');
let text768=document.querySelector('.first-block__text768--more');
let text=document.querySelector('.first-block__text--more');
let readMore=document.querySelector('.read');
let notRead=document.querySelector('.not-read');


readMore.addEventListener('click', function(){
  text320.classList.remove('hidden');
  text768.classList.remove('hidden');
  text.classList.remove('hidden');
  readMore.classList.add('hidden');
  notRead.classList.remove('hidden');
});

notRead.addEventListener('click', function(){
  text320.classList.add('hidden');
  text768.classList.add('hidden');
  text.classList.add('hidden');
  readMore.classList.remove('hidden');
  notRead.classList.add('hidden');
});