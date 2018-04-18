// var paras = document.querySelectorAll('p');
// paras.classList.contains('classname');


// // ! = NOT
// for( var i = 0; i < paras.length; i++){
//     // console.log(paras[i].classList.contains('para'));
//     if(!paras[i].classList.contains('para')){
//         console.log('thats not true');
//     }
//     }


// console.log(3 === '3');
// console.log(typeof(3));
// console.log(typeof('3'));
// // == loose comparison
// // === strict comparison

// var userNum = parseInt(prompt ('pick a number'));

// if(!userNum){
// console.log(3 + userNum);
// }else{
//     console.log('please enter something');
// }


// xmlhttprequest
// console.log(XMLHttpRequest());

var weatherKey = 'fe9dc66d4eec35f2c42ead3a91051ac5';
var myUl = document.querySelector('ul');
var req = new XMLHttpRequest();
req.open('GET' ,'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fe9dc66d4eec35f2c42ead3a91051ac5' );
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
}
req.send(null);
// console.log(req.responseText);

function processData(data){
for(var i = 0; i < data.list.length; i++){
    var timeOfDay;
    var weatherDesc = data.list[i].weather[0].description;
    var myLi = `
    <li>
    <p>${timeOfDay}</p>
    </li>`
    myUl.innerHTML += myLi;
}
}