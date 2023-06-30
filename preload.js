const { contextBridge,ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  saludar:()=>{ console.log("Hola")},    // en el front
  pink:()=> ipcRenderer.invoke('pink')
  // we can also expose variables, not just functions
})

const b=async(a)=>{ 
  a=await window.versions.pink();
  let data=await JSON.parse(a);
   return data
  }