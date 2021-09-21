const formHolder = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", checkscore);

const correctAns = [
    "65°","right angled","two right angles","12, 16, 20"
];
function checkscore(){
    var result = new FormData(formHolder);
    let arrayHolder = 0;
    let score = 0;
    for (let ansValue of result.values()) {
        if (ansValue == correctAns[arrayHolder]) {
            score += 1; //same as score = score + 1;
        }
        arrayHolder += 1;
    }
    outputBox.innerText = "Your score is " + score; 
}