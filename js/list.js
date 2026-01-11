function addTask() {

    var taskText = document.getElementById("task").value;

    if (taskText == "") {
        alert("Please enter a task");
    } else {

        var li = document.createElement("li");
        li.innerHTML = taskText;

        
        var delIcon = document.createElement("span");
        delIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
             fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5"/>
          <path d="M8 5.5A.5.5 0 0 1 8.5 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5"/>
          <path d="M10.5 5.5A.5.5 0 0 1 11 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5"/>
          <path d="M14.5 3H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3H1.5V2h13z"/>
        </svg>
        `;

        delIcon.className = "delete-icon";

        delIcon.onclick = function () {
            li.remove();
        };

        li.appendChild(delIcon);
        document.getElementById("taskList").appendChild(li);

        document.getElementById("task").value = "";
    }
}
