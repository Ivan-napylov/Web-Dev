function addTask() {
    let taskText = document.getElementById("taskInput").value;
    
    if (taskText.trim() === "") return;

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.className = "list-group-item";
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    checkbox.onclick = function() {
        if (checkbox.checked) {
            taskTextSpan.style.textDecoration = "line-through";
        } else {
            taskTextSpan.style.textDecoration = "none";
        }
    };
    
    let taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-danger";
    deleteBtn.innerHTML = "&#128465;";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    
    li.appendChild(checkbox);
    li.appendChild(taskTextSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    document.getElementById("taskInput").value = "";
}