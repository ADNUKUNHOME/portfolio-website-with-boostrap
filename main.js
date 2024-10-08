// form submission

var form = document.getElementById('form');



form.addEventListener('submit', function (event) {
    event.preventDefault()
    var username = document.getElementById('username').value;
    var email = document.getElementById('form-email').value;


    alert("YOUR DETAILS ARE SUBMITTED SUCCESSFULLY")
})







// top scroll button actions

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}