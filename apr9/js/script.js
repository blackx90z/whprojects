// function wellcomeMsg(str){
// // console.log(str);
// return "any wellcome" + str;
// }

// // consoleInfo('Ian');
// console.log(wellcomeMsg('Ian'));


// var h3 = document.querySelector('h3');
// var user = document.querySelector('#user');


// function calcNums(x , y){
//     // console.log(x + y);
//     return x + y;
// }

// console.log(calcNums(3,2));

// function concatStrings(str1 , str2){
// return str1 + " " + str2;
// }

// function getFirstname(){
// return prompt('what is your first name?');
// }

// function getLastname(){
// return prompt('what is your last name?');
// }

// // function welcomeUser(){
// // h3.innerHTML = concatStrings( getFirstname(), getLastname());
// // }

// // welcomeUser();

//  user.textContent = concatStrings( getFirstname(), getLastname());
// // html.innerHTML = concatStrings( getFirstname(), getLastname());


var spans = document.querySelectorAll('span');
var occu = ['janitor', 'teacher', 'developer', 'plumber','cashier', 'bus driver'];
var plural = ['fish', 'monkeys', 'shoes', 'cacti'];
var adjective = ['fat', 'beautiful','ugly', 'smelly'];
var verb = ['swimming', 'fishing', 'jumping', 'running'];
var liquid = ['Rum', 'Mtn dew', 'beer', 'sulfuric acid',];
var famous = ['donald trump', 'robin williams', 'will smith', 'emma stone', 'emma watson'];
var place = ['maryland', 'texas','alderaan', 'death star', 'narnia'];
var noun = ['bird','bear','snake','tree'];
var national = ['african american', 'caucasian','hispanic', 'asian'];
var female =  ['kaiti','sarah', 'emma', 'rachael']
// console.log(spans.length);

for( var i = 0; i < spans.length; i++){
// console.log(spans[i].className);

// switch statement//
switch(spans[i].className){
    case 'occu':
    setText(s,occu);
    break;
    case 'plural':
    setText(s,plural);
break;
    case 'adjective':
    setText(s,adjective);
    break;
    case 'verb':
    setText(s,verb);
    break;
    case 'liquid':
    setText(s,liquid);
    break;
    case 'famous':
    setText(s,famous);
    break;
    case 'noun':
    setText(s,noun);
    break;
    case 'national':
    setText(s,national);
break;
case 'female':
setText(s,female);
break;
}
}


function getRandNum(num){
 return Math.floor(Math.random() * num);
}

function setText(currSpan, testArray){
    return currSpan.textContent = testArray[getRandNum(testArray.length)];
}