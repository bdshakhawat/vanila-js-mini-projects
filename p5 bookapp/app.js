// Selecting Elements
const table = document.querySelector(".table");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const tBody = document.querySelector("tbody");

// Listening for Click Events
document.querySelector(".btn").addEventListener("click", (e) => {
    // If either of the fields is empty then do nothing
    if (!title.value || !author.value || !year.value) return;

    // Stoping the default behaviour
    e.preventDefault();

    // Creating Elements
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    // Writing out values to elements
    td1.textContent = title.value;
    td2.textContent = author.value;
    td3.textContent = year.value;

    // Appending elements to respective parents
    row.append(td1, td2, td3);
    tBody.append(row);

    // Removing "display-none" class which is used to hide the predefined table
    table.classList.remove("display-none");

    // Reseting input fields
    title.value = "";
    author.value = "";
    year.value = "";
});