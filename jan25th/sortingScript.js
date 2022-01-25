const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function sortLength(band){
    return band.length
}

function strip(bandName){

    return bandName.replace(/^(a |an |the )/i,"")
}
// const sortedBands = bands.sort()
// By default it is lexicographic sorting

const sortedBands = bands.sort((a,b)=>strip(a) > strip(b) ? 1 : -1)

console.log(sortedBands)
// let bName = bands[0]
// console.log(bName)
// Regular expressions
// const regex = /t/i
// console.log(bName.replaceAll(regex,'-'))

// bName = bName.replace("The","-")
// bName = bName.replace("An","-")
// bName = bName.replace("A","-")

// bName = bName.replace(/^(a |an |the )/i,"")
// "a "
// "an "
// "the "

// console.log(bName)