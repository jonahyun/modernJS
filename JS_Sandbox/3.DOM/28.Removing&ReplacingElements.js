// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const OldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Repalce
cardAction.replaceChild(newHeading, OldHeading);


console.log(newHeading);



// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

///Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
console.log(firstLi.children[0]);


let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// ATTRIBUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
val = link.hasAttribute('href');


console.log(val);