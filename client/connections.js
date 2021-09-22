const findButton = document.querySelector(".find-btn");
const infoContainer = document.querySelector(".info-container");


function findData() {

    const userInput = document.querySelector(".find-input").value;
    console.log(userInput)

}



   
findButton.addEventListener("click", () => findData())