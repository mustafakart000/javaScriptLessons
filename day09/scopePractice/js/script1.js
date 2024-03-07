
const txtNum= document.querySelector("#txtNum");
const btnStart= document.querySelector("#btnStart");
const btnGuess= document.querySelector("#btnGuess");
const txtResult= document.querySelector("#txtResult");

let randomNumber = 0;
const  minNumber = 1;
const maxNumber = 5;
txtNum.setAttribute("placeholder",`Enter a number between ${minNumber}-${maxNumber}`)

function startGame(){
    randomNumber = getRandomNumber();
    txtNum.removeAttribute("disabled");
    txtNum.value="";
    txtNum.focus();
    btnGuess.classList.remove("d-none");//guess button'ın gözükmesi için d-none kaldırılır.
    btnStart.innerHTML = '<b>Reset Game</b>';
    txtResult.innerHTML ="";
    
    }
    const reset = () => {
        btnGuess.classList.add("d-none");
        txtNum.setAttribute("disabled","true");
        btnStart.innerHTML = '<b>Start game</b>';
        randomNumber=getRandomNumber();

    }

const guess = ()=>{
    const guessNumber = Number(txtNum.value);
    if (!guessNumber || isNaN(guessNumber) || guessNumber>maxNumber || guessNumber<minNumber) {
        txtResult.innerHTML = "Please type a number between 1-100 "
        return;
        }
    if(guessNumber === randomNumber){
        txtResult.innerHTML  =`${guessNumber} Congratulations! You got it right`;
        txtResult.classList.replace("text-danger", "text-success")
        reset();
    }else if(guessNumber> randomNumber){
        txtResult.innerHTML =`${guessNumber} Too high Lower The number`;
        txtResult.classList.replace( "text-success","text-danger")
    } else {
        txtResult.innerHTML=`${guessNumber} Too low! Raise higher`;
        txtResult.classList.replace( "text-success","text-danger")
    }
    txtNum.focus();
    txtNum.value="";
    }

let getRandomNumber = () => {
    let a= Math.floor(Math.random()*maxNumber)+1;
    console.log(a);
    return a;
    }
