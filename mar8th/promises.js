const people = require("./data")

const myPromise = (id) => {
    return new Promise((resolve,reject)=>{

        const person = people.filter((peep)=>peep.id===id)

        if(person.length){
            setTimeout(()=>resolve(person[0].name),3000)
        }else{
            setTimeout(()=>reject("Err:404 - No one Found"),4000)
        }

    })
}

const main = async () => {
    const st2 = new Date().getTime()

    try{
        const id2 = await myPromise(2)
        const et2 = new Date().getTime()

        console.log(`${id2}:${et2-st2}`)

    }catch(err){
        const et2 = new Date().getTime()
        console.log(`ERR:${err}:${et2-st2}`)

    }
    // const st1 = new Date().getTime()
    // const id1 = await myPromise(1)
    // const et1 = new Date().getTime()

    // const st2 = new Date().getTime()
    // const id2 = await myPromise(10)
    // const et2 = new Date().getTime()

    // console.log(`${id1}:${et1-st1}`)
    // console.log(`${id2}:${et2-st2}`)
}

const main1 = async () => {
    const st1 = new Date().getTime()

    const id1 = await myPromise(1)
    const id2 = await myPromise(2)
    const id3 = await myPromise(3)

    const et1 = new Date().getTime()

    console.log(`${id1+id2+id3}:${et1-st1}`)

}

const main2 = async () => {
    
    const st1 = new Date().getTime()
try{
    const [id1,id2,id3] = await Promise.all([myPromise(1),myPromise(2),myPromise(3)])
    // const id1 = await myPromise(1)
    // const id2 = await myPromise(2)
    // const id3 = await myPromise(3)

    const et1 = new Date().getTime()

    console.log(`${id1+id2+id3}:${et1-st1}`)
}catch(err){
    const et1 = new Date().getTime()

    console.log(`ERR:${err}:${et1-st1}`)
}
}
// main()
// main1()
main2()

