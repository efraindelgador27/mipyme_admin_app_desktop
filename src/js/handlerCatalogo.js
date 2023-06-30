function GoTo(x,y){
    window.scroll(x,y)
}

const format=(str)=>{
    const length= str.length;
    console.log(length)
    switch(length){
        case 3:{ return `$ ${str}` }
        case 4:{ return `$ ${str[0]},${str.slice(1,length)}` }
        case 5:{ return `$ ${str.slice(0,2)},${str.slice(2,length)}` }
        case 6:{ return `$ ${str.slice(0,3)},${str.slice(3,length)}` }
        case 7:{ return `$ ${str[0]},${str.slice(1,4)},${str.slice(4,length)}` }
    }
}
function createCard({ title, description, urlImage, porciones, precio, cantidad},key) {
    
    const template = `
    <img src="${rootPath}/${urlImage}" alt="" class="imgCad">
    <div class="bodyCard">
        <h1 class="title">${title}</h1>
        <ul>
        <li><h3 class="subtitle">${porciones}</h3>   </li>
        <li><h3 class="subtitle">${format(precio)}</h3></li>
        <li><h3 class="subtitle">Disponible: ${cantidad}</h3></li>
        <li><p class="description">${description}</p></li>
      </ul>
        <button id="${key}" class="hidened"></button>
    </div>
`
    let div = document.createElement('div');
    div.className = "card";
    div.innerHTML = template;

    return div;

}
function createCatalogo(items) {
    
    let newCatalogo = document.createElement("section");
        newCatalogo.id = "catalogoactual";
        newCatalogo.className = "catalogo"; 

    const keys=[...Object.keys(items)];
    const pages = Math.ceil(keys.length / 4)//data.length/4);
    let ini = 0;
    let fin = keys.length <= 4 ? keys.length: 4;
    const resto = keys.length % 4;

    

    for (let i = 1; i <= pages; i++) {
        let pagina = document.createElement("div");
        pagina.className = "pagina";
        keys.slice(ini, fin).forEach((key) => {         
                                 
            pagina.appendChild(createCard(items[`${key}`],key));            
        })
        newCatalogo.appendChild(pagina);
        
        if (i < pages - 1) {
            ini += 4;
            fin += 4;
        } else if(i===pages-1){
            ini =fin;
            fin =keys.length;
        }

    }
    return newCatalogo;
}


function load(data) {
    
    let correntCatalogo = document.getElementById("catalogoactual");
    let newCatalogo = createCatalogo(data);

        newCatalogo.addEventListener("click", (event) => {
            if(!event.target.id) return;
                
                
            // "container";
            //const {title,description,porciones}=data[`${event.target.id}`];
            popOp(event.target.id, "container")
            //alert(`name ${title} description ${description} porcion ${porciones}`);
        })


    catalogo.replaceChild(newCatalogo, correntCatalogo);
    GoTo(0,600)
}
// load(data);
// http://192.168.0.20:5500/catalogo_Web/idex.html