const d = new Date();
const heading = document.createElement('h1');
heading.innerHTML = "Today's date is " + d.toLocaleDateString();
document.body.appendChild(heading);