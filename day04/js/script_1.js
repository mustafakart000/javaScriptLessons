//querySelector eşleşen ilk elemanı seçer
const headEl = document.querySelector("h1");
console.log(headEl);
//innerHTML ile içeriğini
const aboutUsEl = document.querySelector("#aboutUs");
console.log(aboutUsEl);

const spanEl = document.querySelector("#aboutUs span");
console.log(spanEl);
const menuEl = document.querySelector("ul.menu");
console.log(menuEl);
const menuItem3El = document.querySelector("ul.menu li:nth-child(3)");
console.log(menuItem3El);
headEl.innerText = "hello javascript";

//querySelectorAll eşleşen tüm elemanları getirir.
const spanEls = document.querySelectorAll("#aboutUs > span");
console.log(spanEl);
spanEls[1].innerHTML = "HELLO";

//Lİstenin ikinci elemanını alıp, son elemanına ekleyen kod
const listItemText = document.querySelector(".menu li:nth-child(2)").innerText;
console.log(listItemText);
document.querySelector(".menu li:last-child").innerText = listItemText;
//veya sonuna ekle +=
document.querySelector(".menu li:last-child").innerText += "/t" + listItemText;

//listedeki 4. elemanı yerine Koyu şekilde Hello yazan code (innerHtml)

const listItem4El = document.querySelector(".menu li:nth-child(2)");
listItem4El.innerHTML = "<strong>Hello</strong>";
