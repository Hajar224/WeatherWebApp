var inputValue = document.querySelector('#cityinput');
var submitBtn = document.querySelector('#add');
var cityOutput = document.querySelector('#cityoutput');
var descriptionOutput = document.querySelector('#description');
var tempOutput = document.querySelector('#temp');
var windOutput = document.querySelector('#wind');
    
document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('add');
    const displaySection = document.querySelector('.display');

    function convertion(val){
        return (val - 273).toFixed(3);
    }

    submitBtn.addEventListener('click', function () {
        const apiKey = "0109db164114906ff5bbbd401bca8a3d";
        inputValue = inputValue.value;
        fetch( `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                var cityName = data.name;
                var weatherDescription = data.weather[0].description;
                var temperature = data.main.temp;
                var windSpeed = data.wind.speed;

                cityOutput.innerHTML = `Weather of <span>${cityName}</span>`;
                tempOutput.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
                descriptionOutput.innerHTML = `Sky Conditions: <span>${weatherDescription}</span>`;
                windOutput.innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;

                displaySection.style.display = 'block';

                // Clear the input field after displaying results
                inputValue.value = '';
                // Refresh the page after a delay (adjust the delay if needed)
                setTimeout(function () {
                    location.reload();
                }, 5000); // Refresh after 5 seconds (5000 milliseconds)
            })
            .catch(err => alert('Error fetching data or incorrect city name.'));
            
            // Clear the input field after displaying results
            inputValue.value = '';
            // Refresh the page after a delay (adjust the delay if needed)
            setTimeout(function () {
                location.reload();
            }, 2000); // Refresh after 2 seconds (2000 milliseconds)
    });
});



