
let tasks = [];

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${tasks[i].name}</span>
            <small class="priority">${tasks[i].priority}</small>
            <button onclick="editTask(${i})" class="edit-btn">Edit</button>
            <button onclick="deleteTask(${i})" class="delete-btn">Delete</button>
        `;

        list.appendChild(li);
    }

    document.getElementById("taskCount").innerHTML =
        tasks.length + " tasks";
}
function addTask() {
    let task = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;

    if (task.trim() === "") {
        alert("Enter a task!");
        return;
    }

    tasks.push({
        name: task.trim(),
        priority: priority
    });

    document.getElementById("task").value = "";

    displayTasks();
}
function editTask(i) {
    let updated = prompt("Edit task:", tasks[i].name);

    if (updated !== null && updated.trim() !== "") {
        tasks[i].name = updated.trim();
        displayTasks();
    }
}

function deleteTask(i) {
    tasks.splice(i, 1);
    displayTasks();
}

displayTasks();
