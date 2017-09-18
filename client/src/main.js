


function getLocation() {
    if (navigator.geolocation) {
        var x = document.getElementById("demo");
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerHTML = "Geolocation is not supported by this browser."
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    
}