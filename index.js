const { app, BrowserWindow } = require('electron');
const path = require("path"),
	  url = require("url");

let win;

function createWindow() {
	win = new BrowserWindow();
}