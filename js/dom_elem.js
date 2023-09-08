// // (function () {

// // })();
// // BOM - додаткові об*кти браузера,які слугують для того щоб працювати з усім, окрім документа HTML.


// console.log(location);
// console.log(navigator.userAgent);
// console.log(history);

// // DOM - Представляє весь вміст документа у вигляді об * єкта, який можна змінювати

// function element() {
//  let id = document.getElementById("_id");

//  id.style.fontSize = "40px";
//  id.style.fontWeight = "700";
//  id.style.color = "red";
// }

// // console.log(element());

// (function () {
//  let id = document.getElementById("_id");

//  id.style.fontSize = "40px";
//  id.style.color = "red";
// }) ();


// (function () {
//  let classArr = document.getElementsByClassName("_class");
//  [1,2,3,4]
//  for (let index = 0; index < classArr.length; index++) {
//   classArr[index].style.color = "green";
//   if ( index == 1 ) {
//    classArr[index].style.color = "blue";
//    classArr[index].style.fontSize = "30px";
//   }
 
//  }

// })();

// (function () {
//  let tagArr = document.getElementsByTagName("p");
//  [1, 2, 3, 4]
//  for (let index = 0; index < tagArr.length; index++) {
//   tagArr[index].style.color = "red";
//   if (index == 1) {
//    tagArr[index].style.color = "blue";
//    tagArr[index].style.fontSize = "30px";
//   }

//  }

// })();

// (function () {
//  let elements = document.querySelectorAll("input");

//  for (let i = 0; i < elements.length; i++) {
//   elements[i].style.backgroundColor = "yellow";
  
//  }

// })();

// (function () {
//  let element_ = document.querySelector("input");

//  element_.style.backgroundColor = "green";
// })();


// (function () {
//  let title = document.getElementById("title");
//  let value_ = document.querySelector("input[type='text']").value;
 
//  title.innerHTML = "My DOM Model!";
//  title.innerHTML = value_;
//  title.style.color = "green";
// }) ();


// (function () {
//  let child = document.createElement("li");

//  let text = document.createTextNode("Fifth Item!")

//  child.appendChild(text);

//  let parent = document.getElementById("list_new");
 
//  // parent.appendChild(child);

//  let items = document.getElementsByTagName("li");
//  console.log(items)

//  parent.insertBefore(child, items[0])

// }) ();


// (function () {
//  let parent = document.getElementById("list_new");
//  let items = document.getElementsByTagName("li");

//  console.log(parent)
//  console.log(items)

//  parent.removeChild(items[3]);

// })();

// (function () {
//  let child = document.createElement("li");

//  let text = document.createTextNode("10 Item!")

//  child.appendChild(text);

//  let parent = document.getElementById("list_new");

//  // parent.appendChild(child);

//  let items = document.getElementsByTagName("li");
//  console.log(items);

//  parent.replaceChild(child, items[1]);

// })();

// const bodyelement = document.body;
// const headelement = document.head;

// console.log(bodyelement);
// console.log(headelement);

// console.log(bodyelement.lastChild);

// console.log(bodyelement.firstChild);
// console.log(bodyelement.childNodes);

let elems_1 = document.querySelectorAll('.wrapper__list');
console.log(elems_1)

let elems_2 = document.querySelectorAll("li");
console.log(elems_2)

let elems_3 = document.querySelectorAll("li.wrapper__list-inner-item");
console.log(elems_3)

let elems_4 = document.querySelectorAll(".wrapper__list-inner>li+li+li");
console.log(elems_4)

// За декількома класами
let elems_5 = document.querySelectorAll(".wrapper__list-item,.wrapper__list-inner-item");
console.log(elems_5)

// За вкладеними класами
let elems_6 = document.querySelectorAll(".wrapper .wrapper__text");
console.log(elems_6);

let elems_8 = document.querySelector(".wrapper__text");
console.log(elems_8)

elems_8.innerHTML = "Other text!"
console.log(elems_8)
let elems_7 = document.querySelectorAll("#lorem");
console.log(elems_7)


