$(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop:true,
      nav: true
    });
});

var tempAnimation = 0;
$('#css').hoverButton(function(){
    alert('wdw');
});
  