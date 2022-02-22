const division = (a,b) => {
    if(b===0 || (typeof(a)!=="number" || typeof(b)!=="number")){
        return "Invalid"
    }
    return a/b;
}

const add = (a,b) => {
    return a+b
}

const newObj = {add: add, division:division}
module.exports = newObj