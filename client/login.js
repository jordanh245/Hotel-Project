
// creating functionality for the registration button
const registrationButton = document.querySelector(".registration-btn");
const loginButton = document.querySelector(".login-btn");

const addUserInfo = async () => {

    const email = document.querySelector(".email").value;
    const firstName = document.querySelector(".first-name").value;
    const lastName = document.querySelector(".last-name").value;
    const username = document.querySelector(".Username").value;
    const password = document.querySelector(".password").value;

    const userTable = {
        email, 
        firstName, 
        lastName, 
        username, 
        password 
    };
    console.log(userTable)
    
    const URL = "http://localhost:3021/createUser";

    const createData = await fetch( URL, {
       
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(userTable)
    });

}
// routes for login page
// POSSIBLE LOGIN FUNCTION (DOES NOT WORK ATM)
// const loginButtonCreate = async () => {
//     const userInput = document.querySelector(".user-input").value;
//     const passInput = document.querySelector(".pass-input").value;
//     const URL = "http://localhost:3021/login";

//     const userData = {
//         userInput,
//         passInput
//     }

//     const createData = await fetch( URL, {
       
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body:JSON.stringify(userData)
//     });
//     console.log(userInput, passInput)
// }
//// end of routes
registrationButton.addEventListener("click", () => addUserInfo())
// loginButton.addEventListener("click", () => loginButtonCreate())
//// end of registration button









