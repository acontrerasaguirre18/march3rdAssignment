// variables 
var toggleButton = document.getElementById("toggleButton");
var changeButton = document.getElementById("changeButton");
var addButton = document.getElementById("addButton");
var box = document.querySelector(".box");
var paragraph = document.getElementById("paragraph");
var count = document.getElementById("count");

// variables for counting
var toggleCount = 0;
var changeCount = 0;
var addCount = 0;

// on click event listener for BG change
toggleButton.addEventListener("click", function() {
  toggleCount++;
  var currentColor = document.body.style.backgroundColor;
  var newColor = currentColor === "rgb(200, 0, 0)" ? "white" : "rgb(200, 0, 0)";
  document.body.style.backgroundColor = newColor;

  //counter
  count.innerText = "Button Counts: Toggle (" + toggleCount + ") Change (" + changeCount + ") Add (" + addCount + ")";
});

// on click event listener forbox change
changeButton.addEventListener("click", function() {
  changeCount++;
  box.style.backgroundColor = "green";
  box.style.fontSize = "30px";

  //counterr
  count.innerText = "Button Counts: Toggle (" + toggleCount + ") Change (" + changeCount + ") Add (" + addCount + ")";
});

// on click event listener for adding words to the page
addButton.addEventListener("click", function() {
  addCount++;
  paragraph.append("Word ");
  
  //counterrr
  count.innerText = "Button Counts: Toggle (" + toggleCount + ") Change (" + changeCount + ") Add (" + addCount + ")";
});