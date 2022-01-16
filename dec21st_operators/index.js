var num1Input = document.getElementById("num1")
var num2Input = document.getElementById("num2")
var operator = document.getElementById("operator")
var result = document.getElementById("result")
var button = document.getElementById("btn")
var button2 = document.getElementById("btn2")


// button.addEventListener("click",function(){
//     if(num1Input.value===""){
//         alert("Please Enter Number 1")
//     }
//     if(num2Input.value===""){
//         alert("Please Enter Number 2")
//     }
//     var num1 = Number(num1Input.value)
//     var num2 = Number(num2Input.value)


//     var op = operator.value

//     switch(op){
//         case '-':
//             result.innerText = num1-num2
//             break;
//         case '*':
//             result.innerText = num1*num2
//             break;
//         case '/':
//             result.innerText = num1/num2
//             break;
//         case '+':
//             result.innerText = num1+num2
//             break;
//         default:
//             break;
//     }
//     // if(op==="-"){
//     //     result.value = num1-num2
//     // }else if(op==="*"){
//     //     result.value = num1*num2
//     // }else if(op==="/"){
//     //     result.value = num1/num2
//     // }else{
//     //     result.value = num1+num2
//     // }
// })
function calculate(){

    if(num1Input.value==="" || num2Input.value===""){
        alert("Please make sure you have entered both the operands")
        result.innerHTML = "Number not Entered"
    }else{
        // var op = operator.value
        // console.log(num1Input.value,op,num2Input.value)
        // var expression = num1Input.value+op+num2Input.value
        // console.log(expression)
        // console.log(typeof(expression))
        result.innerHTML = eval(expression)

        // Input=> .value
        // p,div => .innerHTML
    }
}



function rohanWillCalculate(){

    // result.innerHTML = "Number 1 is " + num1Input.value +" and Number 2 is " + num2Input.value


    // result.innerHTML = parseInt(num1Input.value) + parseInt(num2Input.value)
    // parseInt(num1Input)  === parseInt(num1Input.value) ????
    console.log(num1Input)
    console.log(num1Input.value)


    if(num1Input.value==="" || num2Input.value===""){
        alert("Make sure you have entered both numbers")
        result.innerHTML = "Please Enter both numbers"
    }else{
        if(operator.value==="-"){
            result.innerHTML = parseInt(num1Input.value) - parseInt(num2Input.value)
        }else if(operator.value==="*"){
            result.innerHTML = parseInt(num1Input.value) * parseInt(num2Input.value)
        }else if(operator.value==="/"){
            result.innerHTML = parseInt(num1Input.value) / parseInt(num2Input.value)
        }else{
            result.innerHTML = parseInt(num1Input.value) + parseInt(num2Input.value)
        }
    }

}


function changeTextOfDivTag(){
    var xyz = document.getElementsByClassName("division")
    console.log(xyz)
    xyz[0].innerHTML="Bye"
    xyz[1].innerHTML="Good Bye"
    xyz[2].innerHTML="To"
    xyz[3].innerHTML="Your"
    xyz[4].style.color="red"
}



