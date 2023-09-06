$(function(){

  var notePad = $('.notepads');

  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
        /*  notePad.addClass('animate');
        $('.st4').addClass('animate') */

        /*add(더불어서)*/
        /*  notePad.add($('.st4')).addClass('animate'); */

        notePad.addClass('animate');
    }else{
        /* otePad.removeClass('animate'); */
        /* notePad.add($('.st4')).removeClass('animate'); */
        notePad.removeClass ('animate');
    }
  })

});


