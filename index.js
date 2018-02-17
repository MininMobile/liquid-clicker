const { app, BrowserWindow } = require('electron');
const path = require("path"),
	  url = require("url");

let win;

function createWindow() {
	win = new BrowserWindow();
}

app.on("window-all-closed", () => { app.quit(); });
app.on("ready", createWindow);