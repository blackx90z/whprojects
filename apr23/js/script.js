// if(typeof Storage!= "undefined"){
//     console.log('yay storage');
// }else{
//     console.log('boo.');
// }

// var storageBtn1 = document.querySelector('#Btn1');
// var storageBtn2 = document.querySelector('#Btn2');
// storageBtn1.addEventListener('click', getLocalStorage);
// storageBtn2.addEventListener('click', getSessionStorage);

// function getLocalStorage(){
//     localStorage.setItem('firstname', 'Ian');
// }

// function getSessionStorage(){
//     sessionStorage.setItem('vehicle', 'honda');
// }

var saveBtn = document.querySelector('input[type="submit"]');
if(localStorage.getItem("details")!= null){
    saveBtn.addEventListener('click', getUserInfo);
    saveBtn.addEventListener('click', checkPassword);
    var userInfo = JSON.parse(localStorage.getItem("details"));
    document.querySelector('input[type="text"]').value = userInfo.user;
}else{
    saveBtn.removeEventListener('click', checkPassword);
    saveBtn.addEventListener('click', getUserInfo);

}
    alert('please enter your password');
    
function getUserInfo(evt){
evt.preventDefault();
var radio = document.querySelectorAll('input[type="radio"]:checked').value;
// console.log('get info');
var username = document.querySelector('input[type="text"]').value;
var password = MD5(document.querySelector('input[type="password"]').value);
localStorage.setItem ('details',JSON.stringify(new UserInfo(username, password, radio)));






function UserInfo(un , pw){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkUserInfo(){
    if(localStorage.getItem("details")!= null){
        document.querySelector('label["for=theme"]').atyle.display = 'none';
        
        var userInfo = JSON.parse(localStorage.getItem("details"));
        document.querySelector('input[type="text"]').value = userInfo.user;
 
}else{
    // alert('please enter your password');

}
}
checkUserInfo();

function checkPassword(evt){
    evt.preventDefault();
    var userName = MD5(document.querySelector('input[type"text"]').value);
    var userpass =  MD5(document.querySelector('input[type="password"]').value);
    var userInfo = JSON.parse(localStorage.getItem("details"));
    if(userName == userpass == userInfo.pass){
        alert('welcome home');
        document.body.classList.add(userInfo.theme);
    }else{
        alert('please enter a correct password');
    }checkPassword();
    
}}
