
const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
 
  menu.classList.toggle("active");
})

function validasi() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (nama != "" && email!="" && message != ""){
    alert ("welcome to the rice field");
  }else{
    alert ("Isi data dengan lengkap !");
  }
}

(function ($) {
	
	"use strict";

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();
  
		if (scroll >= header) {
		  $("header").addClass("background-header");
		} else {
		  $("header").removeClass("background-header");
		}
	  });
    })(window.jQuery);