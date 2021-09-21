const apiButton = document.getElementById("api-btn");

async function getApiData() {
    const userInput = document.querySelector(".api-input").value;
    const infoContainer = document.querySelector(".info-container");
    infoContainer.innerHTML = "";
    const data = await fetch(
        `https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=${userInput}&countryName=${userInput}`, 
        {
            headers: {
               "x-rapidapi-host": "best-booking-com-hotel.p.rapidapi.com",
                "x-rapidapi-key": "af97ddbf1fmsh4ca9b4a9cdfb78ep16aeffjsn5fbbe4b2884e",
            },
        }
    );
    const json = await data.json();
     console.log(json)

    // const photoData = await fetch(
    //     `https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040`,
    //     {
    //         headers: {
    //             "x-rapidapi-host": "hotels4.p.rapidapi.com",
    //             "x-rapidapi-key": "af97ddbf1fmsh4ca9b4a9cdfb78ep16aeffjsn5fbbe4b2884e",
    //         },
    //     }
    // );
    // const jsonPhoto = await photoData.json();
    // console.log(jsonPhoto)
   
}

apiButton.addEventListener("click", () => getApiData())