var firstName = prompt ("What is your first name?");
var lastName = prompt ("What is your last name?");
var age = prompt ("How old are you? (Years)");

//variables storing age in months/days
var months = age * 12;
var days =  age * 365;

//message alert that states all variables in a sentence
var message = alert ("Hello " + firstName  + " " + lastName + " "  + "you are " + months + " months and " + days + " days old!");

//declaring function that writes your name as a header
function writeYourName() {
  document.getElementById('yourName').innerHTML = firstName  + " " + lastName;
}
//call that function
writeYourName();

//declaring function that writes the Age Sentence in the html
function writeYourAge() {
  document.getElementById('sentence').innerHTML = "You are " + months + " months and " + days + " days old.";
}
//call that function
writeYourAge();
