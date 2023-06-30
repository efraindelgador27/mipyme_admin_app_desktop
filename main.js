const { app, BrowserWindow, ipcMain } = require('electron')
const path=require('path');
const {User}= require('./db/dbEmulatortor');
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile( path.join(__dirname,'./index.html'))
  }
  
  app.whenReady().then(
    ()=>{      
        ipcMain.handle('pink', () => new User(););
        createWindow();
        app.on('activate', () => {
          if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
          }
        })
      })
      
      app.on('window-all-closed', () => {
        
          app.quit()
      
    }
  )
  