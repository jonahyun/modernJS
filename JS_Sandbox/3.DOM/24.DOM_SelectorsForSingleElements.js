// DOM SELECTOR FOR SINGLE ELEMENTS

// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from element
document.getElementById(document.getElementById('task-title').id);
document.getElementById(document.getElementById('task-title').className);


const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#eee';
taskTitle.style.color = 'red';
taskTitle.style.color = '5px';
taskTitle.style.display = 'none';


// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">My Title</span>';

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
console.log(document.querySelector('ul li').style.color = 'red');
console.log(document.querySelector('li:nth-child(3)').style.color = 'yellow');
console.log(document.querySelector('li:nth-child(4)').textContent = 'Hello World');
console.log(document.querySelector('li:nth-child(odd)').style.background = '#ccc');
