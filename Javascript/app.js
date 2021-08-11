var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}


// contact java

function printError(Id,Msg){
  document.getElementById(Id).innerHTML = Msg;
}

function validationForm(){
  var name = document.Form.name.value;
  var email = document.Form.email.value;
  var mobile = document.Form.mobile.value;

  var nameErr = emailErr = mobileErr =true;

  if(name == ""){
    printError("nameErr", "Please enter your name");
    var elem = document.getElementById("name");
  }else{
    var regex = /^[a-zA-Z\s]+$/;
    if(regex.test(name) === false){
      printError("nameErr", "Please enter a valid name");
      var elem = document.getElementById("name");
    }else{
      printError("nameErr", "");
      nameErr = false; 
      var elem = document.getElementById("name");
    }
  }

  if(email == ""){
    printError("emailErr", "Please enter your email address");
    var elem = document.getElementById("email");
  }else{
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false){
      printError("emailErr", "Please enter a valid email address");
      var elem = document.getElementById("email");
    }else{
      printError("emailErr", "");
      emailErr = false; 
      var elem = document.getElementById("email");
    }
  }

  if(mobile == ""){
    printError("mobileErr", "Please enter your mobile number");
    var elem = document.getElementById("mobile");
  }else{
    var regex = /^[1-9]\d{9}$/;
    if(regex.test(mobile) === false){
      printError("mobileErr", "Please enter a valid 10-digit mobile number");
      var elem = document.getElementById("mobile");
    }else{
      printError("mobileErr", "");
      mobileErr = false; 
      var elem = document.getElementById("mobile");
    }
  }


if((nameErr || emailErr || mobileErr) == true){
  return false;
}
};