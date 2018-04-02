// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log('p1q');
// var pClass = document.querySelector('.p');
// console.log(pClass);
// var pLast = document.querySelector('p:last-of-type');
// console.log('pLast');


// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[3].style.color ='blue';
// var pByClassname = document.getElementsByClassName('p');
// console.log('pByClassname');
// pByClassname[2].style.fontSize = '65px';

// var pByTagname = document.getElementsByTagName('p');
// console.log('pByTagname');
// pByTagname[9].style.color = 'yellow';
// console.log (pByTagname.length);

// for loop
// |---------------------| ARGUMENTS
// |----------| NEW VARIABLE
//             |--| number of loops
//                   |-|incrementor
// for(var i = 0; i<10; i++){
    // pByTagname[i].style.color = 'red';
    // console.log(i);
// }
// var ian = "ian";
// for(var x = 0; x<ian.length; x++){
// console.log(x);
// console.log(ian[x]);
// }




// function getUsername(){
// var username = prompt("please enter your name");
// console.log (username + 'from inside the function')

// printUsername(username);
// }

// getUsername();
// function printUsername(x){
//     for(var i = 0; i < x.length; i++){
//     console.log(x[i]);
//      }

// }

// get user two numbers

// function getUserNums(){
// var num1 = prompt('please enter a number');
// var num2 = prompt('please enter another number');
// addUserNums(num1, num2);
// }


// alert added numbers

// function addUserNums(x, y){
    // console.log(arguments);
// alert(  parseInt(x) + parseInt (y));
// }
// getUserNums();

// write a function that asks the user for three colors
// write another function 
// loop through arument array
// each paragraph to be each color

var paragraphs = document.querySelectorAll('p');
function getUserColors(){
    var getUserColors = prompt('pick some colors(coma separated)')
    var userTrimmedColors= [];
    for(var i = 0; i<userColors.length; i++){
        userTrimmedColors.push(userColors[i].trim());
    }
    // var color1 = prompt('pick a color');
    // var color2 = prompt('pick another color');
// var color3 = prompt('pick your last color');
console.log(UserColors.split(','));
}


function assignUserColors(x,y,z){
    for(var i = 0; i< arguments.length; i++){
        paragraphs[i].style.color = arguments[i];
    }
console.log(x,y,z);
}





