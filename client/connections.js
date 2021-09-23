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
    // console.log(seedInfo)
   
    for (item of seedInfo) {
        const id = item.id;
        // console.log(item)
        const name = item.hotelName;
        const address = item.hotelAddress;
        const image = item.hotelImg;
        // const hotelData = seedInfo
        // const hotelContainer = document.createElement("div");
        const idNumber = document.createElement("h2");
        const hotelName = document.createElement("h1");
        const hotelImg = document.createElement("img");
        const hotelAddress = document.createElement("p");
        const reservationButton = document.createElement("button");
        
        reservationButton.innerHTML = "reserve";
        // idNumber.innerHTML = id;
        
        hotelName.innerHTML = name;
        hotelImg.src = image;
        hotelAddress.innerHTML = address;
        infoContainer.append(hotelName, hotelImg, hotelAddress, reservationButton, idNumber)
    }
}
const testButton =  () => {
    console.log("click")
}
   
findButton.addEventListener("click", () => readData())
reservationButton.addEventListener("click", () => testButton())