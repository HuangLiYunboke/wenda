$(function(){
  
  if($('html').height() < $(window).height()){
    $('.content').height($(window).height());
  }
  else{
    $('.content').height($('html').height());
  }
});
