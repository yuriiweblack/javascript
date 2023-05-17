// Область видимості - Scope
// Локальна 
// Глобальна

function showMessage(msg) {
 const message = "Hello, Jack!"
 console.log(message);
}

showMessage();
// console.log(message);

function count() {

 // for (let i = 0; i < 3; i++) {
 //  let j = i * 2;
  
 //  console.log("j inside for loop: " + j);
 // }

 let i;
 let j;

 for (let i = 0; i < 3; i++) {
  j = i * 2;

  console.log("j inside for loop: " + j);
 }

 console.log("j inside for loop: " + j);



  for (var i_ = 0; i_ < 3; i_++) {
  var j_ = i_ * 2;
  
  console.log("j inside for loop: " + j_);
 }
 console.log("j inside for loop: " + j_);
}

count();
// console.log("j inside for loop: " + j);



let name_ = "Peter";

function showName() {
 let name_ = "Jack";
 let message = "My name is " + name_;
 console.log(message);
}

showName();
console.log(name_);

function addNum(num1, num2) {
 summ = num1 + num2;
 return summ;
 // console.log(summ);
}

console.log(addNum(10, 20));
// alert(addNum(10, 20));

function sumArray(numbers) {
 let sum = 0;
 for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
  sum += numbers[i];
 }
 return sum;
}

console.log(sumArray([2, 5, 30, 5, 89]));


const addSumm = function(num1, num2) {
 summ = num1 + num2;
 return summ;
 // console.log(summ);
};

console.log(addSumm(10,60));

const getLength = function(str) {
 return str.length;
}

console.log(getLength("Hello? Jack!!!"));


const addSum = (num1, num2) => num1 + num2;

console.log(addSum(200,3000));

// function sumArray(numbers) {
//  let sum = 0;
//  for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   sum += numbers[i];
//  }
//  return sum;
// }

const addArr = (numbers) => {
 let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
 }
 return sum;
}

console.log(addArr([200, 50, 30, 50, 89]));

const person = (name_1, age) => ({name: name_1, age: age});
console.log(person("Jack", 16));
console.log(person("John", 18));

const numsArr = [200, 50, 31, 50, 89, 2];
const evenNum = numsArr.filter( (numsArr) => numsArr % 2 === 0 );

console.log(evenNum)


let personMan = {
 namme:"Jack",
 age: 25,
 gender: "male"
};

for (let elem in personMan) {
 console.log(elem,':', personMan[elem])
 console.log(`${elem}: ${personMan[elem]}`)
}
