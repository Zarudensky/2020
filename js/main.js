window.onload=function(){
  var merrywrap=document.getElementById("merrywrap");
  var box=merrywrap.getElementsByClassName("giftbox")[0];
  var step=1;
  var stepMinutes=[2000,2000,1000,1000];
  function init(){
          box.addEventListener("click",openBox,false);
  }
  function stepClass(step){
    merrywrap.className='merrywrap';
    merrywrap.className='merrywrap step-'+step;
  }
  function openBox(){
    if(step===1){
      box.removeEventListener("click",openBox,false); 
    }  
    stepClass(step); 
    if(step===3){ 
    } 
    if(step===4){ 
       return;
    }     
    setTimeout(openBox,stepMinutes[step-1]);
    step++;  
  }
   
  init();
}

$(document).ready(function() {
  const openBox = $('.giftbox');
  const sound = $('#volume');
  let audio = new Audio('./audio/box.mp3');
      
  openBox.click(function() {
    audio.play();
    audio = new Audio('./audio/magic.mp3');
    audio.play();
    sound.addClass('on');      
  });
  sound.click(function() {
    if(sound.hasClass('on')) {
      sound.removeClass('on');
      audio.pause();
      sound.addClass('off');
    } else {
      sound.removeClass('off');
      audio.play();
      sound.addClass('on');
    }      
  });
});


 
