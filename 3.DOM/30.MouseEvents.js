// MOUSE EVENTS

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Events
clearBtn.addEventListener('click', runEvent);
clearBtn.addEventListener('dblclick', runEvent);
clearBtn.addEventListener('mousedown', runEvent);
clearBtn.addEventListener('mouseup', runEvent);

// Triggers on main element
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);

// Triggers when you go over main element & any element inside
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);

// mousemove - when you move anywhere inside the element
// Used for games
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `mouseX: ${e.offsetX} MouseY:${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}