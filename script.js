const taskLists = document.getElementById("ol-Tasks")
let tasks=[];
function addTask(){
    var task = document.getElementById("name-input").value;
    if (task!=""){
        tasks.push(task);
        document.getElementById("name-input").value ="";
        showTasks();
    }
}
function showTasks(){
    var a="";
    tasks.forEach(task => {
        a = a + "<li>"+ task + "</li>";
        console.log(task);
    });
    taskLists.innerHTML = a;
}

function removeTask(){
    tasks.pop();
    showTasks();
}
