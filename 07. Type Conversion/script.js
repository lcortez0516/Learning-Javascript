//Type Conversion
let money = "50";
console.log(money); // string
console.log(typeof money);

//convert string to number
money = parseInt(money);
console.log(typeof money);
money = +money; //shortcut
console.log(money);
console.log(typeof money);

//use a constructor

money = Number(money); //convert using Number()

//Convert Number to String
let num = 100;
num = num.toString();
console.log(num);
console.log(typeof num);

//Use String()
let num2 = 100;
num2 = String(num2);
console.log(typeof num2);

//Convert String to Decimal
let newNum = "10000.29";
newNum = parseFloat(newNum);
console.log(newNum);
console.log(typeof newNum);
