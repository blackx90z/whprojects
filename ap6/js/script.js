//* MATH OBJECT

// integers - whole numbers
// floats - decimals

// var wha = .1 * .2;
// 0.020000000000000004

// var rounded = Math.round(0.000000000000000000001);
// .49 && below rounds down
// .5 && above give it a shove
// Math.ceil
// var roundedUp = Math.ceil(0.000000000000000000001);

// Math.floor();
// var roundedDown = Math.floor(0.999999999999);

// Math.PI();
// var pi = Math.PI;
// math.pow();
// console.log ( Math.pow(8,2));
// Math.sqrt();
// console.log( Math.sqrt(64));

// Math.random
// console.log( Math.random());

// console.log('.round():',rounded, '.ceil():',roundedUp, '.floor():', roundedDown, '.PI():'+pi);

// Random number generator
// 

var userPick = document.getElementById('userPick');
var submitBtn = document.querySelector('#submit');
var resetBtn = document.querySelector('#reset');
var userPickRes = document.querySelector('h1');


// submitBtn.addEventListener('click', getuserPick);
resetBtn.addEventListener('click', getRandNum);
var rand;
var attempts = 3;

function getRandNum(){
    getRandColor();
    attempts = 3;
    userPickRes.innerHTML = '';
    userPick.Value = '';
rand = Math.random();
rand = Math.floor( rand * 11);
console.log(rand);
}
getRandNum();
// var rand = Math.random();
// rand = Math.floor( rand * 11);

function getuserPick(){
    attempts = attempts - 1;
    var userNum = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = '';
}

function checkUserPick(x){
    console.log(x);
    if( attempts > 0 ){
        if(x < rand){
        printUserRes(x + 'is too low. pick again');
    }else if (x > rand){
        printUserRes(x + 'is too high. Pick again');
    }else if(x == rand){
        printUserRes(x + ' is the right number!! you win');
    }
else{
    printUserRes('wrong answer!');
}
}
}
function printUserRes( userRes){
userPickRes.innerHTML = userRes;
}

// add another button that will run a function
// to reset the random number
var randColor;

function getRandColor(){
    randColor = Math.random();
    randColor = Math.floor( randColor * 360);
    console.log(randColor);
    document.stylesheets.backgroundColor = 'hsl'(' + randColor +',' + 50%, 50% ');
} getRandColor();
console.log(window.innerWidth, window.innerHeight);

window.addEventListener('mousemove', function(e){
    var width = Math.round(e.x / window.innerWidth);
    var height = Math.round(e.y / window.innerHeight);
    console.log(Math.round(e.x / window.innerWidth , e.y / window.innerHeight)) * 100;
    document.body.style.backgroundColor = 'hsl(' + randColor + ', ' + width+ '%' +
} )
