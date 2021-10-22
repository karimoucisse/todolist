var form = document.getElementById("form");
var list = document.getElementById("list")
var tasks =[];
var goAway = document.getElementById("goaway" )
// var inputText = document.getElementById("input")


// remove.addEventListener('mousemove', function(event) {
//     console.log(event);
// });

 function onTaskSubmit() {          
    var input = document.getElementById("input")
    var values = {
        value:input.value,
        status:"to do"
    }
    tasks.push(values)
    console.log(tasks);
    
    printTasks(tasks)
       
}

function onClickRemove(indexElement){
    
    // console.log(indexElement);
    // console.log(`onClickRemove tablau task ${tasks.length}`);
    tasks.splice(indexElement,1)
    // console.log(`onClickRemove after remove tablau task ${tasks.length}`);
    
    printTasks(tasks)
    
    // list = taskeList()
    // console.log(`voici ${list}`);
}
function printTasks(array){
    list.innerHTML=""
    array.forEach(function(task,index){
        
        var croix = `<i class="fas fa-times remove"  onclick="onClickRemove(${index})"></i>`
        list.innerHTML = list.innerHTML + `
        <div id="list_container">
            <p>${task.value}</p>
            <div class="status_list_container" id="status_list_container${index}">
                ${task.status} 
                <i class="fas fa-sort-down" onclick="onClickPrintStatus(${index})"></i> 
            </div>
            <div id="modif${index}">
                <i class="fas fa-pencil-alt modification"  onclick=" onClickPrintInput(${index})"></i>
            </div>
            <div id="priority${index}" class="priority">
                <i class="fas fa-sort-amount-down" onclick="onClickPriority(${index})"></i>
            </div>
            <div class="container-remove">${croix}</div>
        </div>`
    })
    return
}
function onClickPrintInput(indexElement){
    var modif = document.getElementById(`modif${indexElement}`)
    modif.innerHTML=`
        <form>
            <input type="text" id="input_change" placeholder="Change task">
            <i type="submit" class="fas fa-plus modification_plus" onclick="onClickModification(${indexElement})" ></i>
        </form>
    `;
    
    return
}
function onClickModification(indexElement){
    tasks[indexElement].value=input_change.value;
    
    console.log(input_change.value);
    console.log(`index ${tasks[indexElement].value}`);
    printTasks(tasks)
    return
}
function onClickPrintStatus(indexElement){
    
    var statusList = document.getElementById(`status_list_container${indexElement}`)
    index=indexElement;
    statusList.innerHTML+=`
        <div class="status_list">
            <ul>
                <li id="status_todo"><button onclick="onClickTodoStatus(${index})">To Do</button></li>
                <li id="status_doing"><button onclick="onClickTDoingStatus(${index})">Doing</button></li>
                <li id="status_done"><button onclick="onClickDoneStatus(${index})">Done</button></li>
            </ul>
        </div>`
        
    return
}
function onClickTodoStatus(indexElement){
    tasks[indexElement].status="to do"
    printTasks(tasks)
    return
}
function onClickTDoingStatus(indexElement){
    tasks[indexElement].status="Doing"
    printTasks(tasks)
    return
}
function onClickDoneStatus(indexElement){
    tasks[indexElement].status="Done"
    printTasks(tasks)
    return
}
// function onclickFilterTodo(){
//     var filterTodo = tasks.filter(function(task){
//         return task.status==="to do"
//     })
//     tasks = filterTodo;
//    console.log(filterTodo);
//    printTasks()
//     return
// }
// function onclickFilterdoing(){
//     var filterDoing = tasks.filter(function(task){
//         return task.status==="Doing"
//     })
//     tasks = filterDoing;
//    printTasks()
//     return
// }
// function onclickFilterdone(){
//     var filterDone = tasks.filter(function(task){
//         return task.status==="Done"
//     })
//     tasks = filterDone;
//    printTasks()
//     return
// }
function filterButtons(filterStatus){
    var filter= tasks.filter(function(task){
        return task.status===`${filterStatus}`
    })
    // tasks = filter;
   printTasks(filter)
    return
}

function onRandomClick (){
    // var random = document.getElementById("random_task");
    var list = ["Sport","Menage","Balade","Travail","musculation","meditation","lecture"]
    var min = 0;
    var max = list.length - 1;
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("voici mon random",list[random]);
    tasks.push({value:list[random],
        status:"to do"})
    printTasks(tasks)
    return
}
function onDeleteClick() {
    tasks = [];
    printTasks(tasks)
    return
}
function onClickPriority(indexElement){
    
    var priority = document.getElementById(`priority${indexElement}`)
    index=indexElement;
    priority.innerHTML=`
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>`
        
    return
}





