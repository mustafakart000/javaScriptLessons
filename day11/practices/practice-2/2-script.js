const arr=[342,656,763,12,434,658,322];

const arrPricesEl = document.querySelector("#arrPrices");
const btnGetprices = document.querySelector("#btnGetPrices");
const arrNewPricesEl = document.querySelector("#arrNewPrices");


arrPricesEl.innerHTML = `Array de precios: ${arr}`;
btnGetprices.addEventListener("click", () => {
   arrNewPricesEl.innerHTML =setPrices(arr,50); 

});


const setPrices = (arr,rate) =>{
   if(!arr || !Array.isArray(arr) || arr.length<=0) return arr;
   if(!rate || isNaN(rate)) return false;

   const newArr =Object.assign([],arr);
   for (let i = 0; i < arr.length; i++) {
       newArr[i] = arr[i]+arr[i]*rate/100;
      
   }
   return newArr;
}