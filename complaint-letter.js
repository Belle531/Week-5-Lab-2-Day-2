document.addEventListener("DOMContentLoaded", function() { 
    const complaintParagraph = document.getElementById("complaintParagraph");
    const complaintButton = document.getElementById("complaintButton");

    function complaintChecker() {
        let complaint = prompt("What would you want to complain about/request?");
        
        if (complaint !== null) {
            complaintParagraph.innerHTML = `Dear Honey, I love you and appreciate all you do for me. I really wish you would please ${complaint}. It would mean a lot to me!`;
        } else {
            complaintParagraph.innerHTML = "Complaint cancelled.";
        }
    }
    
    complaintButton.onclick = complaintChecker;
});
