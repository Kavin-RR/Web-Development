//selecting popup box, pop overlay, button

var popbox=document.querySelector(".popup_box")
var popover=document.querySelector(".pop_overlay")
var popbtn=document.querySelector("#add_button")

popbtn.addEventListener("click",function(){
    popover.style.display="block"
    popbox.style.display="block"
    
})

// for cancel button
var canbtn=document.querySelector("#cancel")
canbtn.addEventListener("click",function(event){
    event.preventDefault()
    popover.style.display="none"
    popbox.style.display="none"
})


//select container,add book,book title,book author,book description
var container=document.getElementById("container")
var addbtn=document.getElementById("add")
var addbook=document.getElementById("book_title")
var author=document.getElementById("author_name")
var text=document.getElementById("text")


addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("id","bookcon")
    div.innerHTML=`<h2>${addbook.value}</h2>
            <h5>${author.value}</h5>
            <p>${text.value}</p>
             <button onclick="deletebook(event)" id="delbtn">Delete</button> `
    container.append(div)
    popover.style.display="none"
    popbox.style.display="none"
})


function deletebook(event)
{
    event.target.parentElement.remove()
}


