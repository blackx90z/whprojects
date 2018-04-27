function getChar(char){
    var char = prompt('pick your class, (Shadowstalker ,Mage ,Paladin, warrior)');
    var name = prompt ('what is your name?');
    var user = prompt('choose a number from 1 to 10 this number will be what button you click on');
console.log(char);
console.log(name);
document.getElementById("char").innerHTML = char;
document.getElementById("name").innerHTML = name;
}getChar();
getGender();


function getGender(){
    var gender = prompt('Are you Male or Female');
    document.getElementById("gender").innerHTML = gender;
if(gender == 'Male'){
    console.log('strong man'); 
} if(gender == 'Female'){
    console.log('strong woman');
}}
function getAnimal(pet){
var userAnimal = prompt('what kind of animal will you choose for your ride');
if(userAnimal == 'chocobo'){
    console.log('sweet ride bro!!');
}else if (userAnimal != 'chocobo')
console.log('not what i had in mind but ok');
document.getElementById("pet").innerHTML = animal;
}
getAnimal();

function getuserAnswer(ans){
    document.getElementById('answer') = getuserAnswer;
}