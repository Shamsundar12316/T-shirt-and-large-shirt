// part 31 question 36
// t-shirt

let sizeofshirt: string[] = ["small","medium","large"]
let shirt1 = "this shirt is for casual wearing"
let shirt2 = "this shirt is for formal wearing"
let shirt3 = "this shirt is for party wearing"

function make_tshirt(){
let simplefunction = `this is a ${sizeofshirt[0]} shirt, and ${shirt1} shirt, and ${shirt2}`
console.log(simplefunction)
return simplefunction
}

let respones = make_tshirt()
console.log(respones)