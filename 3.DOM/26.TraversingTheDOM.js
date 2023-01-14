// TRAVERSING THE DOM - Move up and down - parents and child of nodes

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// // Get child nodes - return node list
val = list.childNodes; 
val = list.childNodes[0]; 
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// Type of Nodes
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
//10 - Doctype


// Get Children Element Nodes - returns HTML collection
val = list.children;
val = list.children[1];
list.children[1].textContent = "Ohio State";


// Children of Children
list.children[3].children[0].id = "test link";
val = list.children[3].children[0]

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

// Count chil Elements
val = list.childElementCount; // returns 5


// GET PARENT NODE
val = listItem.parentNode;  // it will get UL
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// GET NEXT SIBLING
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// GET PREVIOUS SIBLING
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);