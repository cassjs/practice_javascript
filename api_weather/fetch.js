async function getData() {
    //Source: Open Weather API - https://openweathermap.org/api/one-call-api
    let city_id = 2562;
    const api_key = ''; //remove key before loading to gitHub, need to hide key
    const apiUrl ='https://api.openweathermap.org/data/2.5/weather?q=${city_id}&appid=${api_key}';  //switch out to one-call API
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    // const { text } = data;

    // document.getElementById('dataResult').textContent = text;

    // btn.addEventListener("click", getData)

    // data.innerHTML = dataResult;
};

getData();