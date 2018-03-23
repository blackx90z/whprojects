function HeadIfYouGotIt(){
    var first = prompt("what is your first name?");
    var last = prompt("what is your last?");
    document.getElementById('welhead').style.color = "white";
    document.getElementById('welhead').innerHTML = first +" " + last ;
}
function  VerticalSwitch(){
    document.getElementById('btn3').style.color = "black";
    document.getElementById('btn3').innerHTML;
    document.body.classList.add('btn3');
}
function NavSwitch(){
    var navBtn = document.getElementById("navBtn");
    var nav = document.getElementById("nav");
    navBtn.addEventListener("click", showNav);
    
}




