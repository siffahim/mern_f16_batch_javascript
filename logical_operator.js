var amount = 10000;
var isBuy = false;

// Logical Operator:
//AND operator -> &&
//OR operator -> ||
//Not Operator -> !

if(amount >= 20000){
  console.log("I will Purchases a mobile!");
}
else if(amount >= "200USD"){
   console.log("I will Purchases a mobile!");
}
else{
    console.log("I will Purchases a Speakar!");
}


if(amount >= 20000 && amount >= "200USD"){
    console.log("I will Purchases a mobile!");
}else{
    console.log("I will Purchases a Speakar!");
}