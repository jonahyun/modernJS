// Event Bubbling and Event Delegation

// EVENT BUBBLING - - when event action bubble up the DOM to it's parents.

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });


/* EVENT DELEGATION - opposite of bubbling. event triggers from parent and that will target specific child element
Without it, it may not work. If you dymanically insert something into the DOM using javascript, you will need EVENT DELEGATION.

*/
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if(e.target.parentElement.className === 'fa fa-remove') {
  //   console.log('delete');
  // }
  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  };

}