const findButton = document.querySelector(".find-btn");

async function findData() {
    const infoContainer = document.querySelector(".info-container");
    infoContainer.innerHTML = "";
    const userInput = document.querySelector(".find-input").value;
    console.log(userInput)
    const seedData = await fetch("http://localhost:3021/viewHotels")
    const convertJson = await seedData.json();
    console.log(convertJson)

}

   
findButton.addEventListener("click", () => findData())