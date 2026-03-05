function addTask(){

let input = document.getElementById("taskInput")

let taskText = input.value

if(taskText === "") return

let task = document.createElement("div")

task.className = "task"

task.innerHTML = taskText

document.getElementById("taskList").appendChild(task)

input.value=""

}
