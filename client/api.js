const apiKey = "AIzaSyCAMS8MEohfgK7xkMnZ3-QNQQ_wEwpO0bo"
const apiButton = document.getElementById("api-btn");

async function getApiData() {

    const input = document.querySelector(".api-input").value;
     // console.log(input)
    const URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${input}&key=${apiKey}`
    const fetchFlights = await fetch(`${URL}`);
    const jsonFlights = await fetchFlights.json();
    console.log(jsonFlights)

}

apiButton.addEventListener("click", () => getApiData())