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
    category: "Domestic"
  },
  {
    id: 2,
    airline: "Delta Air Lines",
    flightNumber: "DL145",
    origin: "LAX",
    destination: "ATL",
    aircraft: "Boeing 737-900",
    status: "Boarding",
    departureTime: "09:15",
    category: "Domestic"
  },
  {
    id: 3,
    airline: "American Airlines",
    flightNumber: "AA308",
    origin: "LAX",
    destination: "ORD",
    aircraft: "Airbus A321",
    status: "Delayed",
    departureTime: "10:05",
    category: "Domestic"
  },
  {
    id: 4,
    airline: "Japan Airlines",
    flightNumber: "JL61",
    origin: "LAX",
    destination: "NRT",
    aircraft: "Boeing 787-9",
    status: "On Time",
    departureTime: "11:40",
    category: "International"
  },
  {
    id: 5,
    airline: "Korean Air",
    flightNumber: "KE12",
    origin: "LAX",
    destination: "ICN",
    aircraft: "Airbus A380",
    status: "Boarding",
    departureTime: "12:20",
    category: "International"
  },
  {
    id: 6,
    airline: "Southwest Airlines",
    flightNumber: "WN552",
    origin: "LAX",
    destination: "LAS",
    aircraft: "Boeing 737-800",
    status: "On Time",
    departureTime: "13:05",
    category: "Domestic"
  },
  {
    id: 7,
    airline: "Alaska Airlines",
    flightNumber: "AS110",
    origin: "LAX",
    destination: "SEA",
    aircraft: "Boeing 737 MAX 9",
    status: "Delayed",
    departureTime: "14:10",
    category: "Domestic"
  },
  {
    id: 8,
    airline: "Lufthansa",
    flightNumber: "LH457",
    origin: "LAX",
    destination: "FRA",
    aircraft: "Airbus A350",
    status: "On Time",
    departureTime: "15:00",
    category: "International"
  },
  {
    id: 9,
    airline: "Qatar Airways",
    flightNumber: "QR740",
    origin: "LAX",
    destination: "DOH",
    aircraft: "Airbus A350-1000",
    status: "Boarding",
    departureTime: "16:25",
    category: "International"
  },
  {
    id: 10,
    airline: "Singapore Airlines",
    flightNumber: "SQ37",
    origin: "LAX",
    destination: "SIN",
    aircraft: "Airbus A350-900",
    status: "Delayed",
    departureTime: "17:45",
    category: "International"
  },
  {
    id: 11,
    airline: "JetBlue",
    flightNumber: "B6202",
    origin: "LAX",
    destination: "BOS",
    aircraft: "Airbus A321neo",
    status: "On Time",
    departureTime: "18:10",
    category: "Domestic"
  },
  {
    id: 12,
    airline: "Emirates",
    flightNumber: "EK216",
    origin: "LAX",
    destination: "DXB",
    aircraft: "Airbus A380",
    status: "Boarding",
    departureTime: "20:00",
    category: "International"
  },
  {
    id: 13,
    airline: "Qantas",
    flightNumber: "QF12",
    origin: "LAX",
    destination: "SYD",
    aircraft: "Airbus A380",
    status: "On Time",
    departureTime: "21:30",
    category: "International"
  }
];

let displayedFlights = [...flights];

function showCards(flightList) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < flightList.length; i++) {
    const flight = flightList[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, flight);
    cardContainer.appendChild(nextCard);
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
    <li><strong>Status:</strong> ${flight.status}</li>
    <li><strong>Departure:</strong> ${flight.departureTime}</li>
    <li><strong>Category:</strong> ${flight.category}</li>
  `;
}

function applyFilters() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const statusValue = document.getElementById("statusFilter").value;
  const sortValue = document.getElementById("sortFlights").value;

  let filteredFlights = flights.filter((flight) => {
    const matchesSearch =
      flight.airline.toLowerCase().includes(searchValue) ||
      flight.flightNumber.toLowerCase().includes(searchValue) ||
      flight.origin.toLowerCase().includes(searchValue) ||
      flight.destination.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusValue === "all" || flight.status === statusValue;

    return matchesSearch && matchesStatus;
  });

  if (sortValue === "airline") {
    filteredFlights.sort((a, b) => a.airline.localeCompare(b.airline));
  } else if (sortValue === "departure") {
    filteredFlights.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
  }

  displayedFlights = filteredFlights;
  showCards(displayedFlights);
}

function resetCatalog() {
  document.getElementById("searchInput").value = "";
  document.getElementById("statusFilter").value = "all";
  document.getElementById("sortFlights").value = "default";
  displayedFlights = [...flights];
  showCards(displayedFlights);
}

document.addEventListener("DOMContentLoaded", function () {
  showCards(displayedFlights);

  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("statusFilter").addEventListener("change", applyFilters);
  document.getElementById("sortFlights").addEventListener("change", applyFilters);
});
