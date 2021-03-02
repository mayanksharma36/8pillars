$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo-test.png");
			$("#quotes>span").css({color:'white',opacity:'0.8'});
			$(".navbar-padding").css({color:'white'});
			$(".navbar-padding").css({display:'block'});
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo-test.png");
			$("#quotes>span").css({color:'#121212',opacity:'0.7'});
			$(".navbar-padding").css({color:'black'});
			$(".navbar-padding").css({display:'none'});
        }
    });

    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    
    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Sidebar

    $('[href="#side-menu-left"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').addClass('open');
    });

    $('[href="#close"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').removeClass('open');
    });
    
    
    //===== Slick

    $('.slider-items-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:800,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        dots: true,
        autoplay: true,
        autoplaySpeed:5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Isotope Project 4

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.portfolio-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.portfolio-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
	
    
    
    //===== slick Testimonial Four
    
    $('.testimonial-active').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        infinite: true,
       autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
    });
    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });  
    
});



// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
  // acc[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    // var panel = this.nextElementSibling;
    // if (panel.style.maxHeight) {
      // panel.style.maxHeight = null;
    // } else {
      // panel.style.maxHeight = panel.scrollHeight + "px";
    // } 
  // });
// }

//testting accordion start


// Get all Accordion and Panel
let accHeading1 = document.querySelectorAll(".accordion1");
let accPanel1 = document.querySelectorAll(".panel1");

for (let i = 0; i < accHeading1.length; i++) {
    // Execute whenever an accordion is clicked 
    accHeading1[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels1();     // Hide All open Panels 
        } else {
           showPanel1(this);  // Show the panel
        } 
    };
}

// Function to Show a Panel
function showPanel1(elem) {
  hidePanels1();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}

// Function to Hide all shown Panels
function hidePanels1() {
  for (let i = 0; i < accPanel1.length; i++) {
      accPanel1[i].style.maxHeight = null;
      accHeading1[i].classList.remove("active");
  }
}

//testting accordion end

// Get all Accordion and Panel
let accHeading2 = document.querySelectorAll(".accordion2");
let accPanel2 = document.querySelectorAll(".panel2");

for (let i = 0; i < accHeading2.length; i++) {
    // Execute whenever an accordion is clicked 
    accHeading2[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels2();     // Hide All open Panels 
        } else {
           showPanel2(this);  // Show the panel
        } 
    };
}

// Function to Show a Panel
function showPanel2(elem) {
  hidePanels2();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}

// Function to Hide all shown Panels
function hidePanels2() {
  for (let i = 0; i < accPanel2.length; i++) {
      accPanel2[i].style.maxHeight = null;
      accHeading2[i].classList.remove("active");
  }
}

//testting accordion end


// Get all Accordion and Panel
let accHeading3 = document.querySelectorAll(".accordion3");
let accPanel3 = document.querySelectorAll(".panel3");

for (let i = 0; i < accHeading3.length; i++) {
    // Execute whenever an accordion is clicked 
    accHeading3[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels3();     // Hide All open Panels 
        } else {
           showPanel3(this);  // Show the panel
        } 
    };
}

// Function to Show a Panel
function showPanel3(elem) {
  hidePanels3();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}

// Function to Hide all shown Panels
function hidePanels3() {
  for (let i = 0; i < accPanel3.length; i++) {
      accPanel3[i].style.maxHeight = null;
      accHeading3[i].classList.remove("active");
  }
}

//testting accordion end


// Validation of quote form start
function quote(){
	Name_fun();
	phone_fun();
	email_fun();

	// if(email_regular.test(email)){
		// document.querySelector(".email_error").innerHTML="";
		
	// }
	
	// else{
		// document.querySelector(".email_error").innerHTML="Please enter email properly";
		// document.querySelector(".email_error").style.color="red";
	// }
}

	document.getElementById('cross').addEventListener("click",function(){
	   
	   document.getElementById("cross01").reset();
	   //document.querySelectorAll(".comm-cls")[0].innerHTML="";
	   //document.querySelectorAll(".comm-cls")[1].innerHTML="";
	  // document.querySelectorAll(".comm-cls")[2].innerHTML="";
	  var k=document.querySelectorAll(".comm-cls");
   for(var i=0;i<k.length;i++){
   k[i].innerHTML='';
}
	
});


// Validation of quote form end

// validation onblur event start

function Name_fun(){
	//for name field
	
	var name=document.querySelector(".f-name").value;
	
	
	if(name!=""){
		document.querySelector(".name_error").innerHTML="";
		document.querySelector(".name_error").style.color="";
	}
	
	else{
		document.querySelector(".name_error").innerHTML="Enter Your Name";
		document.querySelector(".name_error").style.color="red";
	}
}
function phone_fun(){
	var phone=document.querySelector(".f-phone").value;
	var phone_regular=/^[0-9]{10}$/;
	var phone_regular1=/^[0-9]{11}$/;
	
	if(phone_regular.test(phone) || phone_regular1.test(phone)){
		document.querySelector(".phone_error").innerHTML="";
		document.querySelector(".phone_error").style.color="";
	}
	
	else{
		document.querySelector(".phone_error").innerHTML="Enter Your Phone Number";
		document.querySelector(".phone_error").style.color="red";
	}
}

function email_fun(){
	var email=document.querySelector(".f-email").value;
	var email_regular=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(email==""){
		document.querySelector(".email_error").innerHTML=" ";
		document.querySelector(".email_error").style.color="red";
		
	}
	
	else if(email_regular.test(email)){
		document.querySelector(".email_error").innerHTML="";
		
	}
	
	
	else{
		document.querySelector(".email_error").innerHTML="Enter your proper Email";
		document.querySelector(".email_error").style.color="red";
	}
		
		
}
// validation onblur event end
// var m=document.getElementById("cross01");
// var btn=document.getElementById("myBtn");

// window.onclick=function(e){
	
	  // var container = document.getElementById('cross01');
  // if (!btn.contains(e.target)&&!modal.contains(e.target)) {
    // container.style.display = 'none';
  // }
// }

function onlyAlpha_forName(key,e){
	if (navigator.appName =="Microsoft Internet Explorer"){
		var oKey = event.keyCode;
		
		if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 32) || (oKey == 46) || (oKey == 39))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	else{
		var oKey = e.charCode;
		
		if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 0) || (oKey == 32) || (oKey == 46) || (oKey == 39))
		{
			return true;
		}
		else
		{return false;
		}
	}

}

//window outside click close start
window.addEventListener('mouseup',function(event) {
	var box=document.getElementById('id01');
	if(event.target== box){
	box.style.display='none';
	document.getElementById("cross01").reset();
	}
});
//window outside click close end