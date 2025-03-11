const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    closeApp: () => ipcRenderer.send("close-app"),
});

console.log("Hello from preload!");

