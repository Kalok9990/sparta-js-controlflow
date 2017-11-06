// var moneyInPocket = prompt("How much do you have to spend?");
// var drinks = prompt("How many drinks have you had?");
// var crisps = prompt("How much are the crisps?");
//
// if(moneyInPocket > 10){
//   console.log("I can buy a drink");
// }else if(moneyInPocket > 5){
//   console.log("I can buy just some crisps");
// }else {
//   console.log("Go home");
// }
//
// if(moneyInPocket>10 && drinks<3){
//   console.log("buy another drink");
// }else if(moneyInPocket>5 || crisps==0){
//   console.log("buy crisps");
// }else{
//   console.log("go home");
// }

// var name = "Tim";

// if(name == "Bob"){
//   console.log("Hi Bob");
// }else if(name == "Tim"){
//   console.log("Hi Tim");
// }
var name = prompt("What is your name?");

switch (name) {
  case "Bob":
    console.log("Hi Bob");
    break;
  case "Tim":
    console.log("Hello Tim");
    break;
  case "Sam":
    console.log("Bonjour Sam");
    break;
  default:
    console.log("Good afternoon " +name);

}
