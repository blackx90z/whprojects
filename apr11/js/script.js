

// this - context based. look to the left of the dot.

var btns = document.querySelectorAll("button");

for(var i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', function(evt){
console.log(evt.target);
console.log(this);
    });
}



window.addEventListener('click', function(evt){ 
    console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON'){
        console.log(evt.target);
        console.log(this);
    }
});


var cars = ['jeep','honda', 'jeep','subaru'];
console.log(cars);

// objects
var car = {
    type:'jeep',
    model:'wrangler',
    color:'black',
    offroad: true,
    trim: ['sunroof', 'hardtop', '4 wheel drive']
};
// console.log(car.trim);

// firstname, lastname, height, hair, haircolor, facialhair, facialhaircolor, age

var me = {
    firstname:'Ian',
    lastname: 'Morin',
    age: '26',
    height:"5'7",
    hair: 'true',
    haircolor: 'dark brown',
    facialhair: 'none',
    facialhaircolor: 'none',
    greeting: function (msg){
console.log(this.firstname);
console.log(msg + this.firstname);
    }
};
// console.log(me.age);
me.middlename = 'christopher';

// console.log(me);

// me.greeting("sup?");
// object constructor function
function Person(first, last, age, eye){
this.firstname = first;
this.lastname = last;
this.age = age;
this.eye = eye;
this.greeting = function(msg){
    console.log(msg + this.firstname);
};
}

// var myDad = new Person('bill', 'brooks', 64, 'green');
// console.log(myDad);

// var myMom = new Person('missi','baker', 46, 'brown');
// console.log(myMom);

// var mySis = new Person('brandy', 'morin', 29,'brown');
// console.log(mySis);

// mySis.greeting("hello");


// * username email password
var form = document.querySelector('form');
var users = [];
var user = 0;
// console.log(user);
function User(name, email, pw){
    this.User = name;
    this.email = email;
    this.pw = password;
  
}
var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click',function(evt){
    evt.preventDefault();
    users.push(
         new user(
             form.elements[0].value,
            form.elements[1].value,
            form.elements[2].value,));
    // user++;
    console.log(users);
    
});
