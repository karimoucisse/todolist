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
    
    printTasks()
       
}

function onClickRemove(indexElement){
    
    // console.log(indexElement);
    // console.log(`onClickRemove tablau task ${tasks.length}`);
    tasks.splice(indexElement,1)
    // console.log(`onClickRemove after remove tablau task ${tasks.length}`);
    
    printTasks()
    
    // list = taskeList()
    // console.log(`voici ${list}`);
}
function printTasks(){
    list.innerHTML=""
    tasks.forEach(function(task,index){
        
        var croix = `<i class="fas fa-times remove"  onclick="onClickRemove(${index})"></i>`
        list.innerHTML = list.innerHTML + `
            <div id="list_container">
                <p>${task.value}</p>
                <div class="status_list_container" id="status_list_container${index}">
                    ${task.status} 
                    <i class="fas fa-sort-down" onclick="onClickPrintStatus(${index})"></i> 
                </div>
                ${croix}
                <div id="modif${index}">
                    <i class="fas fa-pencil-alt modification"  onclick=" onClickPrintInput(${index})"></i>
                </div>
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
    printTasks()
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
    tasks[indexElement].status="To Do"
    printTasks()
    return
}
function onClickTDoingStatus(indexElement){
    tasks[indexElement].status="Doing"
    printTasks()
    return
}
function onClickDoneStatus(indexElement){
    tasks[indexElement].status="Done"
    printTasks()
    return
}





