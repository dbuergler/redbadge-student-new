let number1;
let name1;
let stringExample: string;
let boolExample: boolean;
let numberExample: number;
let unionStringNumber: number | string;
unionStringNumber = 5;
unionStringNumber = '4';
let springWeather: any; //will set this to anything; use sparingly 



stringExample = "Hello";

//Type Inference

let number2 = 5;

let restaurant = {
    name: "McDonalds",
    dineIn: false,
    foodItems: ["hamburgers", "fries", "apple pie"],
}

restaurant.foodItems.forEach(   (item)=> {
    console.log(item.toUpperCase());
})

function buySellStock(stockName: string, qty: string|number, action: "sell-stock" | "buy-stock"){
    let total = +qty * 15
    let status = action ==="sell-stock" ? "sold" : "bought"
    return `You just ${status} ${qty} shares of ${stockName} stock for a total of $${total}`
}

buySellStock("Bank of America", "15", "sell-stock")

interface IWeather{
    temp: number;
    cloudConditions: string;
    next5dayTemps?: number[];
}

let weather: IWeather = {
    temp: 78,
    cloudConditions: "sunny",
    
}

console.log(weather.cloudConditions)

// let weather = {
//     temp: 78,
//     cloudConditions: 'overcast',
//     next5dayTemps: [81,74,79,81,81],
// };