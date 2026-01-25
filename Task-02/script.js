function validateForm() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

if(name == "") {
alert("Please enter name");
return false;
}

if(email == "") {
alert("Please enter email");
return false;
}

if(message == "") {
alert("Please enter message");
return false;
}

alert("Form Submitted Successfully!");
return true;
}
