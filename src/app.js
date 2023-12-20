const contactForm = document.querySelector("form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#message");
const publicKey = "jhCat1OZCaWV8R3pc";
const serviceID = "service_uohzuba";
const templateID = "template_47q7lha";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
    e.preventDefault();

    // Check if the form is valid
    if (contactForm.checkValidity()) {
        submitBtn.innerText = "Just a moment...";

        const inputFields = {
            name: nameInput.value,
            email: emailInput.value,
            message: msgInput.value
        };

        emailjs.send(serviceID, templateID, inputFields)
            .then(() => {
                submitBtn.innerText = "Message sent successfully";
                nameInput.value = "";
                emailInput.value = "";
                msgInput.value = "";
            }, (error) => {
                console.log(error);
                submitBtn.innerText = "Something went wrong";
            });  
    } else {
        contactForm.reportValidity();
    }
});
