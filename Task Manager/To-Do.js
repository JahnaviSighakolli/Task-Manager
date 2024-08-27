document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        addTask(taskValue);
        taskInput.value = '';
    }
});

function addTask(task) {
    let taskList = document.getElementById('taskList');

    let li = document.createElement('li');
    li.className = 'taskItem';
    li.innerHTML = `${task} <button class="deleteBtn">Delete</button>`;
    
    taskList.appendChild(li);

    li.querySelector('.deleteBtn').addEventListener('click', function() {
        taskList.removeChild(li);
    });
}