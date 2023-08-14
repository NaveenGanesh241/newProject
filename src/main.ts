import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import { BrowserWindow } from 'electron';

// const{app} =require('electron')


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// let mainWindow

// function createWindow(){
//   mainWindow = new BrowserWindow({
//     width:1962,
//     height:1080,
//     WebPreferences:{
//       nodeIntegrations:true
//     }
//   })
//   mainWindow.loadURL(
//     url.format({
//       pathname:Path2D.join(__dirname,`dist/hmsi-app/index.html`),
//       protocol:"file",
//       slashes:true
//     })
//   );
//   mainWindow.webContents.openDevTools();
//   mainWindow.webContents.print({silent:true})
//   mainWindow.on('closed',function(){
//     mainWindow=null
//   });
// }

//   app.on('ready', createWindow)

//   app.on('window-all-closed',function() {
//     if (process.platform !=='darwin')app.quit()
//   })

//   app.on('activate',function(){
//     if(mainWindow===null)createWindow()
//   })