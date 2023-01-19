// Defin UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);

    // clear task
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from Local Localstorage - so it will display on screen.
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // Create li element
        const li = document.createElement('li');
        
        // Add class
        li.className = 'collection-item';
        
        // Create text node and appendto li
        li.appendChild(document.createTextNode(task));

        // Create new link element
        const link = document.createElement('a');

        // Add class
        link.className = 'delete-item secondary-content';

        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
        });
}



function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    
    // Add class
    li.className = 'collection-item';
    
    // Create text node and appendto li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');

    // Add class
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in Localstorage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}


function storeTaskInLocalStorage (task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        // Local storage can only hold strings, so need to parse when it comes out
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();

        // Remove for Localstorage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);

    };
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

}


function clearTasks() {
    // taskList.innerHTML = '';

    // Faster
    while(taskList.firstChild) { 
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from LS
    clearTasksFromLocalStorage();
}



function clearTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase(); // captures whatever that's being typed
    
    // We can use querySelectorAll (returns a node list) to use forEach. If we use other selector such as getElementByClassName that will return html collection and have to convert to array in order to use forEach
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}
