// const changeText = () => {
//   const p = document.querySelector("p");
//   // p.textContent = "I changed because of an inline event handler." // Text for inline event handler
//   // p.textContent = "I changed because of an event handler property." //Text for event handler property
//   p.textContent = "I changed because of an event listener."
// }

// Add event handler as a property of the button element

// const button = document.querySelector("button");
// button.onclick = changeText;

// Add event listener to button element

// const button = document.querySelector("button");
// button.addEventListener("click", changeText);

// const alertText = () => { alert("Will I change?") };
// button.addEventListener("click", alertText);

// button.removeEventListener("click", alertText);

// Test the keyCode, key, and code properties

document.addEventListener('keydown', event => {
  console.log('key: ' + event.keyCode);
  console.log('key: ' + event.key);
  console.log('code: ' + event.code);
});