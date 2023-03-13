document.querySelector(".add").onclick = function () {
    if (document.querySelector(".new-task-input").value === "") {
        alert("please input a task");

    } else {
        document.querySelector(".todo-section").innerHTML += ` <section class = "flex-delete"><div class="task"><span id = "taskname">
        ${document.querySelector(".new-task-input").value}</span>
        </div> <button class = "delete">
        <i class = "fa fa-trash"></i>
        <button>
        </section>`;

        let currentTask = document.querySelectorAll(".delete");
        for (let i = 0; i < currentTask.length; i++) {
            currentTask[i].onclick = function () {
                this.parentNode.remove();
            }

        }
    }
}//