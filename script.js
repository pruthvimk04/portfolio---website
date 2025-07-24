// Load tasks from localStorage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task));
};

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== "") {
    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = "";
  }
}

function addTaskToDOM(task) {
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
  localStorage.removeItem('tasks');
  document.getElementById('taskList').innerHTML = '';
}
