var form = document.getElementById("form");
var list = document.getElementById("list")
var tasks =[];
var goAway = document.getElementById("go-away")






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
     <div id="go-away">
        <p>${task.value}</p>
        <p>${task.status} </p>
        ${croix}
        <i class="fas fa-pencil-alt modification"></i>
    </div>`
    })
    return
}






