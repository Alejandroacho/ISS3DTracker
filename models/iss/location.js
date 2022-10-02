const API = "api.wheretheiss.at/v1/satellites";
const ISS_ID = 25544;
const ISS_URL = `https://${API}/${ISS_ID}`;

let latitude, longitude;

function setCoordinates(data) {
  latitude = data.latitude;
  longitude = data.longitude;
}

async function getCoordinates() {
  await fetch(ISS_URL)
    .then((response) => response.json())
    .then((data) => setCoordinates(data));
  return { latitude, longitude };
}

export default getCoordinates;