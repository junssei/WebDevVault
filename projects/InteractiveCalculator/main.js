//
let num = document.getElementsByClassName("num");
let dsply = document.getElementById("display");

function displayCalc() {
  //
}

// addEventListener to Number Buttons
for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", function () {
    console.log(num[i].textContent);
    dsply.textContent += num[i].textContent;
  });
}

// addEventListener to Arithmetic Buttons
let arithmetic = document.getElementsByClassName("arithmetic");
for (let i = 0; i < arithmetic.length; i++) {
  arithmetic[i].addEventListener("click", function () {
    console.log(arithmetic[i].textContent);
    dsply.textContent += arithmetic[i].textContent;
  });
}

// addEventListener to buttons to clear display/reset calculation
let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  dsply.textContent = "";
});

function addition() {
  //
}
function subtraction() {
  //
}
function multiplication() {
  //
}
function division() {
  //
}
