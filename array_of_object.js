var mobiles = [
    {name: "Iphone 17", price: 200000},
    {name: "Redmi 7", price: 15000},
    {name: "Oppo", price: 17000},
    {name: "Nokia", price: 14000},
    {name: "Samsung", price: 25000}
]
//default for loop
for(var i = 0; i<mobiles.length; i++){
    if(mobiles[i].price < 15000){
        console.log(mobiles[i]);
    }
}

//for of loop
for(let value of mobiles){
    console.log(value);
}

//for in loop
const obj =  {name: "Iphone 17", price: 200000};
for(let key in obj){
    console.log(key);
}

//map 
mobiles.map((mobile)=> {
    console.log(mobile)
});

//filter
const cheapestMobile = mobiles.filter((mobile) => mobile.price < 20000);

//filter return array then traversal by map
cheapestMobile.map((mobile) => console.log(mobile.name));

//traversal
for(var i = 0; i<mobiles.length; i++ ){
    console.log(mobiles[i].price)
}
