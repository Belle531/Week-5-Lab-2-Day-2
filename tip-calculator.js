document.addEventListener("DOMContentLoaded", function() { 
    const priceParagraph = document.getElementById("priceParagraph");
    const calculateButton = document.getElementById("calculateButton");

    function complaintChecker() {
        let price;
        let tipPercent;
        let tip;

        price = prompt("What was your total bill?");
        tipPercent = prompt("What percent would you like to tip? (e.g., 0.15)");
        
        let priceNumber = Number(price);
        let tipPercentNumber = Number(tipPercent);
        tip = priceNumber * tipPercentNumber;

        if (price !== null && tipPercent !== null) {
            priceParagraph.innerHTML = `Your total bill is $${priceNumber}!`;
            priceParagraph.innerHTML += ` Your tip should be $${tip.toFixed(2)} at ${(tipPercentNumber * 100).toFixed(2)}%.`;
        } else {
            priceParagraph.innerHTML = "Calculation cancelled.";
        }
    }

    calculateButton.onclick = complaintChecker;
});
