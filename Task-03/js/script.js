document.addEventListener("DOMContentLoaded", () => {


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

// Validation
if (name === "" || email === "" || message === "") {
alert("All fields are required!");
return;
}

// Create object
let submission = {
name: name,
email: email,
message: message,
date: new Date().toLocaleString()
};

// Get old data
let data = JSON.parse(localStorage.getItem("submissions")) || [];

// Add new data
data.push(submission);

// Save again
localStorage.setItem("submissions", JSON.stringify(data));

// Success
alert("Message saved successfully!");

form.reset();

});

}


// ================= SUBMISSION TABLE =================

const tableBody = document.getElementById("submissionData");

if (tableBody) {

let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

tableBody.innerHTML = "";

submissions.forEach((item, index) => {

let row = document.createElement("tr");

row.innerHTML = `
<td>${index + 1}</td>
<td>${item.name}</td>
<td>${item.email}</td>
<td>${item.message}</td>
<td>${item.date}</td>
`;

tableBody.appendChild(row);

});

}

});
