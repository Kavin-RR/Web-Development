var mylist = document.getElementById("myul")
var adbtn = document.getElementById("addbuttonn")
var iput = document.getElementById("iputs")
var li = document.getElementById("li")
var clos = document.getElementById("close")



function adbutn(){

    var list = document.createElement("li")
    list.innerHTML= iput.value+"<button id = 'close' onclick='del(event)'>X</button>"+"<button id = 'cheked' onclick='cheked(event)'>✔</button>"
    if(iput.value ===''){
        alert("Enter Your To-Do List")
    }
    else{
        mylist.append(list)
    }
}

function del(event){
    event.target.parentElement.remove()

}
function cheked(event){
    event.target.parentElement.classList.toggle("cheked");

}
