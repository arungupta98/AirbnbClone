
// Initialize and add the map
let map;

let mapID="3f070c69d9678e054b7a3308";

async function initMap() {
  // The location of Uluru
  const position = listing.geometry;
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Creation of Map
  map = new Map(document.getElementById("map"), {
    zoom: 9,
    center: position,
    mapId: mapID,
  });

  // marker
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: ` ${listing.title} 
Exact location provided after booking`,
  });
}

initMap();

