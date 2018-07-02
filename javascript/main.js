document.addEventListener("DOMContentLoaded",function(){
    let wrapper = document.getElementById("wrapper");
    let topLayer = wrapper.querySelector(".top");
    let handle = wrapper.querySelector(".handle");
    let skew = 0;
    let delta = 0;

    if(wrapper.className.indexOf('split') != -1){
        skew = 1000;
      }
      
      wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
      
        handle.style.left = e.clientX + delta + 'px';
    
        topLayer.style.width= e.clientX + skew + delta + 'px';
      });
});


// ============NAVBAR=========== //

$(document).ready(function(){
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
    });
});


// ============TOOLTIP=========== //

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


