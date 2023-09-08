function hello() {
 const heading = document.querySelector('h1');

 if (heading.innerHTML === 'Hello!'){
  heading.innerHTML = 'GoodBye!';
 } else {
  heading.innerHTML = 'Hello!';
 }
}

let counter = 0;

function count() {
 // counter = counter + 1;
 counter++;
 document.querySelector('.sub_title').innerHTML = counter;
 alert(`Do your want click this button and give number ${counter} ?`)

 if (counter % 10 === 0) {
  alert(`This click can be dangerous ${counter}`)
 }
}

document.addEventListener('DOMContentLoaded', function () {
 document.querySelector('.count_button').addEventListener('click', count);
 // document.querySelector('.count_button').onclick = count;
});

// document.querySelector('.count_button').onclick = count; 

let button_send = document.querySelector(".my_button");

console.log(button_send);


button_send.addEventListener("click", function() {
 // console.log("Messages was send!");
 alert("Messages was send!")
});


document.querySelector(".clock_button").addEventListener('click', function () {
 const currentDate = new Date();
 let clock = document.querySelector('.clock');
 clock.innerHTML = `Year ${currentDate.getFullYear()}, Hours ${currentDate.getHours()}`;
});


// function clock() {
//  const currentDate = new Date();
//  let clock = document.querySelector('.clock');
//  clock.innerHTML = currentDate.getFullYear();
// }




