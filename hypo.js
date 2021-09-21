const firstValue = document.querySelector("#first-value");
const secondValue = document.querySelector("#second-value");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box")

calculateBtn.addEventListener("click", calculateHypo);


function calculateHypo(){
    var FirstValue = Number(firstValue.value);
    var SecondValue = Number(secondValue.value);
    console.log(FirstValue, SecondValue);
    var hypo = (FirstValue * FirstValue)+(SecondValue * SecondValue);
    var sumSquare = Math.sqrt(hypo);
    console.log(hypo);
    console.log(sumSquare);
    outputBox.innerText = "The length of hypotenuse is " + sumSquare;
}




