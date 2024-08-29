
const { contextBridge, ipcRenderer, IpcRendererEvent } = require("electron");


const electronHandler = {
  dev: {
    emit(channel, ...args) {
      return ipcRenderer.invoke(channel, ...args);
    },
    get(channel, ...args) {
      return ipcRenderer.invoke(channel, ...args);
    },
    sendMessage(channel, ...args) {
      ipcRenderer.send(channel, ...args);
    },


    Listen(channel, func) {
      const subscription = (_event, ...args) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };

    },

    once(channel, ...args) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    removeAllListeners(channel) {
      ipcRenderer.removeAllListeners(channel);
    },
  },
};


const path = window.location.pathname

// const allowedapps = ["/C:/Users/arxstd/OneDrive/Desktop/yawmik/settings/index.html",""]


// if (allowedapps.includes(path)) {
//   // alert("Permission Granted !")
//   contextBridge.exposeInMainWorld('yawmik', electronHandler);
// } else {
//   // alert("Permission Rejected !")
// }
contextBridge.exposeInMainWorld('yawmik', electronHandler);
