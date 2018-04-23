var characterUl = document.querySelector('ul');
var homeUrl = `https://rickandmortyapi.com/api/character/`

// function getReq(url, func){
// var req = new XMLHttpRequest();
// req.open('get', url );
// req.onload = function(){
//     if(req.readyState === 4 && req.status === 200){
// console.log('success!', req.statusText);
// func(JSON.parse((req.responseText))); 
//     }else{
//         console.log('error!', req.statusText);
//     }

// }
// req.send(null);
// }
function ajaxReq(url, func){
$.ajax({
    url: url,
}).done(func);
}
ajaxReq(homeUrl, getCharacters);
var characterURL;

characterUl.addEventListener('click',function(evt){
    evt.preventDefault(this);
    console.log(evt);
});


$('body > ul').on('click','li',function(evt){
    if(this.dataset.url){
        characterURL = this.dataset.url;
        characterUl.innerHTML = '';
        getReq(characterURL, getCharacter);
    }
});
function getCharacter(character){
    console.log(character);
    var character = `
<li data-url="${character.url}>
<img src="${character.image}" alt="${character.name}">
<div>
<h3>${character.name}</h3>
    <ul>
        <li><b>Species:</b>${character.species}</li>
        <li><b>Status:</b>${character.status}</li>`;
        $;{;
          if(!character.type == ""){
              character +=  '<li><b>Type:</b>${character.type}</li>';
        character += `
<li><b>Gender:</b>${character.gender}</li>`;
        }
  };characterUl.innerHTML += character};
