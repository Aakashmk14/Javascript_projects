var popupoverlay= document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbutton=document.querySelector(".add-button")
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var bookname=document.getElementById("book-title")
var author=document.getElementById("autor-name")
var description=document.getElementById("description")
var cancelbutton=document.getElementById("cancel")
addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`
    <h2>${bookname.value}</h2>
    <h2>${author.value}</h2>
    <p>${description.value}</p>
    <button onclick="delt(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function delt(event){
    event.target.parentElement.remove()
}