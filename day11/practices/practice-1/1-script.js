const arr=[12,34,5463,34,76,342,null,undefined,"asd",656,763,12,434,658,322,6543];

const myArrayEl = document.querySelector("#myArray");
const btnGetGreatestNum = document.querySelector("#btnGetGreatestNum");
const greatestNumEl = document.querySelector("#greatestNum");

myArrayEl.innerHTML =arr;

btnGetGreatestNum.addEventListener("click", ()=>{
    greatestNumEl.innerHTML =getMaxNumber(arr);
    
    
 });
 
 const getMaxNumber = (arr) => {
    if(!arr || !Array.isArray(arr) || arr.length<=0) return false;
   let  max=arr[0];
   for (let i = 1; i < arr.length; i++){
     if (max < arr[i]) {
        max =arr[i]
     }
    }  
    return max;
}
