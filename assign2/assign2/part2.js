/**Filename: part2.js
*Author: Dilni De Silva 103616345
*Target html: enquire.html and payment.html
*Purpose: This file is for link JAVA SCRIPT file 
*created: 25/04/2021
*last updated: 25/04/2021
*Credit: week 5,6,7 lecuture notes 
*/

function init() {
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var code = document.getElementById("code");
var Tickets = document.getElementById("Tickets");
var town = document.getElementById("town");
var States = document.getElementById("States");
var Email = document.getElementById("Email");
var post = document.getElementById("post");
var phone = document.getElementById("phone");
var contactemail= document.getElementById("contactemail");
var number = document.getElementById("contactemail");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var movie1 = document.getElementById("movie1");
var movie2 = document.getElementById("movie2");
var movie3 = document.getElementById("movie3");
var movie4 = document.getElementById("movie4");
var movie5 = document.getElementById("movie5");
var movie1a = document.getElementById("movie1a");
var movie2a = document.getElementById("movie2a");
var movie3a = document.getElementById("movie3a");
var movie4a = document.getElementById("movie4a");
var movie5a = document.getElementById("movie5a");
var movie6a = document.getElementById("movie6a");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
SetCustomerdetails()
}

function SetCustomerdetails()
{
sessionStorage.firstname = firstname;
sessionStorage.lastname = lastname;
sessionStorage.code = code;
sessionStorage.Tickets = Tickets;
sessionStorage.town = town;
sessionStorage.States = States;
sessionStorage.Email = Email;
sessionStorage.post = post;
sessionStorage.phone = phone;
sessionStorage.contactemail = contactemail;
sessionStorage.b1;
sessionStorage.b2;
sessionStorage.b3;
sessionStorage.b4;
sessionStorage.b5;
sessionStorage.movie1;
sessionStorage.movie2;
sessionStorage.movie3;
sessionStorage.movie4;
sessionStorage.movie5;
sessionStorage.movie6;
sessionStorage.movie1a;
sessionStorage.movie2a;
sessionStorage.movie3a;
sessionStorage.movie4a;
sessionStorage.movie6a;
sessionStorage.movie7a;
sessionStorage.p1;
sessionStorage.p2;
sessionStorage.p3;
sessionStorage.p4;
sessionStorage.p5;
}

function cancelorder (){
	window.location = "payment.html"
}


window.onload = init;
