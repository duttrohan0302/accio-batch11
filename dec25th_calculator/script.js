// const arr1 = [1,2,3,4,5]


// function makeItDoublexyz(xyz){
//     return "rohan"+"1"
// }
// const arr5 = arr1.map(x=>makeItDoublexyz(x))
// // const arr2 = arr1.map(makeItDoublexyz)

// // Both are same


// console.log(arr1)
// console.log(arr5)
/*
7
78
78.
exp = 78.4/35 
= => eval(exp)

C => display should get empty
<- => just remove last character
*/

let displayxyz = document.getElementById("display")

// let buttonsxyz = Array.from(document.getElementsByClassName("btn"))

// // btnxyz

// function clickingxyz(btnxyz){
//     btnxyz.addEventListener("click",(xyz)=>{
//         console.log(xyz)
//         switch(xyz.target.innerText){
//             case 'C':
//                 displayxyz.innerText = ""
//                 break
//             case '←':
//                 displayxyz.innerText = displayxyz.innerText.slice(0,-1)
//                 break
//             case '=':
//                 try{
//                     displayxyz.innerText = eval(displayxyz.innerText)
//                     // djfbdj
//                     // diuhjdbjh
//                 }catch{
//                     displayxyz.innerText="Error"
//                 }
//                 break
//             default:
//                 displayxyz.innerText = display.innerText + xyz.target.innerText
//                 break
//         }
//     })
// }
// console.log(buttonsxyz)
// buttonsxyz.map(abcdxyz=>clickingxyz(abcdxyz))


// Alternate Method

function clickingxyz(clickedxyz){
    if(displayxyz.innerText===""){
        if(clickedxyz!='0'){
            displayxyz.innerText = displayxyz.innerText+clickedxyz
        }
    }else{
        displayxyz.innerText = displayxyz.innerText+clickedxyz
    }
}

function evalxyz(){
    try{
        displayxyz.innerText = eval(displayxyz.innerText)
    }catch(err){
        displayxyz.innerText="Error"
    }
}

function clearxyz(){
    displayxyz.innerText = ""
}

function backxyz(){
    displayxyz.innerText = displayxyz.innerText.slice(0,-1)
}