const yearSpan = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

const today = new Date();
const currentYear = today.getFullYear();

yearSpan.textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);
const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};
const formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);

lastModified.textContent = `Last Modified on: ${formattedDate}`;


function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
