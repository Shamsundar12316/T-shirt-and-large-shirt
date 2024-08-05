// part 31 question 36
// t-shirt
var sizeofshirt = ["small", "medium", "large"];
var shirt1 = "this shirt is for casual wearing";
var shirt2 = "this shirt is for formal wearing";
var shirt3 = "this shirt is for party wearing";
function make_tshirt() {
    var simplefunction = "this is a ".concat(sizeofshirt[0], " shirt, and ").concat(shirt1, " shirt, and ").concat(shirt2);
    console.log(simplefunction);
    return simplefunction;
}
var respones = make_tshirt();
console.log(respones);
