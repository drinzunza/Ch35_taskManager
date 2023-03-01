var notImportantIcon = "fa-regular fa-bookmark";
var importantIcon = "fa-solid fa-bookmark";
var isImportant = false;
var isVisible = true;


function toggleImportant() {
    if(isImportant) {
        // change it to Not Important
        isImportant = false;
        $("#formIcon")
            .removeClass(importantIcon)
            .addClass(notImportantIcon);
    }
    else {
        // change it to Important
        isImportant = true;
        $("#formIcon")
            .removeClass(notImportantIcon)
            .addClass(importantIcon);
    }
}

function toggleView() {
    if(isVisible) {
        // hide it
        isVisible = false;
        $("#form").hide();
    }
    else {
        isVisible = true;
        $("#form").show();
    }
}

function saveTask(){
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val();
    let category = $("#selCategory").val();
    let dueDate = $("#selDueDate").val();
    let priority = $("#selPriority").val();
    let color = $("#selColor").val();

    /**
     * JS
     * Object literal
     * Object Constructor
     * Class
    */

    let task = new Task(isImportant, title, desc, category, dueDate, priority, color);
    console.log(task);
    displayTask(task);
}


function displayTask(task){
    let icon = "";
    if(task.isImportant) {
        icon = `<i class='regular-task ${importantIcon}'></i>`;
    }
    else {
        icon = `<i class='important-task ${notImportantIcon}'></i>`;
    }
    // let icon = `<i class='${task.isImportant ? importantIcon : notImportantIcon}'></i>`;

    let syntax = `<div class='task' style="border: 2px solid ${task.color}">
        ${icon}
        <div class='info'>
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>

        <label class='category'>${task.category}</label>

        <div class='details'>
            <label>${task.priority}</label>
            <label>${task.dueDate}</label>
        </div>
    </div>`;

    $("#pending-tasks").append(syntax);
}


function init(){
    console.log("Task manager");

    // hook events
    $("#formIcon").click(toggleImportant);
    $("#toggleView").click(toggleView);
    $("#btnSave").click(saveTask);


    // load data
}



window.onload = init;