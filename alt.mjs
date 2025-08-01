import { app } from 'electron';
//import app = electron.app;
import { BrowserWindow } from 'electron';
//const app = require('electron')
//const BrowserWindow = require('electron')
import * as fs from 'fs';
//const fs = require('fs')
// my imports
import youtubesearchapi from "youtube-search-api";
//const youtubesearchapi = require('youtube-search-api')
//let ipc = require('electron').ipcRenderer
//import { ipcRenderer as ipc } from 'electron';
import  * as electron from 'electron';
//const electron = require('electron')
var ipc = electron.ipcMain;
//variables


// electron practice code
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('frontend.html')
}

// This method will be called when the Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
//let document = new DOMImplementation;
//let searchBar = document.getElementById("search");
//console.log(searchBar)
let searchQuery = "spamton";
let func1 = async (val) =>  await youtubesearchapi.GetListByKeyword(val)
let searchResult = func1(searchQuery)
consoleOutput(searchResult);

function consoleOutput(value) {
  value = JSON.stringify(value);
  fs.writeFile("test.txt", value, function(err) {
    if (err) {
        console.log(err);
    }
  value = JSON.parse(value);
  console.log("pizza time");
  console.log(value.items)
});
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})