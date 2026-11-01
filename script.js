const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const nameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("full-name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("input", function (event) {
        const field = event.target;
        const error = document.getElementById(field.id + "-error");
        const valueIsValid = field.type === "email"
            ? field.value.includes("@")
            : field.value.trim();

        if (error && valueIsValid) {
            error.textContent = "";
            field.setAttribute("aria-invalid", "false");
        }
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        nameError.textContent = nameInput.value.trim() ? "" : "Enter your full name.";
        emailError.textContent = !emailInput.value.trim()
            ? "Enter your email address."
            : emailInput.value.includes("@")
                ? ""
                : "Enter an email address containing @.";
        subjectError.textContent = subjectInput.value.trim() ? "" : "Enter a subject.";
        messageError.textContent = messageInput.value.trim() ? "" : "Enter a message.";

        nameInput.setAttribute("aria-invalid", nameError.textContent ? "true" : "false");
        emailInput.setAttribute("aria-invalid", emailError.textContent ? "true" : "false");
        subjectInput.setAttribute("aria-invalid", subjectError.textContent ? "true" : "false");
        messageInput.setAttribute("aria-invalid", messageError.textContent ? "true" : "false");

        const firstError = contactForm.querySelector('[aria-invalid="true"]');

        if (firstError) {
            firstError.focus();
            formMessage.textContent = "";
        } else {
            formMessage.textContent =
                "Thank you. This is a demonstration form, so your message has not been sent.";
            contactForm.reset();
        }
    });
}

const projectDialog = document.getElementById("project-dialog");
const openDialogButton = document.getElementById("open-project-dialog");

if (projectDialog && openDialogButton) {
    openDialogButton.addEventListener("click", function () {
        projectDialog.showModal();
    });
}
