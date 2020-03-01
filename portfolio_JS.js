
// Assignment: Project-Portfolio Website
// Author: Matthew Goelzer
// Date: 2/29/2020
// Description: javascript file for portfolio website

 //set transition tim tp 3.5 sec
$('.carousel').carousel({
  interval: 3500
})

//animates nav bar
//code used from Colt Steele, Web Developer Bootcamp https://www.udemy.com/course/the-web-developer-bootcamp/
$(function () {
            $(document).scroll(function () {
                var $nav = $("#mainNavbar");
                $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
            });
        });