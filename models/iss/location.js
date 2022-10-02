const API = "api.wheretheiss.at/v1/satellites";
const ISS_ID = 25544;
const ISS_URL = `https://${API}/${ISS_ID}`;

let latitude, longitude;

function setCoordinates(data) {
  latitude = data.latitude;
  longitude = data.longitude;
  setTableInformation(data);
}

const tableInformation = [
  "longitude",
  "latitude",
  "altitude",
  "velocity",
  "visibility"
];

const metrics = {
  "longitude": "º",
  "latitude": "º",
  "altitude": " km",
  "velocity": " km/h",
}

function setTableInformation(data) {
  const body = document.body;
  const isThereATable = body.querySelector("table");
  if (isThereATable) body.removeChild(isThereATable);
  const table = document.createElement('table');
  body.appendChild(table);
  createTable(table, data);
}

function createTable(table, data){
  for (let i = 0; i < tableInformation.length; i++) {
    const tr = table.insertRow();
    var td = tr.insertCell();
    const word = tableInformation[i];
    const text = word[0].toUpperCase() + word.substring(1);
    td.innerText = `${text}:`;
    td.className = "dataTitle"
    var td = tr.insertCell();
    td.innerText = getInnerDataText(data, word);
    td.className = "dataCell";
  }
}

function getInnerDataText(data, word) {
  if (Number(data[word])) {
    const numberFormatted = (Math.round(Number(data[word]) * 100) / 100)
    return `${numberFormatted.toFixed(2)}${metrics[word]}`;
  } else {
    return `${data[word]}`;
  }
}


async function getCoordinates() {
  await fetch(ISS_URL)
    .then((response) => response.json())
    .then((data) => setCoordinates(data));
  return { latitude, longitude };
}

export default getCoordinates;