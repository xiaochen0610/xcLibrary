import React from "react";
const { ipcRenderer } = window.require('electron')


function ChooseFile() {
    function openFile() {
        ipcRenderer.send('openFileBrowser');
        // ipcRenderer.on('getBuffer', (arg) => { FileReader.readAsArrayBuffer(arg) })
    }

    return (
        <div className="App">

            <input type="button" value={'选择文件'} onClick={openFile} />
        </div>
    );
}

export default ChooseFile;
