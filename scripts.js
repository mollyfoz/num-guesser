
//variable mess
var submitGuessButton = document.getElementById('guess-button');
var inputValue = document.getElementById('guess-box').value;
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset');
var inputField = document.getElementById('guess-box');
var minValue = document.getElementById('min-box').value;
var maxValue = document.getElementById('max-box').value;
var minField = document.getElementById('min-box');
var maxField = document.getElementById('max-box');



// //to run function with max and min default of 1-100
// var random = Math.floor((Math.random() * 100) + 1);

// grab input from text areas, parse, & compare to randomly generated number
//reset variable values in new functions where variable is changing from stored value
function compareNum() {
  var random = Math.floor((Math.random() * maxValue) + minValue);
  minValue = parseInt(document.getElementById('min-box').value);
  maxValue = parseInt(document.getElementById('max-box').value);
  submitGuessButton.addEventListener('click', function() {
    inputValue = parseInt(document.getElementById('guess-box').value);

    //if changes are detected, parse new guess- if no changes detected, move to next conditional
    if (minValue != minField.value || maxValue != maxField.value) {
      minValue = parseInt(document.getElementById('min-box').value);
      maxValue = parseInt(document.getElementById('max-box').value);
      random = Math.floor((Math.random() * maxValue) + minValue);
      console.log(random);
    }

    //compare input to several conditions
    if (inputValue < minValue || inputValue > maxValue) {
        alert('Please enter a number between the specified maximum and minimum.');
    } else if (inputValue > random) {
        document.querySelector(".high-low").innerText = "That is too high";
        document.querySelector(".num-guess").innerText = inputValue;
    } else if (inputValue < random) {
        document.querySelector(".high-low").innerText = "That is too low";
        document.querySelector(".num-guess").innerText = inputValue;
    } else if (inputValue === random) {
        document.querySelector(".high-low").innerText = "BOOM!";
        document.querySelector(".num-guess").innerText = inputValue;
    } else if (isNaN(inputValue)) {
        alert('That is not a number-try again.');
    }
  });
}
//call function
compareNum();

//clear text field on button click
clearButton.addEventListener('click', function() {
  document.querySelector('#guess-box').value = '';
});

//reset game on button click, replace placeholders with original text, regenerate random number
function resetGame() {
  resetButton.addEventListener('click', function() {
    document.querySelector('#guess-box').value = '';
    document.querySelector('.num-guess').innerText = '#';
    document.querySelector('.high-low').innerText = 'Hint';
    random = Math.floor((Math.random() * maxValue) + minValue);
          console.log(random);
    disableButton();
  });
}
//call function
resetGame();

//disable buttons until text fields are completed
function disableButton() {
  inputValue = document.getElementById('guess-box').value;
  if (inputValue == '') {
    clearButton.disabled = true;
    submitGuessButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    submitGuessButton.disabled = false;
    resetButton.disabled = false;
  }
}
// call function
disableButton();

//check for changes to input field- if updates, run disableButton function again
inputField.addEventListener('input', function() {
        console.log("changes");
  disableButton();
});
