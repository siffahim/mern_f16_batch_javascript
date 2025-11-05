
function max(arr){
    let max_digit = arr[0];

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max_digit){
            max_digit = arr[i];
        }
    }

    return max_digit;
}

const arr = [20,50,400,3,52,63, 75];
const arr2 = [4, 3,9,6,8];

const maxValue = max(arr);
const maxValueFromArr2 = max(arr2);

console.log(maxValue);
console.log(maxValueFromArr2);