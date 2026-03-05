let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks))
}

function renderTasks(){

let list = document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((task,index)=>{

let li = document.createElement("li")

if(task.completed){
li.classList.add("completed")
}

li.innerHTML = `
<span onclick="toggleTask(${index})">${task.text}</span>
<button class="delete-btn" onclick="deleteTask(${index})">X</button>
`

list.appendChild(li)

})

}

function addTask(){

let input = document.getElementById("taskInput")

let text = input.value.trim()

if(text==="") return

tasks.push({
text:text,
completed:false
})

saveTasks()

renderTasks()

input.value=""

}

function deleteTask(index){

tasks.splice(index,1)

saveTasks()

renderTasks()

}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed

saveTasks()

renderTasks()

}

renderTasks()
