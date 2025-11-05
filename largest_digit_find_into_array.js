var arr = [20,50,400,3,52,63, 75];
var max_digit = arr[0];

for(var i = 0; i<arr.length; i++){
    if(arr[i] > max_digit){
        max_digit = arr[i];
    }
}

console.log("Max: ", max_digit);