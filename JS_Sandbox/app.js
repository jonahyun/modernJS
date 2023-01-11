let val;

// General 
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;


// Forms
val = document.forms;
val = document.forms[0];
val = document.form[0].id;
val = document.form[0].action;

// links
val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');


// Run through as array. Must be arrray for it work in looping
let scriptsArray = Array.from(scripts);
scripts.forEach(function(script){
  console.log(script.getAttribute('src'));
});