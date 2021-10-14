// Assignment code here
//declare global variables
var passwordLength = 1;
var confirmLower = true;
var confirmUpper = true;
var confirmNumeric = true;
var confirmSpecial = true;
var passwordArray = [];

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  getUserOptions();
  console.log(passwordLength);
  console.log(confirmLower);
  console.log(confirmUpper);
  console.log(confirmNumeric);
  console.log(confirmSpecial);
  console.log(passwordArray);

//declare password as a local variable in generatePassword function
var password = '';
  //loop through a list of characters, choose a character, add it to the string, until passwordLength value achieved
  for (i=1; i <= passwordLength; i++) {
    console.log(i);
    //if confirmLower = true add a character from lower case array to function output
      //generate random number between 1-26
      var value=Math.floor(Math.random() * passwordArray.length);
      //choose this value from array of characters
      //store this value onto itself
      password = password.concat(passwordArray[value]);
      console.log(password);
  };
  return password;
};

function getUserOptions(){
  //- When button is clicked generate window.prompt
  //- ask length
  passwordLength = window.prompt('How long would you like for your password to be? Please choose a number between 8 and 128');
  //confirm a number is chosen
  if (isNaN(passwordLength)) {
    window.confirm('Oops! You didnt choose a number.  Please Try again');
    getUserOptions();
  } else 
  if (passwordLength <8 || passwordLength >128) {
    window.confirm('Oops! You chose an invalid value! Please try again');
    getUserOptions();
  } else {
    console.log(passwordLength);
  }
  //- user choose to include lowercase, uppercase, numeric, and/or special characters
  function passType() {
      //confirm if user wants lower
      confirmLower = window.confirm('Would you like to include lowercase letters?');
      console.log(confirmLower);
      //if user confirms lowercase then create new array and add lowercase characters to it
      if (confirmLower === true) {
        passwordArray = passwordArray.concat(lowerCasedCharacters);
      }
      //confirm if user wants upper
      confirmUpper = window.confirm('Would you like to include UPPERCASE letters?');
      console.log(confirmUpper);
      //if user confirms uppercase then add to array and add uppercase characters to it
      if (confirmUpper === true) {
        passwordArray = passwordArray.concat(upperCasedCharacters);
      }
      //confirm if user wants numeric
      confirmNumeric = window.confirm('Would you like to include numeric values?');
      console.log(confirmNumeric);
      //if user confirms numeric then add to array and add numeric characters to it
      if (confirmNumeric === true) {
        passwordArray = passwordArray.concat(numericCharacters);
      }
      //confirm if user wants special character
      confirmSpecial = window.confirm('Would you like to include special characters?');
      console.log(confirmSpecial);
      //if user confirms special characters then create new array and add special characters to it
      if (confirmSpecial === true) {
        passwordArray = passwordArray.concat(specialCharacters);
      }
      //- validate at least one of above is selected
      if (confirmLower === false && confirmUpper === false && confirmNumeric === false && confirmSpecial === false ) {
        window.confirm('Oops! Looks like you didnt select any values.  Please Try again!');
        //run function again to ensure you get at least one value type
        passType();
      }
  }
  passType();
      
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

