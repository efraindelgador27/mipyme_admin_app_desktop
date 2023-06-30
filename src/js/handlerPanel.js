form.addEventListener("change", (event) => {
  const { id } = event.target;
  const correntItem = {};
  correntItem[id] = data[id];
  event.preventDefault();
  if (!ListItems.includes(id)) {
    ListItems.addItem(correntItem);
    event.target.parentElement.classList.add("selected");
  } else {
    event.target.parentElement.classList.remove("selected");
    ListItems.remuveItem(id);
  }
});
//TODO que la propiedad value tengo el "Title del producto, no el key" completada !!
function setItems(items) {
  let newPanel = document.createElement("div");
  newPanel.id = "correntPanel";
  newPanel.className = "formPanel";

  items.forEach((name) => {
    const include = ListItems.includes(name);
    let input = document.createElement("input");
    let label = document.createElement("label");
    label.className = include ? "selected" : "";
    input.type = "checkbox";
    input.checked = include;
    input.id = name;
    label.id = name;
    label.for = input.id;
    label.innerText = data[name].title;
    label.appendChild(input);
    const template = `
        <label for="${name}">${name}</label>
        <input type="checkbox" name="name" id="${name}" value="${name}" checked="false">
    `;
    let item = document.createElement("div");
    item.className = "formItem";
    item.appendChild(label);
    //item.appendChild(input)
    newPanel.appendChild(item);
  });
  form.replaceChild(newPanel, form.children[1]);
}

function clearInputs() {
  [...document.getElementsByTagName("input")].forEach((element) => {
    element.parentNode.classList.remove("selected");
    element.checked = false;
  });
}

function setMensaje(id, body, typeClass, activar) {
  const span = document.getElementById(id);
  span.innerText = body;
  activar ? span.classList.add(typeClass) : span.classList.remove(typeClass);
}

function cargar() {
  const Items = ListItems.getItems();
  const isEmpy = Object.keys(Items).length === 0;
  
  if (!isEmpy) {
    setMensaje("HeaderMjs", "", "warning", false);

    load(Items);
  } else {
    setMensaje("HeaderMjs", "No hay items seleccionados ...", "warning", true);
  }
}
setItems(Object.keys(data).slice(0, 9));

function limpiar() {
  ListItems.clear();
  clearInputs();
  load({});
}
function avanzarPagina() {
  pagina_actual === paginas ? (pagina_actual = paginas) : pagina_actual++;
  if (pagina_actual === 1) {
    inicio = 0;
    fin = limit;
  } else if (pagina_actual === 5) {
    inicio = (pagina_actual - 1) * limit + 1;
    fin = items.length;
  } else {
    inicio = fin;
    fin = inicio + limit;
  }
  const correntItems = items.slice(inicio, fin);
  setItems(correntItems);
}

function retrsederPagina() {
  pagina_actual === 1 ? (pagina_actual = 1) : pagina_actual--;
  if (pagina_actual === 5) {
    inicio = (pagina_actual - 1) * limit + 1;
    fin = items.length;
  } else {
    inicio = (pagina_actual - 1) * limit + 1;
    fin = inicio + limit;
  }

  const correntItems = items.slice(inicio - 1, fin - 1);
  setItems(correntItems);

  // console.log(`Rango de ${inicio} a ${fin} items pagina actual ${pagina_actual}`)
}
