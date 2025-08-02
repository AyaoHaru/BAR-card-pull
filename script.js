let coins = 0;
let cardTotals = {
  A1: 0,
  A2: 0,
  B1: 0,
  B2: 0,
  C: 0
};

const cardData = {
  A1: { img: 'images/A1.png', text: "This is A1 card." },
  A2: { img: 'images/A2.png', text: "This is A2 card." },
  B1: { img: 'images/B1.png', text: "This is B1 card." },
  B2: { img: 'images/B2.png', text: "This is B2 card." },
  C:  { img: 'images/C.png',  text: "This is C card." }
};

const cardTypes = Object.keys(cardData);

function showMessage(text, duration = 5000) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = text;
  messageDiv.classList.remove("hidden");
  messageDiv.style.display = "block";

  setTimeout(() => {
    messageDiv.classList.add("hidden");
    setTimeout(() => {
      messageDiv.style.display = "none";
    }, 500); // match the transition duration
  }, duration);
}


function updateCoinDisplay() {
  document.getElementById("coin-count").textContent = coins;
}

function updateCardTotals() {
  for (let card of cardTypes) {
    document.getElementById(`total-${card}`).textContent = cardTotals[card];
  }
}

function generateCoins() {
  const added = Math.floor(Math.random() * 91) + 10; // 10–100 coins
  coins += added;
  updateCoinDisplay();
  //alert(`You got ${added} coins!`);
  showMessage(`You got ${added} coins!`);
}

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cardTypes.length);
  return cardTypes[randomIndex];
}
/*
function displayCard(cardName) {
  const container = document.getElementById("results");
  const card = document.createElement("div");
  card.className = "card";
  const data = cardData[cardName];
  card.innerHTML = `
    <img src="${data.img}" alt="${cardName}">
    <h4>${cardName}</h4>
    <p>${data.text}</p>
  `;
  container.appendChild(card);
}
*/
function displayCard(cardName) {
  const container = document.getElementById("results");
  const card = document.createElement("div");
  card.className = "card";
  const data = cardData[cardName];
  card.innerHTML = `
    <img src="${data.img}" alt="${cardName}">
    <h4>${cardName}</h4>
    <p>${data.text}</p>
  `;
  container.appendChild(card);
}

function pullOneCard() {
  if (coins < 10) {
    //alert("Not enough coins!");
    showMessage("Not enough coins!");
    return;
  }
  coins -= 10;
  updateCoinDisplay();

  const card = getRandomCard();
  cardTotals[card]++;
  updateCardTotals();

  document.getElementById("results").innerHTML = ""; // Clear
  displayCard(card);
}
/*
function pullTenCards() {
  if (coins < 100) {
    alert("Not enough coins!");
    return;
  }
  coins -= 100;
  updateCoinDisplay();

  const pullResults = {};
  for (let i = 0; i < 10; i++) {
    const card = getRandomCard();
    pullResults[card] = (pullResults[card] || 0) + 1;
    cardTotals[card]++;
  }
  updateCardTotals();

  const container = document.getElementById("results");
  container.innerHTML = ""; // Clear previous
  for (let [card, count] of Object.entries(pullResults)) {
    displayCard(card, count);
  }
}
*/
function pullTenCards() {
  if (coins < 100) {
    //alert("Not enough coins!");
    showMessage("Not enough coins!");
    return;
  }
  coins -= 100;
  updateCoinDisplay();

  const pulledCards = []; // Array to store each pulled card
  for (let i = 0; i < 10; i++) {
    const card = getRandomCard();
    pulledCards.push(card);
    cardTotals[card]++;
  }

  updateCardTotals();

  const container = document.getElementById("results");
  container.innerHTML = ""; // Clear previous results

  for (let card of pulledCards) {
    displayCard(card); // Show every card instance separately
  }
}





