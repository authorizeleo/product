var x = new Audio("https://taira-komori.jpn.org/sound_os/environment01/hubbub_at_a_cafe1.mp3");


// $(window).mousemove(
//   function(evt){x.play()})


$(window).scroll(function(evt){
  
  if ($(window).scrollTop()>0) {
    
   x.play(); $(".navbar").removeClass("navbar-top");
    $(".navbar").addClass("bg-dark");
    $(".navbar").addClass("navbar-light ");
    
  }
  else {
     x.play(); $(".navbar").addClass("navbar-top");
      $(".navbar").removeClass("bg-dark");
      $(".navbar").removeClass("navbar-light ");
  }
});

var s = skrollr.init();