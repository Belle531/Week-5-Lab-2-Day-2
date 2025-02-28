const complaintParagraph = document.getElementById("complaintParagraph");

const compaintButton = document.getElementById("complaintButton");

function complaintChecker() {
    let complaint = prompt("What would you want to compain about/request?");

    if (complaint !== null) {
        complaintParagraph.innerHTML = 'Dear Honey, I love you and appreciate all you do for me. I really wish you would please ${compaint}. It would mean a lot to me!';
    }

}

complaintButton.onclick = complaintChecker;
