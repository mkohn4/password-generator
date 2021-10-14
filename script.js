// Assignment code here
//declare global variables
/*
var passwordLength = 1;
var confirm = {
  lower: true,
  upper: true,
  numeric: true,
  special: true
};
*/


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordLength = 1;
var confirmLower = true;
var confirmUpper = true;
var confirmNumeric = true;
var confirmSpecial = true;

function generatePassword() {
  
  getUserOptions();
  console.log(passwordLength);
  console.log(confirmLower);
  console.log(confirmUpper);
  console.log(confirmNumeric);
  console.log(confirmSpecial);

  /*
PseudoCode

  - generate password based on criteria
  - check if upper
    - if upper, add to password a random char from the upper array
  - check if lower
    - if lower, add to password a random char from the lower array
  - display password on page
  */
return;
  
}

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
      //confirm if user wants upper
      confirmUpper = window.confirm('Would you like to include UPPERCASE letters?');
      console.log(confirmUpper);
      //confirm if user wants numeric
      confirmNumeric = window.confirm('Would you like to include numeric values?');
      console.log(confirmNumeric);
      //confirm if user wants special character
      confirmSpecial = window.confirm('Would you like to include special characters?');
      console.log(confirmSpecial);
      //- validate at least one of above is selected
      if (confirmLower === false && confirmUpper === false && confirmNumeric === false && confirmSpecial === false ) {
        window.confirm('Oops! Looks like you didnt select any values.  Please Try again!');
        //run function again to ensure you get at least one value type
        passType();
      }
  }
  passType();
      
}

generatePassword();

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

