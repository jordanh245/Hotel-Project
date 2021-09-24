
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
    
    const URL = "http://localhost:3022/createUser";

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
//     const URL = "http://localhost:3022/login";

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

const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");
const buttonThree = document.querySelector(".button-three");
const buttonFour = document.querySelector(".button-four");
const buttonFive = document.querySelector(".button-five");

function buttonOneAlert () {
    console.log("clicked")
    alert("Sorry, you must be logged in to reserve.")
}

function buttonTwoAlert () {
    console.log("clicked")
    alert("Sorry, this suite has sold out. Try another")
}

function buttonThreeAlert () {
    console.log("clicked")
    alert("Sorry, you must be logged in to reserve.")
}

function buttonFourAlert () {
    console.log("clicked")
    alert("Sorry, you must be logged in to reserve.")
}

function buttonFiveAlert () {
    console.log("clicked")
    alert("Sorry, you must be logged in to reserve.")
}



buttonOne.addEventListener("click", () => buttonOneAlert())
buttonTwo.addEventListener("click", () => buttonTwoAlert())
buttonThree.addEventListener("click", () => buttonThreeAlert())
buttonFour.addEventListener("click", () => buttonFourAlert())
buttonFive.addEventListener("click", () => buttonFiveAlert())





