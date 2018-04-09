/*function getUsername(){
    var username = prompt('what is your full name');
    var splitUsername = username.split(" ");
    // console.log(username);
    outputUsername(username);
}
getUsername();

function outputUsername(nameArray){
    // document.getElementById('firstname').innerHTML = nameArray[0];
    // document.getElementById('lastname').innerHTML = nameArray[nameArray.length - 1];
    for(var i = 0; i < nameArray.length; i++){
    if( i == 0 || i == nameArray.length - 1){
console.log("we got the zeroth element", nameArray[i]);
document.getElementById('firstname').innerHTML += nameArray[i] + " ";


    }
}
} */

// var cars = ["jeep", "subaru","mustang"];
// console.log(cars[1]);
// console.log(cars.length);

// cars.push("bmw");
// console.log(cars);

// // remove method
// cars.pop();
// console.log(cars);

// var removedCar = cars.pop();
// console.log(cars);
// console.log(removedCar);

// cars.unshift("chevy", "chrysler");
// console.log(cars);

// cars.shift();
// console.log(cars);

// cars.splice(1, 1,"red","green");
// console.log(cars);

// cars.splice(1, 1, "strawberry", "banana", "apple", "grape");
// console.log(cars);

// cars.splice(2, 1,);
// console.log(cars);

// cars.slice(1);
// var removed = cars.slice(4,6);
// console.log(cars);
// console.log(removed);

// var movies = ["Point Break" ,"star wars" , "mummy" , "retunr of the mummy", "hot fuzz" ];
// console.log(movies);

// movies.splice( 0, 0, "Die Hard");
// console.log(movies);

// movies.splice(3, 4, "Godfather I", "Godfather II", "Godfather III");
// console.log(movies);

// movies.push("Guardians of the Galaxy");
// console.log(movies);

// var movies2 = ["Point Break" ,"star wars" , "mummy" , "retunr of the mummy", "hot fuzz" ];
// console.log(movies);

// movies2.splice( 0, 0, "Die Hard");
// console.log(movies);

// movies2.splice(3, 4, "Godfather I", "Godfather II", "Godfather III");
// console.log(movies);

// movies2.push("Guardians of the Galaxy");
// console.log(movies);

// movies2.shift();
// console.log(movies2);

// movies2.pop();
// console.log(movies2);

// function getUserAge(){
//     var userage = parseInt(prompt('how old are you?'));

//     if(userage < 21){
// console.log('not old enough');
//     }else if(userage == 21){
//         console.log('good to go');
//     }else{
//         console.log('plenty old');
//     }

// }
// getUserAge();


// function getAge(){
// var age = prompt('whats my age again?');
// (age >= "21") ? console.log('true') : console.log('false');
// }
// // getAge();


// write a function and prompt the user telling the user a "story" asking for 1 of 3 choices
// each choice continues to their own function
// wash  rinse repeat thrice more
// SIMPLE VERSION:
// alerts, prompts, confirms
// if / else if / else

 var spans = document.querySelectorAll('spans');
function getChar(){
    var char = prompt('pick your class, (Shadowstalker ,Mage ,Paladin, warrior)');
    var name = prompt ('what is your name?');
    var user = prompt('choose a number from 1 to 10 this number will be what button you click on');
    var userAnimal = prompt('pick any animal');
console.log(char);
console.log(name);
}getChar();
getGender();

function getGender(){
    var gender = prompt('Are you Male or Female');
if(gender == 'Male'){
    console.log('strong man'); 
} if(gender == 'Female'){
    console.log('strong woman');
}}
if(userAnimal == 'chocobo'){
    alert('sweet ride bro!');
console.log('chocobo');
}else (userAnimal != 'chocobo')
alert('theres a place and time for everything');
console.log('userAnimal');


