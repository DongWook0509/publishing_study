/* 
$('#typo .inner').css('text-decoration', 'underline');
$('#typo .inner').css('border-bottom', '5px solid red');
$('#typo .inner').css('transform', 'rotate(45deg)');
$('#typo .inner').css('opacity', 0.5); 
*/

/* 
$(function(){
    $('#typo .inner').css({
      'text-decoration' : 'underline',
      'border-bottom' : '5px solid red',
      'transform' : 'rotate(45deg)',
      'opacity' : 0.5
    }); 
});
 */

$(function(){
    $('#typo .inner').css({
      textDecoration : 'underline',
      borderBottom : '5px solid red',
      transform : 'rotate(45deg)',
      opacity : 0.5
    }); 
});
