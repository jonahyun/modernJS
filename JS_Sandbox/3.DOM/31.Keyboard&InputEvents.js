// INPUT AND FORM EVENTS

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

// Keydown / keyup / keypress
taskInput.addEventListener('keydown', runEvent);
taskInput.addEventListener('keyup', runEvent);
taskInput.addEventListener('keypress', runEvent);

// Focus & Blur
taskInput.addEventListener('focus', runEvent);
taskInput.addEventListener('blur', runEvent);

// Cut / Paste
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);

// Input - anything we do will fire off
taskInput.addEventListener('input', runEvent);

// Change - works on select dropdown ex..
Selection.addEventListener('change', runEvent);



function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  // console.log(e.target.value);

  heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);
  e.preventDefault();
}