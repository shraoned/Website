
jQuery(document).ready(function(){
 jQuery('#sab_close_btn').click(function(){
 jQuery.cookie('mps_cookie_close', '5', { expires: 7, path: '/' });
 jQuery('#sab_wrap').hide(500);
 jQuery('#sab_close_btn').css('display','none');
 jQuery('#sab_bar_opn').fadeIn(700);
 })
 jQuery('#sab_bar_opn').click(function(){
 	jQuery.removeCookie('mps_cookie_close', { path: '/' });
 	jQuery('#sab_bar_opn').css('display','none');
 	jQuery('#sab_wrap').slideDown(500);
 	jQuery('#sab_close_btn').fadeIn(500);
 })

 if (jQuery.cookie('mps_cookie_close')) {
 	jQuery('#sab_wrap').hide(0);
 	jQuery('#sab_close_btn').css('display','none');
 	jQuery('#sab_bar_opn').fadeIn(70);
 };


});