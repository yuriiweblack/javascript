function changeText(element) {
 element.innerHTML = "Hello LOREM";
}

document.getElementById("sub_title_3").onclick = function () {
 this.innerHTML = "Hi, Lorem!!!";
}

function myFunc(element) {
 element.style.backgroundColor = "yellow";
}

const currentDate = new Date();

const year = currentDate.getFullYear();
console.log(year);
const month = currentDate.getMonth();
console.log(month);
const day = currentDate.getDate();
console.log(day);

const second = currentDate.getSeconds();
const minute = currentDate.getMinutes();
const hour = currentDate.getHours();

alert(`Today: ${day} June ${year} year! \n And current Time to start: ${hour}:${minute} and ${second} seconds`)

const tommorow = new Date();
tommorow.setDate(day - 1);
console.log(tommorow)
