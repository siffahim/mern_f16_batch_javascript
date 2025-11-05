var arr = ["Rifat", "Dulal", "Noman", "Mehedi", "Hasib"];


var len = arr.length;

// for(var i = 0; i<len; i++){
//     console.log(arr[i]);
// }

var numbers = [10,5,6,13,5];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
var total = 0;
for(var i = 0; i<numbers.length; i++ ){
    // console.log(numbers[i]);
    total = total + numbers[i];
}

console.log("Total Amount: ", total)