// creating functionality for the registration button
const registrationButton = document.querySelector(".registration-btn");
const loginButton = document.querySelector(".login-btn");

const addUserInfo = async () => {

    const emailInput = document.getElementById("email").value;
    const firstNameInput = document.getElementById("first-name").value;
    const lastNameInput = document.getElementById("last-name").value;
    const userNameInput = document.getElementById("user-name").value;
    const passwordInput = document.getElementById("password").value;

    const userTable = { emailInput, firstNameInput, lastNameInput, userNameInput, passwordInput }
    console.log(userTable)
    const data = await fetch("http://localhost:3020/createUser", {
       
        method: "POST",
        mode: "",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(userTable)
    });

}

function loginButtonCreate() {
    const userInput = document.querySelector(".user-input").value;
    const passInput = document.querySelector(".pass-input").value;
    console.log(userInput, passInput)
}

registrationButton.addEventListener("click", () => addUserInfo())
loginButton.addEventListener("click", () => loginButtonCreate())
//// end of registration button

// routes for login page

//// end of routes