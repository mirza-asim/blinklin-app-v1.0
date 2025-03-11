

document.getElementById("close").addEventListener("click", () => {
    window.electronAPI.closeApp(); //Calls the close function from preload.js!
})