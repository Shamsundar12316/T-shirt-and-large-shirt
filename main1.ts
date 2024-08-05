
// part 32 // question 37
// modify the shirt

let size: string[] = ["medium","large"]

let defaultmessag = "I love typescript"
let mediumshirt = (`size of shirt is; ${size[0]}, ${defaultmessag}`)
let largeshirt = (`size of shirt is; ${size[1]}, ${defaultmessag}`)
let smallshirt = (`size of shirt is; small and  I love painting`)
let extralarge = (`size of shirt is; extralarge and I love hiking`)

function make_tshirt(){
    let simplefunction = {mediumshirt}
    console.log(simplefunction)
    return simplefunction
}
let respones = make_tshirt()
console.log(respones)