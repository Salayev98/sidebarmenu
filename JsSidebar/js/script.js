let buttonclick=document.querySelector(".button-click")
let click2= document.querySelector(".click-1")
let click1= document.querySelector(".click-2")
let sidebar= document.querySelector(".side-bar-menu")
click2.addEventListener("click" , function(e){
    e.preventDefault()
    click2.style.display="none"
    click1.style.display="inline-block"
    sidebar.style.display="block"
})
click1.addEventListener("click" , function(e){
    e.preventDefault()
    click1.style.display="none"
    click2.style.display="inline-block"
    sidebar.style.display="none"
})
