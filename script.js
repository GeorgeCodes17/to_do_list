function ensureDateIsInFuture(input){
    let today = new Date()
    let todate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    input = input.replace(/-0+/g, '-')
    input = new Date(input)
    todate = new Date(todate)
    if(input < todate){return false}
    else{return true}
}
function ensureToDoAndDateAreEntd(toDoInputted, dateInputted){
    if (toDoInputted.value === "" || dateInputted.value === ""){
        return false
    }else{return true}
}
document.getElementById("insert-to-do").onclick =
function addToDo(){
    let toDoInputted = document.getElementById("input-to-do")
    let dateInputted = document.getElementById("input-date")
    let inputDate = dateInputted.value
    if (ensureToDoAndDateAreEntd(toDoInputted, dateInputted) == false){
        alert("Please enter into all")
        return
    }else if (ensureDateIsInFuture(inputDate) == false){
        alert("Date must be in the future")
        return
    }

    var newToDoLi = document.createElement("div");
    
    let allDates = document.querySelectorAll(".toDoItem")
    let dateEntdLaterThanAllOthers = true
    for (let i=0; i < allDates.length; i++){
    let currentDate = allDates[i].querySelector("div")
    let dateInputted = document.getElementById("input-date").value;
    if (dateInputted < currentDate.innerHTML){

        let toDoInputted = document.getElementById("input-to-do").value;
        let dateInputted = document.getElementById("input-date").value;
        var toDo = newToDoLi.appendChild(document.createElement("h6"));
        var toDoDate = newToDoLi.appendChild(document.createElement("div"));
        var selectText = newToDoLi.appendChild(document.createElement("span")) 
        var selectBox = newToDoLi.appendChild(document.createElement("input"))
        selectBox.setAttribute("type", "checkbox")
        toDo.textContent  = toDoInputted;
        selectText.textContent = "Select ";
        toDoDate.textContent = dateInputted;
        document.getElementById("to-dos").insertBefore(newToDoLi, allDates[i])
        newToDoLi.setAttribute("class", "toDoItem");
        newToDoLi.setAttribute("id", "element" + allDates.length+1);
        dateEntdLaterThanAllOthers = false
        i = allDates.length
    }
    }if (dateEntdLaterThanAllOthers){
        console.log("There isn't other todos")
        var ul = document.getElementById("to-dos");
        
        let toDoInputted = document.getElementById("input-to-do").value;
        let dateInputted = document.getElementById("input-date").value;
        var toDo = newToDoLi.appendChild(document.createElement("h6"));
        var toDoDate = newToDoLi.appendChild(document.createElement("div"));
        var selectText = newToDoLi.appendChild(document.createElement("span")) 
        var selectBox = newToDoLi.appendChild(document.createElement("input"))
        selectBox.setAttribute("type", "checkbox")
        toDo.textContent = toDoInputted;
        selectText.textContent = "Select ";
        toDoDate.textContent = dateInputted;
        ul.appendChild(newToDoLi);
        newToDoLi.setAttribute("class", "toDoItem");
        newToDoLi.setAttribute("id", "element" + (allDates.length+1));
    }
    document.getElementById("input-to-do").value = ""
    document.getElementById("input-date").value = ""
    }

document.getElementById("clear-to-do").onclick=
function deleteToDo(){
    let toDoItems = document.querySelectorAll(".toDoItem")
    for (var i = 0, len = toDoItems.length; i < len; i++) {
        toDoItems[i].remove()
    }
}
document.getElementById("delete-to-do").onclick=
function deleteToDo(){
    let toDoItems = document.querySelectorAll(".toDoItem")
    for (var i = 0, len = toDoItems.length; i < len; i++) {
        let checkBox = toDoItems[i].querySelector("input")
        if (checkBox.checked){
            toDoItems[i].remove()
        }
    }
}