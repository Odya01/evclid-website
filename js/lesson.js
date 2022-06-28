// 12.3
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelectorAll('.text').forEach(function(el){
    el.addEventListener('click', function(event){
      event.target.classList.toggle('alert')
    })
  })	
}) 

// 12,4
// библиотека swiperjs.com и подключили её

// 12.5
// Accordion - jQuery (jQuery база) устарел морально
// bootstrap

// 12.6 
// npm - популярный поиск библиотек или чего то другого

// 12.7
// Табы и DOM дерево
// Подключать js в конце body.  
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})
// 13