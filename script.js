const buttonForOpenForm = document.getElementById("buttonForOpenForm");
const form = document.getElementById("form");
const closeBtn = document.getElementById("closeBtn");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

const displayArea = document.getElementById("displayArea");

buttonForOpenForm.onclick = function () {
  form.style.display = "block";
  overlay.classList.remove("hidden");
};

closeBtn.onclick = function () {
  form.style.display = "none";
  overlay.classList.add("hidden");
};

form.onsubmit = function (event) {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked ? "Yes" : "No";

  const newElement = document.createElement("div");
  newElement.classList.add("border", "p-4", "m-2", "bg-white");
  newElement.innerHTML = `
  <p><strong>Title :</strong> ${title}</p>
  <p><strong>Autor :</strong> ${author}</p>
  <p><strong>Number of pages :</strong> ${pages}</p>
  <p><strong>Read :</strong> ${read}</p>
`;

  displayArea.appendChild(newElement);

  form.reset();
  form.style.display = "none";
  overlay.classList.add("hidden");
};
