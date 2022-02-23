const fs = require("fs");

// const readFilesSync = (filename) => {
//     const data = fs.readFileSync(`data/${filename}.txt`)

//     const arr = data.toString().split("\r\n").filter(instance=>instance.length>0)
//     console.log(arr)
// }

const readDirectory = async (dirName) => {
    try{
        const fileNames = await fs.promises.readdir(dirName)

        return fileNames
    }catch(err){
        console.log("ERROR",err)
    }
}
const readFiles = async (filename,firstChar) =>{

    try{

        const data = await fs.promises.readFile(`data/${filename}.txt`,"utf8")
        // data is of type Buffer
        // use toString() to convert it into string
        // use split("\r\n") to split the string into an array
        // use filter to only get elements with length>0
        const arr = data.toString().split("\r\n").filter(instance=>instance.length>0)
        if(firstChar){
            return arr.filter(instance=>instance[0].toLowerCase()===firstChar.toLowerCase())
        }
        return arr;
    }catch(err){
        console.log("ERROR",err)
    }
}

const appendData = async (filename,content) => {

    try{
        // await fs.promises.appendFile(`data/${filename}.txt`,content.join("\r\n"))

        let currentData = await readFiles(filename)
        currentData.push(...content)
        console.log(currentData)
        await fs.promises.writeFile(`data/${filename}.txt`,currentData.join("\r\n"))

    }catch(err){
        console.log("ERROR",err)
    }
}

const removeData = async (filename,firstChar) => {
    try{
        let currentData = await readFiles(filename)
        currentData = currentData.filter(instance=>instance[0].toLowerCase()!==firstChar.toLowerCase())
        await fs.promises.writeFile(`data/${filename}.txt`,currentData.join("\r\n"))

    }catch(err){
        console.log("ERROR",err)
    }
}

const main = async () => {

    // Read single file
    // const output = await readFiles("dishes","p")

    // Get all file names in a directory
    const fileNames = await readDirectory("data")

    // Appending data to a file
    await appendData("fruits",["kiwi","banana","guava"])
    // await appendData("dishes",["gol gappa","khichdi"])

    await removeData("fruits","b")


    // Read all content in a directory
    const content = {}
    // {
    //     vegetables: [],
    //     fruits: [],
    //     dishes: []
    // }
    for(let i=0;i<fileNames.length;i++){
        const filename = fileNames[i].split(".")[0]

        // filter by a particular character
        const output = await readFiles(filename)

        content[filename] = output

    }
    console.log(content)


}

main()