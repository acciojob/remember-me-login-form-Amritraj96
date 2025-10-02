//your JS code here. If required.
// helper function to create a delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// main async function to handle the button click
async function showMessage() {
  const text = document.getElementById("text").value;
  const delay = Number(document.getElementById("delay").value);
  const output = document.getElementById("output");

  // clear previous output
  output.textContent = "";

  // wait for the given delay
  await wait(delay);

  // show the message after the delay
  output.textContent = text;
}

// attach event listener to button
document.getElementById("btn").addEventListener("click", showMessage);
