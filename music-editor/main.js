// electron 模块可以用来控制应用的生命周期和创建原生浏览窗口
const { app, BrowserWindow, dialog, ipcMain } = require('electron');
// const path = require('path') ;
const isDev = require('electron-is-dev');


//屏蔽安全策略警告Electron Security Warning (Insecure Content-Security-Policy) This renderer process has either no Content Security
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 650,
        minWidth: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true //是否允许渲染进程使用远程模块,
        }
    });
    require('@electron/remote/main').initialize();
    require("@electron/remote/main").enable(mainWindow.webContents);

    const urlLocation = isDev ? "http://localhost:3000" : 'myUrl';

    //引入文件
    mainWindow.loadURL(urlLocation);
    mainWindow.webContents.openDevTools();
})

app.on("window-all-closed", function () {
    dialog.showMessageBox(mainWindow, {
        type: "warning",
        title: "关闭",
        message: "是否关闭",
        buttons: ['取消', '确定']
    }).then((index) => {
        if (index.response === 1) {
            app.quit()
        }
    })
})


ipcMain.handle("openFileBrowser", (event, arg) => {
    dialog.showOpenDialog({
        title: '选择音频',
        defaultPath: '/',//默认打开路径
        buttonLabel: '选择音频',//确定按钮的自定义标签
        properties: ['openFile'],
        filters: [{
            name: 'Audio', extensions: ['mp3']
        }]
    }).then((results) => {
        // event.sender.send('getBuffer', arg)
        console.log(results.filePaths);
        console.log(results.canceled);
    })
});







