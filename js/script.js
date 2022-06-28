// Swiper

const swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 4000,
  }, 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
});


// Tabs

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__btn').forEach(function (tabs) {
    tabs.addEventListener('click', function (tabs) {
          const tab = tabs.currentTarget.dataset.path;
          document.querySelectorAll('.tab-content').forEach(function (tabs) {
            tabs.classList.remove('tab-content_active')
              document.querySelector(`[data-target='${tab}']`).classList.add('tab-content_active');
          });
      });

      tabs.addEventListener('click', function (tabs) {
        const tabDefault = tabs.currentTarget.dataset.default;
        document.querySelectorAll('.work__btn').forEach(function (tabs) {
          tabs.classList.remove('work__btn_default')
            document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn_default');
        })
    })
  });
});


// Accordion
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
  });
});


// Burger
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
    menuBurger.classList.add('burger_active');
});

menuClose.addEventListener('click', () => {
    menuBurger.classList.remove('burger_active');
});