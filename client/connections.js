const findButton = document.querySelector(".find-btn");
const infoContainer = document.querySelector(".info-container")

const readData = async () => {

    infoContainer.innerHTML = "";
    const userInput = document.querySelector(".find-input").value;
    console.log(userInput)
    const url = "http://localhost:3021/viewHotels";
    const seedData = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let seedInfo = await seedData.json();
    console.log(seedInfo)
   
    for (item in seedInfo) {
        // const id = item.id;
        const name = item.hotelName;
        const address = item.hotelAddress;
        const image = item.hotelImg;
        // const hotelData = seedInfo
        const hotelContainer = document.createElement("div");
        // const idNumber = document.createElement("p");
        const hotelName = document.createElement("h1");
        const hotelImg = document.createElement("img");
        const hotelAddress = document.createElement("p");
        // idNumber.innerHTML = id;
        hotelName.innerHTML = name;
        hotelImg.src = image;
        hotelAddress.innerHTML = address;
        infoContainer.append(hotelName, hotelImg, hotelAddress)
    }
}

   
findButton.addEventListener("click", () => readData())