document.getElementById("submitBtn").onclick = function () { sendEmail(), reset(); return false; };
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "gurpreethooper@gmail.com",
        Password: "6F2AB5D06B6BE431DFDA2C8E50DA7AA0D877",
        To: 'gurpreethooper@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Humaira Makeup Customer Enquiry",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}