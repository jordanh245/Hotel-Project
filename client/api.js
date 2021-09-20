const apiButton = document.getElementById("api-btn");

async function getApiData() {

    const input = document.querySelector(".api-input").value;
     // console.log(input)
    const URL = `https://travelpartner.googleapis.com/v3/accounts/${input}/hotels:setLiveOnGoogle`
    const fetchHotels = await fetch(`${URL}`);
    const jsonHotels = await fetchHotels.json();
    console.log(jsonHotels)

}

apiButton.addEventListener("click", () => getApiData())