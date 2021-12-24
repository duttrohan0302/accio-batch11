// const panels = document.querySelectorAll('.panel')


// panels.forEach(panel=>{
//     panel.addEventListener("click",function(){
//         removeActiveClasses()
//         panel.classList.add("active")
//     })
// })

// function removeActiveClasses(){
//     panels.forEach(panel=>{
//         panel.classList.remove("active")
//     })
// }

// This is just what Rohan is doing
// xyz after a name means it's user defined





/*
Function to make a panel selected

    1. Remove active from rest 4 panels
    2. Add active to current panel 
*/


// #panel-1  panel 
/*
What are the classes

List = > 1. Panel


*/

/*
UserDefined Functions
1.removeActivexyz
2. selectPanelNoxyz(panelnoxyz)
UserDefined Variables
1 to 5 are panel(1/2/3/4/5)xyz
6. panelnoxyz
*/
const panel1xyz = document.getElementById("panel-1")
const panel2xyz = document.getElementById("panel-2")
const panel3xyz = document.getElementById("panel-3")
const panel4xyz = document.getElementById("panel-4")
const panel5xyz = document.getElementById("panel-5")

function removeActivexyz(){
    panel1xyz.classList.remove("active")
    panel2xyz.classList.remove("active")
    panel3xyz.classList.remove("active")
    panel4xyz.classList.remove("active")
    panel5xyz.classList.remove("active")
}

function selectPanelNoxyz(panelnoxyz){
    
    removeActivexyz()

    switch(panelnoxyz){
        case 1:
            panel1xyz.classList.add("active")
            break
        case 2:
            panel2xyz.classList.add("active")
            break
        case 3:
            panel3xyz.classList.add("active") 
            break
        case 4:
            panel4xyz.classList.add("active") 
            break
        case 5:
            panel5xyz.classList.add("active") 
            break
    }
}
// function selectPanel1xyz(){
//     removeActive()
//     panel1xyz.classList.add("active")
// }

// function selectPanel2xyz(){
//     removeActive()
//     panel2xyz.classList.add("active")
// }

// function selectPanel3xyz(){
//     removeActive()
//     panel3xyz.classList.add("active")
// }

// function selectPanel4xyz(){
//     removeActive()
//     panel4xyz.classList.add("active")
// }

// function selectPanel5xyz(){
//     removeActive()
//     panel5xyz.classList.add("active")
// }