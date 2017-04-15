/**
 * Created by binom on 27.03.17.
 */

const {app, BrowserWindow} = require('electron')
const path = require('path');

// Specify flash path, supposing it is placed in the same directory with main.js.
let pluginName;
switch (process.platform) {
    case 'win32':
        pluginName = 'pepflashplayer.dll'
        break;
    case 'darwin':
        pluginName = 'PepperFlashPlayer.plugin'
        break;
    case 'linux':
        pluginName = 'libpepflashplayer.so'
        break
}
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName))


app.commandLine.appendSwitch('ppapi-flash-version', '17.0.0.169')


let mainWindow;
let argv = require('optimist').argv
    , url = argv.url || "https://admiral-slot.ga/client/mini"
    , id = argv.id || "1002"
    , fs = argv.fs || false;


function createWindow() {
    mainWindow = new BrowserWindow({
        Width: 1224,
        Height: 768,
        webPreferences: {
            plugins: true
        },
    });

    mainWindow.maximize();
    if (fs) {
        mainWindow.setFullScreen(true);
    }


    //mainWindow.webContents.openDevTools ();
    mainWindow.loadURL(`${url}?id=${id}`)
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform == 'darwin') {
        App.quit()
    }
});
