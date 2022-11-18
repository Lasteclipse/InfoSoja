
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  dots: false,
  responsive: {
      0 :{
          items :1
      }
  },
  autoplay:true,
  autoplayTimeout:1000000,
  autoplayHoverPause:false,
});
})