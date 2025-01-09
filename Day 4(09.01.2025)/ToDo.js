var listOfData = [];
var input = document.getElementById("input"); 
var button = document.getElementById("button");
var todo = document.getElementById("todo"); 

button.onclick = addTask; 

function addTask() {
  var taskValue = input.value.trim();
  if (taskValue) {
    var currentTime = new Date().toLocaleString();
    listOfData.push({ task: taskValue, time: currentTime });
    input.value = "";
    displayTasks(); 
  }
}

function displayTasks() {
  todo.innerHTML = ""; 
  listOfData.forEach(function(item, i) {
    todo.innerHTML += `
      <li>
        <div class="task-content">
          <span>${item.task}</span>
          <div class="task-time">${item.time}</div>
        </div>
        <div class="actions">
          <a href="#" onclick="editTask(${i})">Edit</a>
          <a href="#" class="delete" onclick="deleteTask(${i})">×</a>
        </div>
      </li>
    `;
  });
}

function editTask(i) {
  var updatedTask = prompt("Update your task:", listOfData[i].task);
  if (updatedTask) {
    listOfData[i].task = updatedTask;
    listOfData[i].time = new Date().toLocaleString();
    displayTasks();
  }
}

function deleteTask(i) {
  if (confirm("Are you sure you want to delete this task?")) {
    listOfData.splice(i, 1); 
    displayTasks();
  }
}
