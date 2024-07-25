/*Declaraciones: */

const menuBtn = document.querySelector('nav .btn');
const menuList = document.querySelector('nav .menu');
const mapBtn = document.querySelector('.map .btn');
const mapFrm = document.querySelector('.map iframe');

menuBtn.addEventListener('click', openMenu())


function openMenu() {
  if (menuList.classList.toggle('active')) {
    menuBtn.innerHTML = '&times;'
  } else {
    menuBtn.innerHTML = '&equiv;'
  }
};

/*Script del mapa */

mapBtn.onclick = () => mapFrm.classList.toggle('active') ? mapBtn.classList.replace('icon-max', 'icon-min') : mapBtn.classList.replace('icon-min', 'icon-max');