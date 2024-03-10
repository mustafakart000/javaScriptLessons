 const arr= [];

let arrayManage = document.querySelector("#arrayManage");
const btnAdd = document.querySelector("#btnAdd");
const btnsort = document.querySelector("#btnSort");
const h1Show = document.querySelector("#show");
let count=0;

 btnAdd.addEventListener("click", ()=>{    
    arr.push(arrayManage.value)
    // h1Show.innerHTML+=" "+ arr[count]; 
    // Dizideki her öğeyi bir li etiketi içine yerleştir ve ul'a ekle
    itemList();
    
    arrayManage.value=""; 
    arrayManage.focus();
    count++;
 }); 
 btnsort.addEventListener('click',() => {
    let cuont2=0;
    console.log("sortArr: "+arr);
    arr.sort(function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            
          return a - b; // Sayıları küçükten büyüğe sırala
        } else if (typeof a === 'string' && typeof b === 'string') {
            
            return a.localeCompare(b); // String'leri alfabetik olarak sırala
        } else {
            // Veri türleri farklı ise, sayılar string'lere göre önce gelir
            
            return typeof a === 'number' ? -1 : 1;
        }
    });
    console.log("AftersortArr: "+arr);
    
      
      itemListSort();
     h1Show.innerHTML =arr;
    

});

itemList = ()=>{
    var listItem = document.createElement("li");
    listItem.textContent = arr[count];
    h1Show.appendChild(listItem);
}
itemListSort = ()=>{
    
    arr.forEach(element => { 
        var listItem = document.createElement("li");
        console.log("element: " + element);
        listItem.textContent = element;
        h1Show.appendChild(listItem);
    });
}
 



/*  const array = [];

const arrayManageEl = document.querySelector("#arrayManage");
const addBtnEl = document.querySelector("#btnAdd");
const showEl = document.querySelector("#show");
let count = 0;

addBtnEl.addEventListener("click", () => {
  array.push(arrayManageEl.value);
  showEl.innerHTML = `Array elements: ${array.join(", ")}. Total elements: ${array.length}`;
  count++;
});

addBtnEl.addEventListener("click", () => {
  arrayManageEl.value = "";
}); */

