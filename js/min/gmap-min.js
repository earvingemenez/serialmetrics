function initialize(){var e=new google.maps.LatLng(37.794508,-122.39493),a={center:new google.maps.LatLng(37.794508,-122.39493),zoom:14},o=$(document).width()>480?!0:!1,n=[{stylers:[{saturation:-100}]}],t=new google.maps.Map(document.getElementById("map-canvas"),a);t.setOptions({draggable:o,styles:n,scrollwheel:!1});var s=new google.maps.Marker({position:e,map:t})}