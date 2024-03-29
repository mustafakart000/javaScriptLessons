const txtScore1= document.querySelector("#txtScore1");
const txtScore2= document.querySelector("#txtScore2");
const txtScore3= document.querySelector("#txtScore3");
const  btnAverage = document.querySelector("#btnAverage");
const  txtResult = document.querySelector("#txtResult");

btnAverage.addEventListener("click", ()=>{
    const score1 = txtScore1.value
    const score2 = txtScore2.value
    const score3 = txtScore3.value
    console.log(score1,score2,score3)
    if(!isScoreValid(score1) ||!isScoreValid(score2) ||!isScoreValid(score3)){
        alert('Please enter a valid score');
        return;
    }
    const average = getAverage(score1,score2,score3);
    const letter = convertScoreToLetter(average);
    txtResult.innerHTML= `Average is ${average.toFixed(1)} : ${letter}`;
});

const getAverage = (num1,num2,num3) => { 
    return (Number(num1)+ Number(num2) + Number(num3))/3;
 }

 const convertScoreToLetter = (score) => { 
    let letter ="";
    if(score>= 90 && score<=100){
        letter="A"
    }else if(score>=80 && score<=89){
        letter="B"
    }else if(score >=70 && score <80){
        letter="C"
    }else if(score >=50 && score <70 ){
        letter="D"
    }else if(score>=0 && score<50 ){
            letter="F"
    }
    return letter;
}

//javascript 0 sayısını false kabul ediyor bu yüzden score===0  koşulu ekledik.
  isScoreValid = (score) => { 
    return (score || score===0) && !isNaN(score) && (score<=100 && score>=0);
 }
