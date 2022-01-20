const obj = {
    fullName: function(gender,city){
        return `Hello this is ${this.firstName} ${this.lastName} (${gender}). He lives in ${city}`
    }
}

const xyz1 = {
    firstName: "Rohan",
    lastName: "Dutt"
}

const xyz2 = {
    firstName: "R",
    lastName: "D"
}


// console.log(obj.fullName.apply(xyz1,["male","Agra"]))


const rdObj = {
    name:"Rohan",
    printName:function(){
        console.log(this.name)
    }
}

// rdObj.printName()

const printName2 = rdObj.printName.bind(rdObj)
printName2()
// printName2()