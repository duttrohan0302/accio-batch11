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

// test("stress-test", async function() {
//     // Enter code here
//   const response = await request(index).get("/");
//     document.body.innerHTML = response.text;
//     require("./script.js");
//     var colors = ["black", "blue", "green", "yellow", "violet", "violet", "black", "maroon", "yellow"];
  
//     const change_button = await document.getElementById('change_button');
//     const reset_button = await document.getElementById('reset_button');
//     const block_id = await document.getElementById('block_id');
//     const colour_id = await document.getElementById('colour_id');
//     //color change test
//     for (ind = 1; ind <= 100; ind++) {
//       const color = colors[Math.floor(Math.random()*8)];
//       const block_index = Math.floor(1+Math.random()*8)
//       const block = await document.getElementById(block_index);
//       block_id.value = block_index;
//       colour_id.value = color;
//       change_button.click();
//       expect(block.style.backgroundColor).toBe(color);
//       reset_button.click();
//       //test reset button
//       for (j = 1; j <= 9; j++) {
//         const block = await document.getElementById(j);
//         expect(block.style.backgroundColor).toBe("transparent");
//       }
//     }
//   });