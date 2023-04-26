// while (condition) {
//  тіло циклу
// }

let i = 7;

while ( i <= 6) {
 console.log(i);
 i++;
};


let value = 7;
do {
 console.log(value);
 value++;
} while (value <= 6);

// for(beginning(початок); condition; step) {

// };

for(let a = 0; a <= 3; a++){
 console.log(a);
};

// while (true) {
//  let value_1 = prompt('Enter a number','');

//  if (value_1 === null){
//   break;
//  }

//  console.log(value_1)
// }

// continue - повертає до умови циклу

for (let b = 0; b < 4; b++){

if (b == 2) {
 continue;
}

 console.log(b);
}

let fruits = ["Orange", "Bannana", "Apple", "Mango", "Kiwi"]

for (let iter = 0; iter < fruits.length; iter++){
 console.log(fruits[iter]);
}


