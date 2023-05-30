// content.js

// Function to display the name of the active tab
function displayTabName() {
  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    const tabName = activeTab.title;
    const message = `Welcome to my extension!\nActive Tab: ${tabName}`;
    console.log(message); // Display the message in the browser console
  });
}

// Call the displayTabName function when the content script is loaded
displayTabName();
