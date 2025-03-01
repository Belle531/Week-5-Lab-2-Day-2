document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const result = document.getElementById("result")

    calculateButton.onclick = function() {
        let billAmount = document.getElementById("billAmount").value;
        let tipPercent = document.getElementById("tipPercent").value;

        let billAmountNumber = Number(billAmount);
        let tipPercentNumber = Number(tipPercent) / 100;
        let tip = billAmountNumber * tipPercentNumber;

        if (!isNaN()billAmountNumber) && !isNaN(tipPercentNumber){
            result.innerHTML = 'Your total bill is $${billAmountNumber.tofixed(2)}.Yoaur tip should be $${tip.toFixed(2)} at ${tipPercentdNumber * 100 }%.';

            confetti({
                particleCont: 100,
                spread: 70,
                origin: {y: 0.6}
            })
        } else {
            result.innerHTML = "Calculation cancelled.";
        }
    }       
})