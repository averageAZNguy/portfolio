//declare variables
var aboutinfo = document.getElementsByClassName("about-info");
var buttons = document.querySelectorAll("button");
var circles = document.querySelectorAll(".circle")
var home = document.getElementById('home');
var slideIndex = 0;

// b.conclickt = { console.log("help!") });
showDivs(0);


function showDivs(n) {
  var i;
  for (i = 0; i < aboutinfo.length; i++) {
     aboutinfo[i].style.display = "none";  
  }
  aboutinfo[n].style.display = "block";  
}

 $(document).ready(function () {
 	$(".owl-carousel").owlCarousel({
 		 loop:true,
    margin:50,
    height: 1000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
 	});

  $(".itemsScaleUp-true").owlCarousel({
    items : 6,
    itemsScaleUp:true
  });
 	//profile slider
	circles.forEach(function(circle){
		circle.addEventListener("click",function(){
			var num = Number(circle.id);
			showDivs(num);
		});
	})

	   //   $('#myCarousel').carousel({
    //     interval: 10000
    // })
    // $('.fdi-Carousel .item').each(function () {
    //     var next = $(this).next();
    //     if (!next.length) {
    //         next = $(this).siblings(':first');
    //     }
    //     next.children(':first-child').clone().appendTo($(this));

    //     if (next.next().length > 0) {
    //         next.next().children(':first-child').clone().appendTo($(this));
    //     }
    //     else {
    //         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    //     }
    // });



        // $('.flexslider').flexslider({
        //     animation: 'fade',
        //     controlsContainer: '.flexslider'
        // });
});