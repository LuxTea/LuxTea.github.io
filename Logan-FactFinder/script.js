/*
colour scheme 1:https://coolors.co/5bc0eb-fde74c-9bc53d-e55934-fa7921
colour scheme 2:https://coolors.co/091540-7692ff-abd2fa-3d518c-1b2cc1
colour scheme 3:https://coolors.co/60463b-856a5d-ccc9e7-6c6f7d-2e3138
colour scheme 4:https://coolors.co/8daa91-788475-5e5d5c-453643-28112b
colour scheme 5:https://coolors.co/02111b-3f4045-30292f-5d737e-93a8ac


*/
document.getElementById('factdisplay').innerHTML = "Facts will be displayed here:"

//facts
//-----------
var fact1 = "The unicorn is the national animal of Scotland"
var fact2 = "The different colors of Froot Loops cereal all taste the same—they’re not individual flavors."
var fact3 = "The Easter Island heads have bodies."
var fact4 = "All of an adult human’s blood vessels, if laid out end to end, would be about 100,000 miles, so they could encircle the earth four times."
var fact5 = "The average person walks past 36 murderers in their lifetime."

//fun facts
var funFacts = document.querySelector('#funfacts')

//show fact 1
//-------------------
var facta = document.querySelector('funfacts');
facta.a.addEventListener("click",showFactOne);
function showFactOne(){
	document.getElementById('factdisplay').innerHTML = fact1;
	document.querySelector('body').style.backgroundColor = '#FDE74C';
	document.querySelector('div').style.borderColor = '#9BD53D'
	document.querySelector('div').style.backgroundColor = '#5BC0EB'
	document.querySelector('div').style.color = '#E55934'
	document.getElementById('factdisplay').innerHTML = fact1 + "<img src='Images/Unicorn.webp' alt='Unicorn'>";
}

//show fact 2
//-------------------
var factb = document.querySelector('funfacts');
factb.b.addEventListener("click",showFactTwo);
function showFactTwo(){
	document.getElementById('factdisplay').innerHTML = fact2;
	document.querySelector('body').style.backgroundColor = '#091540';
	document.querySelector('div').style.borderColor = '#1B2CC1'
	document.querySelector('div').style.backgroundColor = '#ABD2FA'
	document.querySelector('div').style.color = '#3D518C'
	document.getElementById('factdisplay').innerHTML = fact2 + "<img src='Images/Frootloops.webp' alt='Fruit Loops'>";
}

//show fact 3
//-------------------
var factc = document.querySelector('funfacts');
factc.c.addEventListener("click",showFactThree);
function showFactThree(){
	document.getElementById('factdisplay').innerHTML = fact3;
	document.querySelector('body').style.backgroundColor = '#2E3138';
	document.querySelector('div').style.borderColor = '#CCC9E7'
	document.querySelector('div').style.backgroundColor = '#6C6F7D'
	document.querySelector('div').style.color = '#60463B'
	document.getElementById('factdisplay').innerHTML = fact3 + "<img src='Images/EasterIsland.jpg' alt='Easter Island Heads'>";
}

//show fact 4
//-------------------
var factd = document.querySelector('funfacts');
factd.d.addEventListener("click",showFactFour);
function showFactFour(){
	document.getElementById('factdisplay').innerHTML = fact4;
	document.querySelector('body').style.backgroundColor = '#5E5D5C';
	document.querySelector('div').style.borderColor = '#28112B'
	document.querySelector('div').style.backgroundColor = '##8DAA91'
	document.querySelector('div').style.color = '#453643';
	document.getElementById('factdisplay').innerHTML = fact4 + "<img src='Images/BloodVessels.jpg' alt='Blood Vessels'>";
}

//show fact 5
//-------------------
var facte = document.querySelector('funfacts');
facte.e.addEventListener("click",showFactFive);
function showFactFive(){
	document.getElementById('factdisplay').innerHTML = fact5;
	document.querySelector('body').style.backgroundColor = '#02111B';
	document.querySelector('div').style.borderColor = '#5D737E'
	document.querySelector('div').style.backgroundColor = '#93A8AC'
	document.querySelector('div').style.color = '#30292F';
	document.getElementById('factdisplay').innerHTML = fact5 + "<img src='Images/Murderers.jpg' alt='Women walking side by side'>";
}