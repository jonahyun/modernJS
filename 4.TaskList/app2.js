// Build UI 
// Form
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector("#task");
const addTaskButton = document.querySelector('btn');
const filterTasks = document.querySelector('#filter');
const clearTasks = document.querySelector('.clear-tasks');
const taskList = document.querySelector('ul.collection');


loadEventListeners();

function loadEventListeners() {
    taskForm.addEventListener('submit', addTask);

    
}

function addTask(e) {
    if(taskInput.value === '') {
        alert("Add task");
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = '';

    console.log(li);

    e.preventDefault();
}