
var amount = 10000;
var isBuy = false;


if(amount >= 20000){
   isBuy =true;
}
else if(amount >= "200USD"){
    isBuy =true;
}
else{
    isBuy = false;
}

// if(isBuy){
//     console.log("I will Purchases a mobile!");
// }
// else{
//     console.log("I Will purchases a speakar")
// }

isBuy ?  console.log("I will Purchases a mobile!") : console.log("I Will purchases a speakar");


//console.log(x);