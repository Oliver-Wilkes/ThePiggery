// The location of Uluru
const Piggery = { lat: 51.191490, lng: -2.636926 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 16,
  center: Piggery,
});


  const marker = new google.maps.Marker({
    position: Piggery,
    map: map,
  });
