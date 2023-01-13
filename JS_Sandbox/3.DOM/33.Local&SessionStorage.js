// Set session storage item
// sessionStorage.setItem('name', 'Beth');

// Local Storage - have to be string

// // Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');



// // remove from storage
// // localStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name,age);

document.querySelector('form').addEventListener('submit', 
  function(e) {
    const task = document.getElementById('task').value;
    let tasks;

    // check if anything is in local storage
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      // below is string so need to parse to JSON or object so we can use
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('task saved');
    e.preventDefault();
});


const tasks = JSON.parse(localStorage.getItem('tasks'));

if (tasks) {
  tasks.forEach(function(task) {
    console.log(task);
  });
} else {
  console.log('No tasks found in local storage.');
}