const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

console.log("script")

function sortLength(band){
    return band.length
}
// const sortedBands = bands.sort((a,b)=>sortLength(a) > sortLength(b) ? 1 : -1)

function strip(bandName){
    return bandName.replace(/^(a |an |the )/i,"").trim()
}

// Plot in You
// Devil Wears Prada

// The Devil Wears Prada, The Plot in You
const sortedBands = bands.sort((a,b)=>strip(a) > strip(b) ? 1 : -1)
                                    // Plot in You > Devil Wears Prada
                                    

document.querySelector("#bands").innerHTML = 
    sortedBands.map(band=> `<li>${band}</li>`).join("")

console.log(sortedBands)

// 'Anywhere But Here', 'The Bled', 'Counterparts', 'The Devil Wears Prada', 'The Midway State', 'Norma Jean', 'Oh, Sleeper', 'An Old Dog', 'Pierce the Veil', 'The Plot in You', 'Say Anything', 'A Skylit Drive', 'We Came as Romans'