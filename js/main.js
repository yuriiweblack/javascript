let your_message;

your_message = "World!!!";
console.log(your_message);


let message = "Hello World!!!";
console.log(message);

if (true) {
 let message = 'Goodbye!!!';
 console.log(message);
}

console.log(message);


var var_message = "Hello VAR";
console.log(var_message);

if (true) {
 var var_message = 'Goodbye VAR';
 console.log(var_message)
}

console.log(var_message);


const speak = "lalala";
console.log(speak);


console.log(speak);

// let Message = "Goodbye World!";
// console.log(MyMessageFirst);


// var name = "Mark";
// var name = "Jek";

// console.log(name);
// console.log(name);

// Типи даних:
// 1. Рядок,стрічка - "string"
let str = 'String!';
str = "My String!!";
str = `My String!!!`;

console.log(str);

let _name = "Mark";

console.log(`Hello, ${_name}!!!`);


// 2. Число - "number"
let number = 5;
let anothernumber = 256.356;

console.log(number * true);

// 3. Булевий тип - Boolean
let check = true;
let checked = false;

console.log(check, checked);
// 4. Cпеціальне значення - null
let age = null;

console.log(age);
// 5. Cпеціальне значення - undefined

let x;

console.log(x);

let _number = 36;
console.log(_number);

//Object

let user = {
 _name: "Jack",
 age: 16,
 isAuth: true,
 jobs: {
  first: "Broker",
  second: "Builder"
 }
}


console.log(user.isAuth)
console.log(user['age'])

let user1 = "Jack1";
console.log(user1);

// Масиви (Array)

let arr = ['one', 'two', 'three', 26, true,['Hello', 'ES6', true]];
console.log(arr[5][1]);
console.log(arr[1]);

arr[1] = 'TWO';
console.log(arr);
console.log(arr.length);

arr.push('four', 'six'); 
console.log(arr);

arr.pop();
console.log(arr);

let addUnshift = arr.unshift('zero', 10) // дод.на початок
console.log(arr);

arr.shift(); // видаляє з початку елем.
console.log(arr);

let arr_num = [1,2,23,3,4,5,12,6,7,8,9,10,11];
console.log(arr_num);

let str_arr = arr_num.join(); // число в рядок
console.log(str_arr);

let str_arr1 = arr_num.join("-!"); // число в рядок
console.log(str_arr1);

let revers_ = arr_num.reverse();
console.log(revers_);

let sort_ = arr_num.sort();
console.log(sort_);

let alphabet = ['Orange', 'Banana', 'Apple', 'Mango']

alphabet.sort();
console.log(alphabet);

let alph_part = alphabet.slice(1,3)
console.log(alph_part);


