const reset = document.getElementById("reset_button")
const change = document.getElementById("change_button")

reset.addEventListener("click",resetGrid)
change.addEventListener("click",changeColor)

function resetGrid(){
    for(let i=1;i<=9;i++){
        const gridItem = document.getElementById(i)
        gridItem.style.backgroundColor = "transparent"
        console.log(gridItem)
    }
}

function changeColor(){
    const blockId = document.getElementById("block_id")
    const colorId = document.getElementById("colour_id")

    if(!blockId.value){
        alert("Please enter block id")
    }
    if(!colorId.value){
        alert("Please enter colour id")
    }
    resetGrid()

    const gridItem = document.getElementById(blockId.value)
    gridItem.style.backgroundColor = colorId.value

    blockId.value = ""
    colorId.value=""
}