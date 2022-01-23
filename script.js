var cats = document.getElementById('cats');
var dogs = document.getElementById('alpacas');
var alpacas = document.getElementById('dogs');
var returnBtn = document.querySelector('.return_btn');
var catsRedirectBtn = document.querySelector('#cats_redirect');
var alpacasRedirectBtn = document.querySelector('#alpacas_redirect');
var dogsRedirectBtn = document.querySelector('#dogs_redirect');

function redirect(e) {
    if (e.target.id) {
        window.location.href = e.target.id;
    }
}

returnBtn.onclick = redirect;



if (cats && dogs && alpacas) {
    cats.onclick = redirect;
    dogs.onclick = redirect;
    alpacas.onclick = redirect;
}


if(!window.location.href.includes('index.html')) {
    returnBtn.style.display = 'block';
}

if(catsRedirectBtn){
    catsRedirectBtn.onclick = function(){
        window.open('https://petstory.ru/knowledge/cats/cat-behavior/kak-dressirovat-koshku/');
    }
}

if(alpacasRedirectBtn){
    alpacasRedirectBtn.onclick = function(){
        window.open('https://www.youtube.com/watch?v=7yk3gdbvW1k');
    }
}

if(dogsRedirectBtn){
    dogsRedirectBtn.onclick = function(){
        window.open('https://wikipetclub.com/');
    }
}