/* Write your code here! */

  
//   var mq = window.matchMedia( "(min-width: 641px)" );
  
//   if(mq.matches) {
//         var sticky = $("form").sticky({topSpacing:0});
//         sticky();
//   }
//   else {
//       $("form").removeClass('sticky');
//       $("window").on('scroll', function(){("text").css('width','100%')});
//   }


  
  
  //callback
  
  if (matchMedia) {
  var mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}


function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 500px
    $("form").sticky({topSpacing:0});
    $(".container").css('flex-direction','row');
    $(".aside").css('width', '30%');
  } else {
    // window width is less than 500px
    $("form").unstick();
    $(".container").css('flex-direction','column');
    $("aside").css('width','100%')
  }

}












