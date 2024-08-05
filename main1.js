// part 32 // question 37
// modify the shirt
var size = ["medium", "large"];
var defaultmessag = "I love typescript";
var mediumshirt = ("size of shirt is; ".concat(size[0], ", ").concat(defaultmessag));
var largeshirt = ("size of shirt is; ".concat(size[1], ", ").concat(defaultmessag));
var smallshirt = ("size of shirt is; small and  I love painting");
var extralarge = ("size of shirt is; extralarge and I love hiking");
function make_tshirt() {
    var simplefunction = { mediumshirt: mediumshirt };
    console.log(simplefunction);
    return simplefunction;
}
var respones = make_tshirt();
console.log(respones);
