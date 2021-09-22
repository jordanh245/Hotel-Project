const findButton = document.querySelector(".find-btn");
const infoContainer = document.querySelector(".info-container");

const readData = async () => {

    infoContainer.innerHTML = "";
    const userInput = document.querySelector(".find-input").value;
    console.log(userInput)
    const url = "http://localhost:3021/viewHotels";
    const seedData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
console.log(seedData)
}

   
findButton.addEventListener("click", () => readData())