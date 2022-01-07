const searchxyz = document.querySelector('.search')
const btnxyz = document.querySelector(".btn")
const inputxyz = document.querySelector(".input")

btnxyz.addEventListener("click",function(){
    searchxyz.classList.toggle("active")
    inputxyz.focus()
})