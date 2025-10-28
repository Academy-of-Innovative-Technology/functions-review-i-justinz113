// ===== FUNCTIONS WITH NO PARAMETERS ===== //

function sayHello() {
  return "Hello Naldo!";
}

function showDate() {
  return "October 28, 2025";
}

function motivate() {
  return "The only impossible journey is the one you never begin";
}

function rep() {
  return "I rep the Green Autumn Leaves";
}

// ===== FUNCTIONS WITH PARAMETERS ===== //

function addNumbers(x, y) {
  return x + y;
}

function greetUser(name) {
  return "Hello, " + name + "! 👋 Welcome to the world of JavaScript.";
}

function calculateArea(width, height) {
  return (
    "The area of a " +
    width +
    "x" +
    height +
    " rectangle is " +
    width * height +
    " square units."
  );
}

function favoriteColor(color) {
  return `Your favorite color is ${color}`;
}

function convert(cel) {
  return (9 / 5) * cel + 32 + " Fahrenheit";
}

// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
let hello = document.querySelector(".hello");
let date = document.querySelector(".date");
let motivator = document.querySelector(".motivate");
let reps = document.querySelector(".rep");

let add = document.querySelector(".add");
let greet = document.querySelector(".greet");
let calculate = document.querySelector(".calc");
let color = document.querySelector(".color");
let covert = document.querySelector(".convert");

hello.addEventListener("click", function () {
  output1.innerHTML = sayHello();
});

date.addEventListener("click", function () {
  output1.innerHTML = showDate();
});

motivator.addEventListener("click", function () {
  output1.innerHTML = motivate();
});

reps.addEventListener("click", function () {
  output1.innerHTML = rep();
});

add.addEventListener("click", function () {
  output2.innerHTML = addNumbers(5, 7);
});

greet.addEventListener("click", function () {
  output2.innerHTML = greetUser("Alex");
});

calculate.addEventListener("click", function () {
  output2.innerHTML = calculateArea(10, 6);
});

color.addEventListener("click", function () {
  output2.innerHTML = favoriteColor("red");
});

covert.addEventListener("click", function () {
  output2.innerHTML = convert(25);
});
