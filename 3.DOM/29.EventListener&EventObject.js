// One Way
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('button clicked');
//   e.preventDefault();
// });

// Second Way
document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e) {
  // console.log("you clicked me using onClick");
  
  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList; // get as collection

  e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientX;
  val = e.clientY;

  // Coords event relative to the element
  val = e.offsetX;
  val = e.offsetY;

  console.log(val);
  

}