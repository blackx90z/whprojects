

var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');

var selectedArray = [];
var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt:"beach",
        title: "beach front property",
        cost: 100,
        desc:"Another image that i'm selling using other peoples hard work"
    }
];

function displayItems(arr){
    for(var i = 0; i< arr.length; i++){
        console.log(arr[i].alt);
        var item = `
<li data-sku="${i}">
<input type="checkbox">
<img src="${arr[i].img}" alt="${arr[i].alt}">
<h3>${arr[i].title}</h3>
<p>$${arr[i].cost}</p>
<p>${arr[i].desc}</p>
</li>`;
items.innerHTML += item;
    }
}
displayItems(itemArray);
var items = document.querySelector('#items');
var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=206",
        alt:"is it working?",
        title: "unsplashed Photo",
        cost: 100,
        desc:"Another image that i'm selling using other peoples hard work"
    }
];

function displayItems(arr){
    for(var i = 0; i< arr.length; i++){
        console.log(arr[i].alt);
        var item = `
<li data-sku="00${i + 1}">
<input type="checkbox">
<img src="${arr[i].img}" alt="${arr[i].alt}">
<h3>${arr[i].title}</h3>
<p>$${arr[i].cost}</p>
<p>${arr[i].desc}</p>
</li>`;
items.innerHTML += item;
    }
}
displayItems(itemArray);
var items = document.querySelector('#items');
var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=200",
        alt:"is it working?",
        title: "unsplashed Photo",
        cost: 125,
        desc:"Another image that i'm selling using other peoples hard work"
    }
];

function displayItems(arr){
    for(var i = 0; i< arr.length; i++){
        console.log(arr[i].alt);
        var item = `
<li data-sku="00${i + 1}">
<input type="checkbox">
<img src="${arr[i].img}" alt="${arr[i].alt}">
<h3>${arr[i].title}</h3>
<p>$${arr[i].cost}</p>
<p>${arr[i].desc}</p>
</li>`;
items.innerHTML += item;
    }
}
displayItems(itemArray);
var items = document.querySelector('#items');
var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=110",
        alt:"is it working?",
        title: "unsplashed Photo",
        cost: 150,
        desc:"Another image that i'm selling using other peoples hard work"
    }
];

function displayItems(arr){
    for(var i = 0; i< arr.length; i++){
        console.log(arr[i].alt);
        var item = `
<li data-sku="00${i + 1}">
<input type="checkbox">
<img src="${arr[i].img}" alt="${arr[i].alt}">
<h3>${arr[i].title}</h3>
<p>$${arr[i].cost}</p>
<p>${arr[i].desc}</p>
</li>`;
items.innerHTML += item;
    }
}
displayItems(itemArray);



function addListener(arr,objArr){
for(var i = 0; i< arr.length; i++){
    arr[i].addEventListener('click',function(evt){
        this.classList.toggle('selected');

        // TERNARY OPERATOR AKA SUPER AWESOME IF STATEMENT
        (this.firstElementChild.checked)?
        this.firstElementChild.checked = false:
        this.firstElementChild.checked = true;
        console.log(this.dataset.sku, parseInt(this.dataset.sku)+1);



        // console.log(this.dataset.sku);
        // selectedArray.push(arr[this.dataset.sku]);
        // console.log(Array.from(arr));
        // console.log(arr.slice(this.dataset.sku));
        selectedArray.push(objArr.slice)
        console.log(selectedArray);
    });
    }
}
addListener(items.children, itemArray);