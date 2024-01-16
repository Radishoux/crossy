var cw = require('./cw.js');




// console.log(cw.generate());
// console.log(cw.generate(1, 2));
// console.log(cw.getFittingWords([[]], ["carrotte", "tomate", "patate"]));
console.log(cw.getFittingWords([
  ["c", "a", "r", "r", "o", "t", "t", "e"],
  ["", "", "", "", "", "o", "", ""],
  ["", "", "", "", "", "m", "", ""],
  ["", "", "", "", "", "a", "", ""],
  ["", "", "", "", "", "t", "", ""],
  ["", "", "", "", "", "e", "", ""]
], ["patate", "bleu", "pli"]), "getFittingWords");

console.log(cw.getWords([
  ["c", "a", "r", "r", "o", "t", "t", "e"],
  ["", "", "", "", "", "o", "", ""],
  ["", "", "", "", "", "m", "", ""],
  ["", "", "", "", "", "a", "", ""],
  ["", "", "", "", "", "t", "", ""],
  ["", "", "", "", "", "e", "", ""]]), "getWords");

console.log(cw.getMatrixes([
  ["c", "a", "r", "r", "o", "t", "t", "e"],
  ["", "", "", "", "", "o", "", ""],
  ["", "", "", "", "", "m", "", ""],
  ["", "", "", "", "", "a", "", ""],
  ["", "", "", "", "", "t", "", ""],
  ["", "", "", "", "", "e", "", ""]
], ["patate", "bleu", "pli"]), "getmatrixes");

// console.log(cw.getWords([
//   ["c", "a", "r", "r", "o", "t", "t", "e"],
//   ["", "", "", "", "", "o", "", ""],
//   ["", "", "", "", "", "m", "", ""],
//   ["", "", "", "", "", "a", "", ""],
//   ["", "", "", "", "", "t", "", ""],
//   ["", "", "", "", "", "e", "", ""]
// ]), "getWords");


// console.log(cw.getMatrixes(), "getmatrixes");