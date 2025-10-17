const url = "./faqs.json";

async function loadData() {
  const container = document.getElementById("content");
  if (!container) return;

  container.textContent = "Loading...";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network error");

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      container.textContent = "Empty state: No FAQs available.";
      return;
    }

    renderData(data);
  } catch (err) {
    container.textContent = "Error state: Failed to fetch data.";
    container.classList.add("error");
  }
}

function renderData(data) {
  const container = document.getElementById("content");
  if (!container) return;

  container.innerHTML = data
    .map(
      (item) => `
      <div class="faq-item">
        <div class="question">${item.question}</div>
        <div class="answer">${item.answer}</div>
      </div>
    `
    )
    .join("");
}

loadData();

module.exports = { loadData, renderData };
