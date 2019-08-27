let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");
let imagenes = document.querySelectorAll(".works-content img");
let modales = document.querySelectorAll(".modal");
let botonCerrar = document.querySelectorAll(".close-button");

console.log(imagenes);
console.log(modales);
console.log(botonCerrar);


function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
};

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }
});

getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
});

getWorks.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
});

getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
});

var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

imagenes[0].addEventListener("click", function(){
    modales[0].classList.add("modal-on");
});

imagenes[1].addEventListener("click", function(){
    modales[1].classList.add("modal-on");
});

imagenes[2].addEventListener("click", function(){
    modales[2].classList.add("modal-on");
});

imagenes[3].addEventListener("click", function(){
    modales[3].classList.add("modal-on");
});

imagenes[4].addEventListener("click", function(){
    modales[4].classList.add("modal-on");
});

imagenes[5].addEventListener("click", function(){
    modales[5].classList.add("modal-on");
});

imagenes[6].addEventListener("click", function(){
    modales[6].classList.add("modal-on");
});

imagenes[7].addEventListener("click", function(){
    modales[7].classList.add("modal-on");
});


botonCerrar[0].addEventListener("click", function(){
    modales[0].classList.remove("modal-on");
});

botonCerrar[1].addEventListener("click", function(){
    modales[1].classList.remove("modal-on");
});

botonCerrar[2].addEventListener("click", function(){
    modales[2].classList.remove("modal-on");
});

botonCerrar[3].addEventListener("click", function(){
    modales[3].classList.remove("modal-on");
});

botonCerrar[4].addEventListener("click", function(){
    modales[4].classList.remove("modal-on");
});

botonCerrar[5].addEventListener("click", function(){
    modales[5].classList.remove("modal-on");
});

botonCerrar[6].addEventListener("click", function(){
    modales[6].classList.remove("modal-on");
});

botonCerrar[7].addEventListener("click", function(){
    modales[7].classList.remove("modal-on");
});