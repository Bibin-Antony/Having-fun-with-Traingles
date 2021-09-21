const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const triCheckBtn = document.querySelector("#traingle-check-button");
const outputBox = document.querySelector("#output-box");


triCheckBtn.addEventListener("click", triangleCheck);


function triangleCheck(){
    var angleTotal = Number(firstAngle.value) + Number(secondAngle.value) + Number(thirdAngle.value);
    console.log(angleTotal);
    traingleAngle(angleTotal);
    return angleTotal;
}

function traingleAngle(angleTotal){
    console.log(angleTotal);
    if(angleTotal == 180){
        outputBox.innerText = "Ya! It's a Traingle!🎉";
    }else{
        outputBox.innerText = "Nope, Not a Traingle!";
    }
}
