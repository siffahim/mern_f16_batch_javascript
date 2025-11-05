var mobiles = [
    {name: "Iphone 17", price: 200000},
    {name: "Redmi 7", price: 15000},
    {name: "Oppo", price: 17000},
    {name: "Nokia", price: 14000},
    {name: "Samsung", price: 25000}
]

for(let value of mobiles){
    console.log(value);
}


const obj =  {name: "Iphone 17", price: 200000};
for(let key in obj){
    console.log(key);
}

// for(var i = 0; i<mobiles.length; i++){
//     if(mobiles[i].price < 15000){
//         console.log(mobiles[i]);
//     }
// }

// mobiles.map((mobile)=> {
//     console.log(mobile)
// });

// const cheapestMobile = mobiles.filter((mobile) => mobile.price < 20000);

// cheapestMobile.map((mobile) => console.log(mobile.name));

//traversal
// for(var i = 0; i<mobiles.length; i++ ){
//     console.log(mobiles[i].price)
// }
