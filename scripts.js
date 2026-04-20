const flights = [
  {
    id: 1,
    airline: "United Airlines",
    flightNumber: "UA217",
    origin: "LAX",
    destination: "JFK",
    aircraft: "Airbus A320",
    status: "On Time",
    departureTime: "08:30",
    category: "Domestic",
    terminal: "7",
    gate: "72A"
  },
  {
    id: 2,
    airline: "United Airlines",
    flightNumber: "UA456",
    origin: "LAX",
    destination: "IAD",
    aircraft: "Boeing 757-300",
    status: "Delayed",
    departureTime: "12:05",
    category: "Domestic",
    terminal: "7",
    gate: "71C"
  },
  {
    id: 3,
    airline: "United Airlines",
    flightNumber: "UA839",
    origin: "LAX",
    destination: "HKG",
    aircraft: "Boeing 787-9",
    status: "Delayed",
    departureTime: "21:20",
    category: "International",
    terminal: "7",
    gate: "Pending"
  },
  {
    id: 4,
    airline: "United Airlines",
    flightNumber: "UA1223",
    origin: "LAX",
    destination: "DEN",
    aircraft: "Airbus A320",
    status: "Boarding",
    departureTime: "17:25",
    category: "Domestic",
    terminal: "7",
    gate: "72B"
  },
  {
    id: 5,
    airline: "Delta Air Lines",
    flightNumber: "DL145",
    origin: "LAX",
    destination: "ATL",
    aircraft: "Boeing 737-900",
    status: "Boarding",
    departureTime: "09:15",
    category: "Domestic",
    terminal: "3",
    gate: "32A"
  },
  {
    id: 6,
    airline: "Delta Air Lines",
    flightNumber: "DL287",
    origin: "LAX",
    destination: "MSP",
    aircraft: "Airbus A321neo",
    status: "On Time",
    departureTime: "07:45",
    category: "Domestic",
    terminal: "3",
    gate: "34B"
  },
  {
    id: 7,
    airline: "Delta Air Lines",
    flightNumber: "DL410",
    origin: "LAX",
    destination: "SLC",
    aircraft: "Boeing 737-800",
    status: "On Time",
    departureTime: "13:40",
    category: "Domestic",
    terminal: "3",
    gate: "36A"
  },
  {
    id: 8,
    airline: "American Airlines",
    flightNumber: "AA308",
    origin: "LAX",
    destination: "ORD",
    aircraft: "Airbus A321",
    status: "Delayed",
    departureTime: "10:05",
    category: "Domestic",
    terminal: "4",
    gate: "48B"
  },
  {
    id: 9,
    airline: "American Airlines",
    flightNumber: "AA112",
    origin: "LAX",
    destination: "MIA",
    aircraft: "Boeing 777-200",
    status: "Boarding",
    departureTime: "08:55",
    category: "Domestic",
    terminal: "4",
    gate: "41A"
  },
  {
    id: 10,
    airline: "American Airlines",
    flightNumber: "AA245",
    origin: "LAX",
    destination: "DFW",
    aircraft: "Airbus A321neo",
    status: "On Time",
    departureTime: "16:20",
    category: "Domestic",
    terminal: "4",
    gate: "45C"
  },
  {
    id: 11,
    airline: "Alaska Airlines",
    flightNumber: "AS110",
    origin: "LAX",
    destination: "SEA",
    aircraft: "Boeing 737 MAX 9",
    status: "Delayed",
    departureTime: "14:10",
    category: "Domestic",
    terminal: "6",
    gate: "64A"
  },
  {
    id: 12,
    airline: "Alaska Airlines",
    flightNumber: "AS332",
    origin: "LAX",
    destination: "PDX",
    aircraft: "Boeing 737-900ER",
    status: "On Time",
    departureTime: "18:55",
    category: "Domestic",
    terminal: "6",
    gate: "63B"
  },
  {
    id: 13,
    airline: "Alaska Airlines",
    flightNumber: "AS214",
    origin: "LAX",
    destination: "SFO",
    aircraft: "Embraer 175",
    status: "Boarding",
    departureTime: "11:10",
    category: "Domestic",
    terminal: "6",
    gate: "62A"
  },
  {
    id: 14,
    airline: "Southwest Airlines",
    flightNumber: "WN552",
    origin: "LAX",
    destination: "LAS",
    aircraft: "Boeing 737-800",
    status: "On Time",
    departureTime: "13:05",
    category: "Domestic",
    terminal: "1",
    gate: "14A"
  },
  {
    id: 15,
    airline: "Southwest Airlines",
    flightNumber: "WN884",
    origin: "LAX",
    destination: "PHX",
    aircraft: "Boeing 737 MAX 8",
    status: "Boarding",
    departureTime: "09:45",
    category: "Domestic",
    terminal: "1",
    gate: "12B"
  },
  {
    id: 16,
    airline: "JetBlue",
    flightNumber: "B6202",
    origin: "LAX",
    destination: "BOS",
    aircraft: "Airbus A321neo",
    status: "On Time",
    departureTime: "18:10",
    category: "Domestic",
    terminal: "5",
    gate: "52C"
  },
  {
    id: 17,
    airline: "JetBlue",
    flightNumber: "B61024",
    origin: "LAX",
    destination: "JFK",
    aircraft: "Airbus A321",
    status: "Delayed",
    departureTime: "15:35",
    category: "Domestic",
    terminal: "5",
    gate: "54A"
  },
  {
    id: 18,
    airline: "Japan Airlines",
    flightNumber: "JL61",
    origin: "LAX",
    destination: "NRT",
    aircraft: "Boeing 787-9",
    status: "On Time",
    departureTime: "11:40",
    category: "International",
    terminal: "B",
    gate: "134"
  },
  {
    id: 19,
    airline: "Japan Airlines",
    flightNumber: "JL15",
    origin: "LAX",
    destination: "KIX",
    aircraft: "Boeing 787-8",
    status: "On Time",
    departureTime: "10:50",
    category: "International",
    terminal: "B",
    gate: "132"
  },
  {
    id: 20,
    airline: "Japan Airlines",
    flightNumber: "JL69",
    origin: "LAX",
    destination: "NGO",
    aircraft: "Boeing 787-9",
    status: "Delayed",
    departureTime: "16:10",
    category: "International",
    terminal: "B",
    gate: "Pending"
  },
  {
    id: 21,
    airline: "Korean Air",
    flightNumber: "KE12",
    origin: "LAX",
    destination: "ICN",
    aircraft: "Airbus A380",
    status: "Boarding",
    departureTime: "12:20",
    category: "International",
    terminal: "B",
    gate: "149"
  },
  {
    id: 22,
    airline: "ANA",
    flightNumber: "NH105",
    origin: "LAX",
    destination: "HND",
    aircraft: "Boeing 787-9",
    status: "Boarding",
    departureTime: "17:10",
    category: "International",
    terminal: "B",
    gate: "135"
  },
  {
    id: 23,
    airline: "Qantas",
    flightNumber: "QF12",
    origin: "LAX",
    destination: "SYD",
    aircraft: "Airbus A380",
    status: "On Time",
    departureTime: "21:30",
    category: "International",
    terminal: "B",
    gate: "159"
  },
  {
    id: 24,
    airline: "Qantas",
    flightNumber: "QF16",
    origin: "LAX",
    destination: "BNE",
    aircraft: "Boeing 787-9",
    status: "Boarding",
    departureTime: "22:10",
    category: "International",
    terminal: "B",
    gate: "158"
  },
  {
    id: 25,
    airline: "Qantas",
    flightNumber: "QF18",
    origin: "LAX",
    destination: "MEL",
    aircraft: "Boeing 787-9",
    status: "On Time",
    departureTime: "23:05",
    category: "International",
    terminal: "B",
    gate: "160"
  },
  {
    id: 26,
    airline: "Cathay Pacific",
    flightNumber: "CX881",
    origin: "LAX",
    destination: "HKG",
    aircraft: "Boeing 777-300ER",
    status: "Delayed",
    departureTime: "11:25",
    category: "International",
    terminal: "B",
    gate: "Pending"
  },
  {
    id: 27,
    airline: "Cathay Pacific",
    flightNumber: "CX883",
    origin: "LAX",
    destination: "HKG",
    aircraft: "Airbus A350-1000",
    status: "On Time",
    departureTime: "22:05",
    category: "International",
    terminal: "B",
    gate: "141"
  },
  {
    id: 28,
    airline: "China Airlines",
    flightNumber: "CI7",
    origin: "LAX",
    destination: "TPE",
    aircraft: "Boeing 777-300ER",
    status: "Boarding",
    departureTime: "23:10",
    category: "International",
    terminal: "B",
    gate: "146"
  },
  {
    id: 29,
    airline: "China Airlines",
    flightNumber: "CI5",
    origin: "LAX",
    destination: "TPE",
    aircraft: "Airbus A350-900",
    status: "On Time",
    departureTime: "15:25",
    category: "International",
    terminal: "B",
    gate: "145"
  },
  {
    id: 30,
    airline: "China Eastern",
    flightNumber: "MU586",
    origin: "LAX",
    destination: "PVG",
    aircraft: "Boeing 777-300ER",
    status: "Delayed",
    departureTime: "23:35",
    category: "International",
    terminal: "B",
    gate: "Pending"
  },
  {
    id: 31,
    airline: "China Eastern",
    flightNumber: "MU588",
    origin: "LAX",
    destination: "PVG",
    aircraft: "Airbus A350-900",
    status: "Boarding",
    departureTime: "18:35",
    category: "International",
    terminal: "B",
    gate: "147"
  },
  {
    id: 32,
    airline: "China Southern",
    flightNumber: "CZ328",
    origin: "LAX",
    destination: "CAN",
    aircraft: "Boeing 787-9",
    status: "On Time",
    departureTime: "12:55",
    category: "International",
    terminal: "B",
    gate: "142"
  },
  {
    id: 33,
    airline: "China Southern",
    flightNumber: "CZ330",
    origin: "LAX",
    destination: "CAN",
    aircraft: "Airbus A350-900",
    status: "Delayed",
    departureTime: "19:05",
    category: "International",
    terminal: "B",
    gate: "Pending"
  },
  {
    id: 34,
    airline: "Sichuan Airlines",
    flightNumber: "3U3988",
    origin: "LAX",
    destination: "CTU",
    aircraft: "Airbus A350",
    status: "On Time",
    departureTime: "13:35",
    category: "International",
    terminal: "B",
    gate: "Pending"
  },
  {
    id: 35,
    airline: "Sichuan Airlines",
    flightNumber: "3U3986",
    origin: "LAX",
    destination: "CTU",
    aircraft: "Airbus A330-300",
    status: "Boarding",
    departureTime: "20:40",
    category: "International",
    terminal: "B",
    gate: "150"
  },
  {
    id: 36,
    airline: "Emirates",
    flightNumber: "EK216",
    origin: "LAX",
    destination: "DXB",
    aircraft: "Airbus A380",
    status: "Boarding",
    departureTime: "20:00",
    category: "International",
    terminal: "B",
    gate: "156"
  },
  {
    id: 37,
    airline: "Singapore Airlines",
    flightNumber: "SQ37",
    origin: "LAX",
    destination: "SIN",
    aircraft: "Airbus A350-900",
    status: "Delayed",
    departureTime: "17:45",
    category: "International",
    terminal: "B",
    gate: "148"
  },
  {
    id: 38,
    airline: "Qatar Airways",
    flightNumber: "QR740",
    origin: "LAX",
    destination: "DOH",
    aircraft: "Airbus A350-1000",
    status: "Boarding",
    departureTime: "16:25",
    category: "International",
    terminal: "B",
    gate: "157"
  },
  {
    id: 39,
    airline: "Lufthansa",
    flightNumber: "LH457",
    origin: "LAX",
    destination: "FRA",
    aircraft: "Airbus A350",
    status: "On Time",
    departureTime: "15:00",
    category: "International",
    terminal: "B",
    gate: "130"
  },
  {
    id: 40,
    airline: "Air France",
    flightNumber: "AF65",
    origin: "LAX",
    destination: "CDG",
    aircraft: "Boeing 777-300ER",
    status: "On Time",
    departureTime: "14:50",
    category: "International",
    terminal: "B",
    gate: "Pending"
  }
];

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
