const findButton = document.querySelector(".find-btn");
const infoContainer = document.querySelector(".info-container")





const reserveHotel = async (id) => {
    // console.log("reserve Hotel ", id)
    const startDate = document.querySelector(`.start${id}`).value;
// console.log(checkIn)
    const endDate = document.querySelector(`.end${id}`).value;
    // console.log(checkIn)
    // console.log(checkOut)
    
    const resTable = {
        startDate,
        endDate, 
        hotelId
    
    };
    console.log(resTable)
    const url = "http://localhost:3021/createReservations";
    const createReservation = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify(resTable),
      });
} 
const readData = async () => {

    infoContainer.innerHTML = "";
    // const userInput = document.querySelector(".find-input").value;
    // console.log(userInput)
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
        const name = item.hotelName;
        const address = item.hotelAddress;
        const image = item.hotelImg;
        const hotelId = item.id
        // console.log(hotelId)
        // const hotelContainer = document.createElement("div");
        const idNumber = document.createElement("h2");
        const hotelName = document.createElement("h1");
        const hotelImg = document.createElement("img");
        const hotelAddress = document.createElement("p");
        
        const resStart = document.createElement("input");
        resStart.className = `start${hotelId}`
        
        const resEnd = document.createElement('input')
        resEnd.className = `end${hotelId}`
       
        const reservationButton = document.createElement("button");

        resStart.placeholder = "Check-in"
        resEnd.placeholder = "Check-out"
        reservationButton.innerHTML = "reserve";
        idNumber.innerHTML = id;
        hotelName.innerHTML = name;
        hotelImg.src = image;
        hotelAddress.innerHTML = address;
        infoContainer.append(hotelName, hotelImg, hotelAddress, idNumber, resStart, resEnd,reservationButton);


        
        reservationButton.addEventListener("click", () => {
            reserveHotel(hotelId)
        })
    

}}





readData()

// findButton.addEventListener("click", () => readData())
