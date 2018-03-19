document.getElementById('btn2').style.color = "red";
document.getElementById('btn2').style.fontSize = "32px";

// console.log("here is my first console message");
// console.info("This is information");
// console.warn("Danger will robinson");
// console.error("UH UH UH. You didn't say the magic word");
// browser alert
// alert('here is my popup.');

// browser confirm
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult);
// var userResult = prompt("what's your name?");
// console.log(userResult)



var age = 26;
var decade = 10;
var double = 2;
var divide = 4;
var newage = (age + decade) * double / divide;
console.log(newage);


// Concatinnation


// var firstName = prompt("what is your first name?");
// var lastName = prompt ("what is your last name?");
// alert(`${firstName} ${lastName}`);
// hey brosef you can use (var + "" + var) if you so choose

function getUserVehicle(){
    var makeCar = prompt("what is the make of your car?");
    var yearCar = prompt("what is the year of your car?");
    var carColor = prompt("what color is your car?");

    alert (carColor + " , " + yearCar + " "+ makeCar);
}

function primaryUser(){
var first = prompt("what is your first name?");
var last = prompt("what is your last name?");
var place = prompt("where were you born?");

document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place;
}

function player2(){
var game = prompt("What is your favorite game?");
var best = prompt("what game are you best at?");
var gamingconsole = prompt("what console are you currently playing on?");

document.getElementById('player2').innerHTML = game + " " + best + " , plays on " +gamingconsole;
}

function player3(){
var drink = prompt("what is your favorite drink?");
var snack = prompt("what is your favorite snack?");
var food = prompt("what is your favrotie food?");

document.getElementById('player3').innerHTML = drink + " " + snack + " , favorite food is" + food;
}

function playerFour(){
    var movie = prompt("what is your movie?");
    var tvshow = prompt("what is your tv show?");
    var watch = prompt("where do you watch?");

    document.getElementById('player4').innerHTML = movie + " " + tvshow + " , likes to watch them" + watch;
}