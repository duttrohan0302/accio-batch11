let str = "stringsRohan Dutnks m sauwbej sdkj"

let num = 12345

let arr = [1,2,3 ,[100,200,300]]

// console.log(arr[1],arr[3],arr[3][1])


let obj = {} //basic syntax , empty object

let obj2  = new Object()

let person = {
    "firstName": "Rohan",
    lastName: "Dutt",
    panCard: "ABCD789",
    age: 100,
    address: {
        houseNo: 123,
        street: "ABC",
        locality: "DEF",
        city: "Agra",
        state: "UP",
        pincode: 283476,
        country: "India"
    },
    gender: "male",
    married: false,
    hobbies: ["binge watching", "music", "shows", "novels"],
    printName: function(){
        console.log("The name of this person is "+ this.firstName + " "+ this.lastName)
    },
    printAddress: function(){

        let add = ""

        for(var key in this.address){
            add= add+ this.address[key] +", "
        }
        add = add.slice(0,-2)
        console.log("Address is ",add )
    }
}
// add a li child to a ol tag

// console.log(person.address)
// console.log(person["firstName"])
// console.log(person["firstName"])

// console.log("aadhar" in person)
// console.log("panCard" in person)

// const tOrF = key in objectName
// True or False

// console.log("Keys are \n")
// for(var keyxyz in person){
//     console.log(keyxyz,person[keyxyz])
// }

// person.printAddress()

// console.log(person.printAddress)




