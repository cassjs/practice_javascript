async function getData() {
    //Source: Weather API - https://www.weatherapi.com/docs/
    const api_key = process.env.API_KEY;
    const inputCity = document.getElementById("citySearch").placeholder;
    const api_url = 'http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${inputCity}';
    // const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Portland';
    
    console.log(process.env);
    
    require('dotenv').config()
    

    const response = await fetch(apiUrl);
    const data = await response.json();

    //*******CONSOLE TESTING*******//
    console.log(data); // console test - logs all JSON data from apiUrl
    // console.log(data.location.name); //Example: [City] Portland
    // console.log(data.location.region); //Example: [State] Oregon
    // console.log(data.current.temp_f); // Example: [Temp] ##
    // console.log(data.current.condition.text); //Example: [Condition] Overcast
    // console.log(data.current.precip_in); //Example: [Precipitation] ##
    // console.log(data.current.wind_mph); //Example: [Wind (mph)] ##
    // console.log(data.current.humidity); //Example: [Humidity] ##
    // console.log(data.current.last_updated); //Example: [Last Updated] 2021-01-05 20.30
    
    const { name, region } = data.location; // destructuring JS objects
    // console.log(name , region); // console test after destructuring

    const { temp_f, precip_in, wind_mph, humidity, last_updated } = data.current; // destructuring JS objects
    // console.log(temp_f,= condition, precip_in, wind_mph, humidity, last_updated); // console test after destructuring

    const { text } = data.current.condition; 
    // console.log(text); // console test after destructuring 

    document.getElementById('citySearch').textContent = name;
    document.getElementById('region').textContent = region;
    document.getElementById('temp').textContent = temp_f;
    document.getElementById('condition').textContent = text;
    document.getElementById('precipitation').textContent = precip_in;
    document.getElementById('wind').textContent = wind_mph;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('updated').textContent = last_updated;

    bttn.addEventListener("click", getData); // button
};

getData();