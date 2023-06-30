
function handefomrData(event,payload){    
    const {value, name}=event.target;    
    payload[name] = value;      
}
function Input(correntValue, type,name) {
    const div = document.createElement("div");
    const input = document.createElement("input");
          input.name = name;
    //const label=document.createElement("label");
    input.value = correntValue;
    input.type = type;
    div.appendChild(input);
    return div;
}
function Modal({ title, description, porciones ,precio,cantidad},key) {
    let formModal=document.createElement("div");
        formModal.className="formModal";
    formModal.appendChild(Input(title, "text","title"))
    formModal.appendChild(Input(description, "textarea","description"))
    formModal.appendChild(Input(porciones, "text","porciones"))
    formModal.appendChild(Input(precio, "number","precio"))
    formModal.appendChild(Input(cantidad, "number","cantidad"))
     formModal.onchange=(event)=>{ handefomrData(event,data[key])}
    
    
    return formModal;
}

function popOp(key,id){
    const modal=Modal(data[key],key);
          
    let container=document.getElementById(id);
    container.classList.add("desplegarModal");
    container.classList.remove("noDisplay");
    container.replaceChild(modal,container.children[1]);
    document.getElementById("toContainer").click()
}

function closeModal(){    
    document.getElementById("container").classList.remove("desplegarModal");
    setTimeout(()=>{
        document.getElementById("container").classList.add("noDisplay");
    },1100)
}

function confirmarCambios(){
    cargar();
    setMensaje("HeaderMjs", "", "warning", false);
    closeModal();
}