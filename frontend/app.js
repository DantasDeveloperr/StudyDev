const btnUSA = document.getElementById("btn-usa");
const btnBrazil = document.getElementById("btn-brazil");
const statusText = document.getElementById("status");
const table = document.getElementById("results-table");
const tableBody = table.querySelector("tbody");

const API_URL = "http://localhost:3001/analyze";

btnUSA.addEventListener("click", () => {
  analyzeLanguage("en");
});

btnBrazil.addEventListener("click", () => {
  analyzeLanguage("pt");
});

async function analyzeLanguage(language) {
  statusText.textContent = "Analisando textos... ⏳";
  table.hidden = true;
  tableBody.innerHTML = "";

  try {
    const response = await fetch(`${API_URL}?lang=${language}`);

    if (!response.ok) {
      throw new Error("Erro na resposta da API");
    }

    const data = await response.json();

    statusText.textContent = "Resultado:";
    renderTable(data.topWords);
  } catch (error) {
    console.error(error);
    statusText.textContent = "Erro ao buscar dados 😢";
  }
}

function renderTable(words) {
  words.forEach(({ word, count }) => {
    const row = document.createElement("tr");

    const wordCell = document.createElement("td");
    wordCell.textContent = word;

    const countCell = document.createElement("td");
    countCell.textContent = count;

    row.appendChild(wordCell);
    row.appendChild(countCell);
    tableBody.appendChild(row);
  });

  table.hidden = false;
}
