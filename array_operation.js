var arr = ["Rifat", "Dulal", "Noman", "Mehedi", "Hasib"];

//slice
arr.slice(3, 6);

//splice
arr.splice(4, 4, 100,200,300);

//indexOf
var idx = arr.indexOf("Noman");

//Includes
var findMehedi = arr.includes("Mehedi");

console.log(idx);