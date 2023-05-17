// function count() {
//  let num_1 = 1;
//  let num_2 = 2;
//  let num_3 = 3;

//  let result = num_1 + num_2 + num_3;
//  console.log(result);
// }

// count();

// function declaration



function count(num_1=0, num_2=0, num_3=0) {

 let result = num_1 + num_2 + num_3;
 console.log(result);
}

count(500, 600, 100);


// function expression


let count_1 = function(num_1 = 0, num_2 = 0, num_3 = 0) {

 let result = num_1 + num_2 + num_3;
 console.log(result);
}

count_1(23, 25, 63);

// return - завершує виконання функції та повертається результат

let sum = function(a, b) {
 return a + b;
 // return c;
}

console.log(sum(15,50))

// Arrow function - спосіб писати менше рядків коду(для простих однотипних дій)

let sum_1 = (a_1, b_1) => a_1 + b_1;
console.log(sum_1(45,36));


let sum_2 = (a_1) => a_1 * 10;
console.log(sum_2(45));

let cons_log = () => console.log('Hello World!');
cons_log();



// new Function
let f = new Function('x','y', 'return x + y')
console.log(f(20,30));


function reverseStr(str) {
 let reverse_split = str.split('')
 console.log(reverse_split)
 let reverse_ = reverse_split.reverse()
 console.log(reverse_)
 // return reverse_.join('')
 return str.split('').reverse().join('')
 // return str.slice(0,5)
}

console.log(reverseStr("World JavaScript"));
console.log(reverseStr("JavaScript"));



