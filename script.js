const buttonForOpenForm = document.getElementById("buttonForOpenForm");
const form = document.getElementById("form");
const closeBtn = document.getElementById("closeBtn");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

const displayArea = document.getElementById("displayArea");
const overlay = document.getElementById("overlay");

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
  newElement.classList.add(
    "border",
    "m-4",
    "p-4",
    "bg-white",
    "h-[200px]",
    "w-[250px]",
    "rounded-xl"
  );

  newElement.innerHTML = `
  <p><strong>Title :</strong> ${title}</p>
  <p><strong>Autor :</strong> ${author}</p>
  <p><strong>Number of pages :</strong> ${pages}</p>
  <p><strong>Read :</strong> ${read}</p>
  <button  id="deleteBtn" class=" bg-red-500 text-white font-bold py-[10px] px-3 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mt-4">delete</button>
  `;

  displayArea.appendChild(newElement);

  const deleteButton = newElement.querySelector("#deleteBtn");
  deleteButton.onclick = function () {
    newElement.remove();
  };

  form.reset();
  form.style.display = "none";
  overlay.classList.add("hidden");
};
