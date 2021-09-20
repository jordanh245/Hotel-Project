// creating functionality for the registration button
const registrationButton = document.querySelector(".registration-btn");

function buttonCreate() {
    
    const emailInput = document.getElementById("email").value;
    console.log(emailInput)
    const firstNameInput = document.getElementById("first-name").value;
    console.log(firstNameInput)
    const lastNameInput = document.getElementById("last-name").value;
    console.log(lastNameInput)
    const userNameInput = document.getElementById("user-name").value;
    console.log(userNameInput)
    const passwordInput = document.getElementById("password").value;
    console.log(passwordInput)

}

registrationButton.addEventListener("click", () => buttonCreate())
//// end of registration button