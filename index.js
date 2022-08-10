//  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCs0eoO8UcMZKu8iqRhgJP3-XhTIUdGEVA&callback=initMap" ;

// The location of The Piggery
const Piggery = { lat: 51.191490, lng: -2.636926 };
// The map, centered at The Piggery
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 16,
  center: Piggery,
}); 


  const marker = new google.maps.Marker({
    position: Piggery,
    map: map,

  });

 


 
  // type="text/javascript";