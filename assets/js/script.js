// Assignment code here
var passwordLength = 8;
var passwordSelection = [];

var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "-"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPrompts() {
  passwordSelection = [];
  passwordLength = parseInt(prompt("What character length do you want your password to have? You may have between 8 to 128 characters."));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Make sure you typed a correct number between 8 and 128. Please try again.");
    return false;
  }
  if (confirm("Would you like to include lowercase letters in your password?")) {
    passwordSelection = passwordSelection.concat(lowerCaseArr);
  }
  if (confirm("Would you like to include uppercase letters in your password?")) {
    passwordSelection = passwordSelection.concat(upperCaseArr);
  }
  if (confirm("Would you like to include special character letters in your password?")) {
    passwordSelection = passwordSelection.concat(specialArr);
  }
  if (confirm("Would you like to include numbers in your password?")) {
    passwordSelection = passwordSelection.concat(numberArr);
  }
  return true;
};

function generatePassword() {
  // Create a random password based on getPrompts
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * passwordSelection.length);
    password = password + passwordSelection[randomCharacter];
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password"); 

  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
