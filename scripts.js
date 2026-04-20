// FlightDeckCatalog
// Data is stored at the top of the file using arrays and objects.
// This project uses vanilla JavaScript only.

const baseFlights = [
  {
    airline: "United Airlines",
    flightCode: "UA",
    routeNumber: 217,
    origin: "LAX",
    destination: "JFK",
    aircraft: "Airbus A320",
    category: "Domestic",
    terminal: "7",
    baseGate: "72A"
  },
  {
    airline: "Delta Air Lines",
    flightCode: "DL",
    routeNumber: 145,
    origin: "LAX",
    destination: "ATL",
    aircraft: "Boeing 737-900",
    category: "Domestic",
    terminal: "3",
    baseGate: "32A"
  },
  {
    airline: "American Airlines",
    flightCode: "AA",
    routeNumber: 308,
    origin: "LAX",
    destination: "ORD",
    aircraft: "Airbus A321",
    category: "Domestic",
    terminal: "4",
    baseGate: "48B"
  },
  {
    airline: "Alaska Airlines",
    flightCode: "AS",
    routeNumber: 110,
    origin: "LAX",
    destination: "SEA",
    aircraft: "Boeing 737 MAX 9",
    category: "Domestic",
    terminal: "6",
    baseGate: "64A"
  },
  {
    airline: "Southwest Airlines",
    flightCode: "WN",
    routeNumber: 552,
    origin: "LAX",
    destination: "LAS",
    aircraft: "Boeing 737-800",
    category: "Domestic",
    terminal: "1",
    baseGate: "14A"
  },
  {
    airline: "JetBlue",
    flightCode: "B6",
    routeNumber: 202,
    origin: "LAX",
    destination: "BOS",
    aircraft: "Airbus A321neo",
    category: "Domestic",
    terminal: "5",
    baseGate: "52C"
  },
  {
    airline: "Japan Airlines",
    flightCode: "JL",
    routeNumber: 61,
    origin: "LAX",
    destination: "NRT",
    aircraft: "Boeing 787-9",
    category: "International",
    terminal: "B",
    baseGate: "134"
  },
  {
    airline: "Japan Airlines",
    flightCode: "JL",
    routeNumber: 15,
    origin: "LAX",
    destination: "KIX",
    aircraft: "Boeing 787-8",
    category: "International",
    terminal: "B",
    baseGate: "132"
  },
  {
    airline: "Korean Air",
    flightCode: "KE",
    routeNumber: 12,
    origin: "LAX",
    destination: "ICN",
    aircraft: "Airbus A380",
    category: "International",
    terminal: "B",
    baseGate: "149"
  },
  {
    airline: "ANA",
    flightCode: "NH",
    routeNumber: 105,
    origin: "LAX",
    destination: "HND",
    aircraft: "Boeing 787-9",
    category: "International",
    terminal: "B",
    baseGate: "135"
  },
  {
    airline: "Qantas",
    flightCode: "QF",
    routeNumber: 12,
    origin: "LAX",
    destination: "SYD",
    aircraft: "Airbus A380",
    category: "International",
    terminal: "B",
    baseGate: "159"
  },
  {
    airline: "Qantas",
    flightCode: "QF",
    routeNumber: 16,
    origin: "LAX",
    destination: "BNE",
    aircraft: "Boeing 787-9",
    category: "International",
    terminal: "B",
    baseGate: "158"
  },
  {
    airline: "Qantas",
    flightCode: "QF",
    routeNumber: 18,
    origin: "LAX",
    destination: "MEL",
    aircraft: "Boeing 787-9",
    category: "International",
    terminal: "B",
    baseGate: "160"
  },
  {
    airline: "Cathay Pacific",
    flightCode: "CX",
    routeNumber: 883,
    origin: "LAX",
    destination: "HKG",
    aircraft: "Airbus A350-1000",
    category: "International",
    terminal: "B",
    baseGate: "141"
  },
  {
    airline: "Cathay Pacific",
    flightCode: "CX",
    routeNumber: 881,
    origin: "LAX",
    destination: "HKG",
    aircraft: "Boeing 777-300ER",
    category: "International",
    terminal: "B",
    baseGate: "Pending"
  },
  {
    airline: "China Airlines",
    flightCode: "CI",
    routeNumber: 7,
    origin: "LAX",
    destination: "TPE",
    aircraft: "Boeing 777-300ER",
    category: "International",
    terminal: "B",
    baseGate: "146"
  },
  {
    airline: "China Airlines",
    flightCode: "CI",
    routeNumber: 5,
    origin: "LAX",
    destination: "TPE",
    aircraft: "Airbus A350-900",
    category: "International",
    terminal: "B",
    baseGate: "145"
  },
  {
    airline: "China Eastern",
    flightCode: "MU",
    routeNumber: 586,
    origin: "LAX",
    destination: "PVG",
    aircraft: "Boeing 777-300ER",
    category: "International",
    terminal: "B",
    baseGate: "Pending"
  },
  {
    airline: "China Eastern",
    flightCode: "MU",
    routeNumber: 588,
    origin: "LAX",
    destination: "PVG",
    aircraft: "Airbus A350-900",
    category: "International",
    terminal: "B",
    baseGate: "147"
  },
  {
    airline: "China Southern",
    flightCode: "CZ",
    routeNumber: 328,
    origin: "LAX",
    destination: "CAN",
    aircraft: "Boeing 787-9",
    category: "International",
    terminal: "B",
    baseGate: "142"
  },
  {
    airline: "China Southern",
    flightCode: "CZ",
    routeNumber: 330,
    origin: "LAX",
    destination: "CAN",
    aircraft: "Airbus A350-900",
    category: "International",
    terminal: "B",
    baseGate: "Pending"
  },
  {
    airline: "Sichuan Airlines",
    flightCode: "3U",
    routeNumber: 3988,
    origin: "LAX",
    destination: "CTU",
    aircraft: "Airbus A350",
    category: "International",
    terminal: "B",
    baseGate: "Pending"
  },
  {
    airline: "Sichuan Airlines",
    flightCode: "3U",
    routeNumber: 3986,
    origin: "LAX",
    destination: "CTU",
    aircraft: "Airbus A330-300",
    category: "International",
    terminal: "B",
    baseGate: "150"
  },
  {
    airline: "Emirates",
    flightCode: "EK",
    routeNumber: 216,
    origin: "LAX",
    destination: "DXB",
    aircraft: "Airbus A380",
    category: "International",
    terminal: "B",
    baseGate: "156"
  },
  {
    airline: "Singapore Airlines",
    flightCode: "SQ",
    routeNumber: 37,
    origin: "LAX",
    destination: "SIN",
    aircraft: "Airbus A350-900",
    category: "International",
    terminal: "B",
    baseGate: "148"
  },
  {
    airline: "Qatar Airways",
    flightCode: "QR",
    routeNumber: 740,
    origin: "LAX",
    destination: "DOH",
    aircraft: "Airbus A350-1000",
    category: "International",
    terminal: "B",
    baseGate: "157"
  },
  {
    airline: "Lufthansa",
    flightCode: "LH",
    routeNumber: 457,
    origin: "LAX",
    destination: "FRA",
    aircraft: "Airbus A350",
    category: "International",
    terminal: "B",
    baseGate: "130"
  }
];

const generatedSchedule = [
  { suffix: 0, departureTime: "07:45", status: "On Time" },
  { suffix: 1, departureTime: "11:20", status: "Boarding" },
  { suffix: 2, departureTime: "15:10", status: "Delayed" },
  { suffix: 3, departureTime: "20:35", status: "On Time" }
];

const flights = [];
let idCounter = 1;

for (let i = 0; i < baseFlights.length; i++) {
  for (let j = 0; j < generatedSchedule.length; j++) {
    const baseFlight = baseFlights[i];
    const schedule = generatedSchedule[j];

    let gateValue = baseFlight.baseGate;

    if (j > 1 && baseFlight.category === "International" && Math.random() < 0.35) {
      gateValue = "Pending";
    }

    flights.push({
      id: idCounter,
      airline: baseFlight.airline,
      flightNumber: `${baseFlight.flightCode}${baseFlight.routeNumber + schedule.suffix}`,
      origin: baseFlight.origin,
      destination: baseFlight.destination,
      aircraft: baseFlight.aircraft,
      status: schedule.status,
      departureTime: schedule.departureTime,
      category: baseFlight.category,
      terminal: baseFlight.terminal,
      gate: gateValue
    });

    idCounter++;
  }
}

let displayedFlights = [...flights];

function showCards(flightList) {
  const cardContainer = document.getElementById("card-container");
  const templateCard = document.querySelector(".card");

  cardContainer.innerHTML = "";

  if (flightList.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = "No flights match your search or filter selection.";
    cardContainer.appendChild(noResults);
    updateSummary(flightList);
    return;
  }

  for (let i = 0; i < flightList.length; i++) {
    const flight = flightList[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, flight);
    cardContainer.appendChild(nextCard);
  }

  updateSummary(flightList);
}

function getStatusBadgeClass(status) {
  if (status === "On Time") {
    return "status-badge status-on-time";
  } else if (status === "Delayed") {
    return "status-badge status-delayed";
  } else {
    return "status-badge status-boarding";
  }
}

function editCardContent(card, flight) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = `${flight.airline} - ${flight.flightNumber}`;

  const cardList = card.querySelector("ul");
  cardList.innerHTML = `
    <li><strong>Route:</strong> ${flight.origin} → ${flight.destination}</li>
    <li><strong>Aircraft:</strong> ${flight.aircraft}</li>
    <li><strong>Status:</strong> <span class="${getStatusBadgeClass(flight.status)}">${flight.status}</span></li>
    <li><strong>Departure:</strong> ${flight.departureTime}</li>
    <li><strong>Category:</strong> ${flight.category}</li>
    <li><strong>Terminal:</strong> ${flight.terminal}</li>
    <li><strong>Gate:</strong> ${flight.gate}</li>
  `;
}

function applyFilters() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase().trim();
  const statusValue = document.getElementById("statusFilter").value;
  const sortValue = document.getElementById("sortFlights").value;

  const terminalElement = document.getElementById("terminalFilter");
  const terminalValue = terminalElement ? terminalElement.value : "all";

  let filteredFlights = flights.filter((flight) => {
    const matchesSearch =
      flight.airline.toLowerCase().includes(searchValue) ||
      flight.flightNumber.toLowerCase().includes(searchValue) ||
      flight.origin.toLowerCase().includes(searchValue) ||
      flight.destination.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusValue === "all" || flight.status === statusValue;

    const matchesTerminal =
      terminalValue === "all" || flight.terminal === terminalValue;

    return matchesSearch && matchesStatus && matchesTerminal;
  });

  if (sortValue === "airline-asc") {
    filteredFlights.sort((a, b) => a.airline.localeCompare(b.airline));
  } else if (sortValue === "airline-desc") {
    filteredFlights.sort((a, b) => b.airline.localeCompare(a.airline));
  } else if (sortValue === "departure") {
    filteredFlights.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
  } else if (sortValue === "domestic") {
    filteredFlights = filteredFlights.filter((flight) => flight.category === "Domestic");
  } else if (sortValue === "international") {
    filteredFlights = filteredFlights.filter((flight) => flight.category === "International");
  }

  displayedFlights = filteredFlights;
  showCards(displayedFlights);
}

function resetCatalog() {
  document.getElementById("searchInput").value = "";
  document.getElementById("statusFilter").value = "all";
  document.getElementById("sortFlights").value = "default";

  const terminalElement = document.getElementById("terminalFilter");
  if (terminalElement) {
    terminalElement.value = "all";
  }

  displayedFlights = [...flights];
  showCards(displayedFlights);
}

function updateSummary(flightList) {
  const totalFlights = document.getElementById("totalFlights");
  const onTimeCount = document.getElementById("onTimeCount");
  const delayedCount = document.getElementById("delayedCount");
  const boardingCount = document.getElementById("boardingCount");

  if (!totalFlights || !onTimeCount || !delayedCount || !boardingCount) {
    return;
  }

  totalFlights.textContent = flightList.length;
  onTimeCount.textContent = flightList.filter((flight) => flight.status === "On Time").length;
  delayedCount.textContent = flightList.filter((flight) => flight.status === "Delayed").length;
  boardingCount.textContent = flightList.filter((flight) => flight.status === "Boarding").length;
}

document.addEventListener("DOMContentLoaded", function () {
  showCards(displayedFlights);

  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("statusFilter").addEventListener("change", applyFilters);
  document.getElementById("sortFlights").addEventListener("change", applyFilters);

  const terminalElement = document.getElementById("terminalFilter");
  if (terminalElement) {
    terminalElement.addEventListener("change", applyFilters);
  }
});
