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
    let seedInfo = await seedData.json();
    console.log(seedInfo)

    for (item in seedInfo) {
        const hotelData = seedInfo
        const hotelContainer = document.createElement("div");
        
    }
}

   
findButton.addEventListener("click", () => readData())