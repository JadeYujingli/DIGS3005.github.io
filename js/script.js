function toggleElementVisibility(id) {
    const element = document.getElementById(id);
    element.style.display = element.style.display === 'none' ? '' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-button');
    button.addEventListener('click', function() {
        toggleElementVisibility('element-to-hide');
    });
});
function MAPLOAD() {
    // Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];
    // Set attribution and access key URL
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxsZXVxIiwiYSI6ImNsZ2xlaDM1ZDFudWgzZ255eHYzbWcwcm8ifQ.Sy1zrAuu2-UGnsgHle3Npg';
    // Define two tile layer variables
    var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
        streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
    // Define map object
    var map = L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });
    // Add a marker with pop-up
    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };
    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map)
        .bindPopup("<b>UChicago<br>Campus</b>").openPopup();
    // Add a nifty click event
    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
}
