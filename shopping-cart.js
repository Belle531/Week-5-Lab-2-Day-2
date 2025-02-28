document.addEventListener("DOMContentLoaded", function() { 
    const cartParagraph = document.getElementById("cartParagraph");
    const cartButton = document.getElementById("cartButton");
    const cartHeader = document.getElementById("cartHeader");

    function cartChecker() {
        let name = prompt("What is your name?");
        let item = prompt("What would you like to buy?");
        
        if (item !== null) {
            cartHeader.innerHTML = `Hi ${name}, there is something in your cart!`;
            cartParagraph.innerHTML = `You still have an item in your cart. Your ${item} is ready to purchase!`;
        } else {
            cartParagraph.innerHTML = "You don't have anything in your cart yet!";
            cartHeader.innerHTML = "Your Cart.";  
        }
    }

    cartButton.onclick = cartChecker;
});
