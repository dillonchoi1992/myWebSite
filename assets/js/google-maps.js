function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 36.095556, lng: -80.241721};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 14,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Winston-Salem, NC' // Title Location
    });
}