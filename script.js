let textarea = document.querySelector("textarea");
let btn = document.querySelector(".post")

function saveText(){
    const todo = textarea.value;
    localStorage.setItem('savedText',todo);
}
window.onload = function () {
    const savedText = localStorage.getItem('savedText');
    if(savedText){
        textarea.value = savedText;
    }
}
function clearText(){
    localStorage.clear();
    textarea.value = "";   
}
