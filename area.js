const firstValue = document.querySelector("#first-value");
const secondValue = document.querySelector("#second-value");
const thirdValue = document.querySelector("#third-value");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box");

calculateBtn.addEventListener("click", areaoftriangle);

function areaoftriangle(){
    var FirstNumber = Number(firstValue.value);
    var SecondNumber = Number(secondValue.value);
    var ThirdNumber  = Number(thirdValue.value);
    var semiPerimeter = (FirstNumber+SecondNumber+ThirdNumber)/2;
    var area = semiPerimeter*(semiPerimeter-FirstNumber)*(semiPerimeter-SecondNumber)*(semiPerimeter-ThirdNumber);
    var sqrarea = Math.sqrt(area);
    outputBox.innerText = "Area of a triangle using heron's formula is " + sqrarea + " units";
}


