
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");


function Add() {
    if (inputs.value === "") {
        alert("Please enter your to-do task");
    } else {
        let newTask = document.createElement("li"); 
        newTask.innerHTML = `${inputs.value} <span class="close" onclick="remove(this)">×</span>`;
        text.appendChild(newTask); 
        inputs.value = ""; 
}

}
function remove(element) {
    element.parentElement.remove();
}


