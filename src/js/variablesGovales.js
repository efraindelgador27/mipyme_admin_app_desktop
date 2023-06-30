
class SelectedItems {
    items = {};
    keys = [];
    getItems() {
        return this.items;
    }
    getItemsByRange(ini, fin) {
        return this.items.slice(ini, fin);
    }

    addItem(item) {
        
        const [key]=Object.keys(item);

        if (!this.keys.includes(key) || !this.items.length !== 0) {
            this.items={...this.items, ...item};
            this.keys.push(key)
        }
    }
    remuveItem(key) {

        if (this.keys.includes(key)) {
            delete this.items[key];
            //this.items = this.items.filter((item) => item.title !== key);
            this.keys = this.keys.filter((Key) => Key !== key);
        }
    }
    includes(key) {
        return this.keys.includes(key);
    }
    clear() {
        this.items = [];
        this.keys = [];
    }
}

//  app state

const data={
    "Postre de Maní": {
        "title": "Postre de Maní",
        "description": "Mousse de crema de maní, galletas, topping de chocolate y maní triturado.",
        "urlImage": "Postre de Maní .jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Postre de Maracuyá": {
        "title": "Postre de Maracuyá",
        "description": "Mousse de maracuyá, galletas y cobertura de maracuyá gelificada.",
        "urlImage": "Postre de Maracuyá.jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Postre de Arequipe": {
        "title": "Postre de Arequipe",
        "description": "Mousse de dulce de leche, capas de galleta, topping de arequipe gelificado.",
        "urlImage": "Postre de Arequipe .jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Postre de Café": {
        "title": "Postre de Café",
        "description": "Exquisito mousse de café, galletas, topping de ganache de chocolate.",
        "urlImage": "Postre de Café .jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Postre de Vainilla": {
        "title": "Postre de Vainilla",
        "description": "Mousse de vainilla, capas de galletas, topping de ganache de chocolate.",
        "urlImage": "Postre de Vainilla.jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Postre de Naranja": {
        "title": "Postre de Naranja",
        "description": "Mousse naranja y vainilla, galletas en capas, topping chantilly naranja",
        "urlImage": "Postre de Naranja.jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Postre Ron Pasas": {
        "title": "Postre Ron Pasas",
        "description": "Mousse de ron pasas, galletas, topping de arequipe y uvas pasas.",
        "urlImage": "Postre Ron Pasas.jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Postre de Chocolate": {
        "title": "Postre de Chocolate",
        "description": "Rico mousse de chocolate, galletas en capas, topping de ganache de chocolate.",
        "urlImage": "Postre de Chocolate.jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Postre de Oreo": {
        "title": "Postre de Oreo",
        "description": "Mousse de óreo, capas de galletas óreo, chantilly, ganache de chocolate y polvo de óreo.",
        "urlImage": "Postre de Oreo.jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Postre de Limon": {
        "title": "Postre de Limon",
        "description": "Mousse limon, galletas en capas y  topping de chantilly.",
        "urlImage": "Postre de Limon.jpeg",
        "porciones": "1 de 5 Oz (100 G)",
        "precio": "6000",
        "cantidad": "0"
    },
    "Quesillo / Leche Asada / Flan": {
        "title": "Quesillo / Leche Asada / Flan",
        "description": "Riquísimo y delicado postre tipo flan de caramelo, huevos y leche. ¡Todo un clásico!",
        "urlImage": "Quesillo  Leche Asada  Flan .jpeg",
        "porciones": 1,
        "precio": "0",
        "cantidad": "0"
    },
    "Tiramisú": {
        "title": "Tiramisú",
        "description": "Bizcocho remojado en café con amaretto, relleno de un delicioso mousse de queso crema, virutas de chocolate amargo y cacao espolvoreado.",
        "urlImage": "Tiramisú.jpeg",
        "porciones 1 Porción 173 g ": 1,
        "precio": "0",
        "cantidad": "0"
    },
    "Cheesecake de OREO": {
        "title": "Cheesecake de OREO",
        "description": "Mousse de queso crema y vainilla, con base de galletas oreo y topping de galleta triturada",
        "urlImage": "Cheesecake de OREO.jpeg",
        "porciones": 1,
        "precio": "0",
        "cantidad": "0"
    },
    "Cheesecake Mocaccino": {
        "title": "Cheesecake Mocaccino",
        "description": "Exquisito y cremoso cheesecake trisabor que combina chocolate, café, vainilla y toping de chocolate semi-amargo rallado.",
        "urlImage": "Cheesecake Mocaccino.jpeg",
        "porciones": 1,
        "precio": "0",
        "cantidad": "0"
    },
    "Cheesecake de Frutos Rojos": {
        "title": "Cheesecake de Frutos Rojos",
        "description": "Irresistible pastel de queso, con base de galletas, cubierto por la más rica y natural mermelada artesanal de frutos rojos (fresa, mora, tomate de árbol).",
        "urlImage": "Cheesecake de Frutos Rojos.jpeg",
        "porciones": 1,
        "precio": "0",
        "cantidad": "0"
    },
    "Cheesecake de Frutos Amarillos": {
        "title": "Cheesecake de Frutos Amarillos",
        "description": "Riquísimo pastel de queso, con base de galletas, cubierto por la más rica y natural mermelada artesanal de frutos amarillos (Mango, uchuva, maracuyá y tomate de árbol).",
        "urlImage": "Cheesecake de Frutos Amarillos.jpeg",
        "porciones": 1,
        "precio": "0",
        "cantidad": "0"
    },
    "Cheesecake de Dulce de Leche": {
        "title": "Cheesecake de Dulce de Leche",
        "description": "Cremoso y suave pastel de queso, con base de galletas, cubierto por el más rico dulce de leche y topping de nueces.",
        "urlImage": "Cheesecake de Dulce de Leche.jpeg",
        "porciones": 1,
        "precio": "0",
        "cantidad": "0"
    },
    "Mini Torta Cuatro Leches": {
        "title": "Mini Torta Cuatro Leches",
        "description": "Bizcocho remojado en las cuatro leches (condensada, entera, evaporada y crema de leche), relleno de un delicioso mousse de queso crema, decorado con crema chantilly especial y canela.",
        "urlImage": "Mini Torta Cuatro Leches.jpeg",
        "porciones": "2 porciones",
        "precio": "12000",
        "cantidad": "0"
    },
    "Mini Torta de Choco-Maní": {
        "title": "Mini Torta de Choco-Maní",
        "description": "Exquisita torta de chocolate rellena de crema choco-maní, cubierta de una ligera crema de maní achocolatada, drip y borde de maní salado.",
        "urlImage": "Torta de Choco-Maní.jpeg",
        "porciones": "2 porciones",
        "precio": "12000",
        "cantidad": "0"
    },
    "Mini Torta Capuchino Tentación": {
        "title": "Mini Torta Capuchino Tentación",
        "description": "Jugoso y suave bizcocho relleno de trufa capuchino, cubierto con chantilly de café y ganache de chocolate.",
        "urlImage": "Torta Capuchino Tentación.jpeg",
        "porciones": "2 porciones",
        "precio": "12000",
        "cantidad": "0"
    },
    "Mini Torta Red Velvet ": {
        "title": "Mini Torta Red Velvet ",
        "description": "Pastel de Chocolate relleno y cubierto de una suave y rica butter cream con queso crema.",
        "urlImage": "Mini Torta Red Velvet.jpeg",
        "porciones": "2 porciones",
        "precio": "12000",
        "cantidad": "0"
    },
    "Mini Torta Angel's Food (2 Porciones)": {
        "title": "Mini Torta Angel's Food",
        "description": "Suave y esponjoso bizcocho de vainilla natural, relleno de ganache de chocolate blanco, cubierto de la más rica y ligera butter cream.",
        "urlImage": "Mini Torta Angel's Food.jpeg",
        "porciones": "2 porciones",
        "precio": "12000",
        "cantidad": "0"
    },
    "Mini Torta de Óreo": {
        "title": "Mini Torta de Óreo",
        "description": "Exquisita torta húmeda de chocolate: rellena de ganache blanco, cubierta con chantilly, dripping de chocolate y galleta óreo.",
        "urlImage": "Mini Torta de Óreo .jpeg",
        "porciones": "2 porciones",
        "precio": "12000",
        "cantidad": "0"
    },
    "Mini Torta de Zanahoria": {
        "title": "Mini Torta de Zanahoria",
        "description": "Encantadora torta de zanahoria aliñada con naranja, canela, jengibre, nuez moscada, frutos secos y un delicioso relleno y cubierta del más rico frosting de queso crema.",
        "urlImage": "Torta de Zanahoria.jpeg",
        "porciones": "2 porciones",
        "precio": "12000",
        "cantidad": "0"
    },
    "Mini Torta Devil's Food (2 Porciones)": {
        "title": "Mini Torta Devil's Food ",
        "description": "Exquisita torta húmeda de chocolate rellena y cubierta de fudge de chocolate.",
        "urlImage": "Mini Torta Devil's Food .jpeg",
        "porciones": "2 porciones",
        "precio": "12000",
        "cantidad": "0"
    },
    "Torta de Choco-Maní (2 Porciones)": {
        "title": "Torta de Choco-Maní (2 Porciones)",
        "description": "Exquisita torta de chocolate rellena de crema choco-maní, cubierta de una ligera crema de maní achocolatada, drip y borde de maní salado.",
        "urlImage": "Torta de Choco-Maní.jpeg",
        "porciones": "de 4 a 6 porciones",
        "precio": "24900",
        "cantidad": "0"
    },
    "Torta Capuchino Tentación": {
        "title": "Torta Capuchino Tentación",
        "description": "Jugoso y suave bizcocho relleno de trufa capuchino, cubierto con chantilly de café y ganache de chocolate.",
        "urlImage": "Torta Capuchino Tentación.jpeg",
        "porciones": "de 4 a 6 porciones",
        "precio": "24900",
        "cantidad": "0"
    },
    "Torta Red Velvet ": {
        "title": "Torta Red Velvet ",
        "description": "Pastel de Chocolate relleno y cubierto de una suave y rica butter cream con queso crema.",
        "urlImage": "Torta Red Velvet.jpeg",
        "porciones": "de 4 a 6 porciones",
        "precio": "24900",
        "cantidad": "0"
    },
    "Torta Angel's Food": {
        "title": "Torta Angel's Food",
        "description": "Suave y esponjoso bizcocho de vainilla natural, relleno de ganache de chocolate blanco, cubierto de la más rica y ligera butter cream.",
        "urlImage": "Torta Angel's Food .jpeg",
        "porciones": "de 4 a 6 porciones",
        "precio": "24900",
        "cantidad": "0"
    },
    "Torta de Óreo": {
        "title": "Torta de Óreo",
        "description": "Exquisita torta húmeda de chocolate: rellena de ganache blanco, cubierta con chantilly, dripping de chocolate y galleta óreo.",
        "urlImage": "Torta de Óreo .jpeg",
        "porciones": "de 4 a 6 porciones",
        "precio": "24900",
        "cantidad": "0"
    },
    "Torta de Zanahoria": {
        "title": "Torta de Zanahoria",
        "description": "Encantadora torta de zanahoria aliñada con naranja, canela, jengibre, nuez moscada, frutos secos y un delicioso relleno y cubierta del más rico frosting de queso crema.",
        "urlImage": "Torta de Zanahoria.jpeg",
        "porciones": "de 4 a 6 porciones",
        "precio": "24900",
        "cantidad": "0"
    },
    "Torta Devil's Food": {
        "title": "Torta Devil's Food",
        "description": "Exquisita torta húmeda de chocolate rellena y cubierta de fudge de chocolate.",
        "urlImage": "Torta Devil's Food.jpeg",
        "porciones": "de 4 a 6 porciones",
        "precio": "24900",
        "cantidad": "0"
    },
    "Torta María Luisa Frutos Rojos": {
        "title": "Torta María Luisa Frutos Rojos",
        "description": "Riquísimo y clásico ponqué de vainilla natural, con relleno y toping de confitura artesanal de frutos rojos y un contorno de la más ligera buttercream (840g)",
        "urlImage": "Torta María Luisa Frutos Rojos.jpeg",
        "porciones": "de 4 a 6 porciones",
        "precio": "24900",
        "cantidad": "0"
    },
    "María Luisa Frutos Amarillos": {
        "title": "María Luisa Frutos Amarillos",
        "description": "Riquísimo y clásico ponqué de vainilla natural, con relleno y toping de confitura artesanal de frutos amarillos y un contorno de la más ligera buttercream (840g)",
        "urlImage": "María Luisa Frutos Amarillos.jpeg",
        "porciones": "de 8 a 12",
        "precio": "0",
        "cantidad": "0"
    },
    "Torta María Luisa Dulce De Leche": {
        "title": "Torta María Luisa Dulce De Leche",
        "description": "Riquísimo y clásico ponqué de vainilla natural, con relleno y toping de dulce de leche y un contorno de la más ligera buttercream (840g).",
        "urlImage": "Torta María Luisa Dulce De Leche.jpeg",
        "porciones": "de 4 a 6 porciones",
        "precio": "24900",
        "cantidad": "0"
    },
    "Galletas New York": {
        "title": "Galletas New York",
        "description": "La mejor versión de un clásico, riquísimas galletas con trozos de chocolate oscuro y nueces partidas.",
        "urlImage": "Galletas New York.jpeg",
        "porciones": 1,
        "precio": "0",
        "cantidad": "0"
    },
    "Galletas Cafecitas": {
        "title": "Galletas Cafecitas",
        "description": "Las mejores galletas de café: suaves, frescas, sabor especial. Cajita de 7 galletas",
        "urlImage": "Galletas Cafecitas.jpeg",
        "porciones": "7 unidades",
        "precio": "0",
        "cantidad": "0"
    },
    "Alfajores Mix": {
        "title": "Alfajores Mix",
        "description": "Exquisita selección de alfajores rellenos de: dulce de leche (x4), confitura de frutos rojos (x2), confitura de frutos amarillos (x2) tamaño mediano (360 g)",
        "urlImage": "Alfajores Mix.jpeg",
        "porciones": "8 Medianos",
        "precio": "0",
        "cantidad": "0"
    },
    "Alfajores de Frutos Amarillos": {
        "title": "Alfajores de Frutos Amarillos",
        "description": "Irresistibles alfajores rellenos con una reducción de frutos amarillos; Maracuyá, Uchuva, Mango, Tomate de árbol (320g)",
        "urlImage": "Alfajores de Frutos Amarillos.jpeg",
        "porciones": "8 Medianos",
        "precio": "0",
        "cantidad": "0"
    },
    "Alfajores de Frutos Rojos": {
        "title": "Alfajores de Frutos Rojos",
        "description": "Vibrantes alfajores rellenos con una reducción de Frutos Rojos; Fresa, Mora, Cereza, Tomate de árbol (320g)",
        "urlImage": "Alfajores de Frutos Rojos.jpeg",
        "porciones": "8 Medianos",
        "precio": "0",
        "cantidad": "0"
    },
    "Alfajor Tradicional": {
        "title": "Alfajor Tradicional",
        "description": "Clásicos alfajores rellenos de dulce de leche, tamaño mediano x8 unidades (320 g).",
        "urlImage": "Alfajor Tradicional.jpeg",
        "porciones": "8 Medianos",
        "precio": "0",
        "cantidad": "0"
    },
    "Alfajor Marplatense": {
        "title": "Alfajor Marplatense",
        "description": "Irresistible alfajor de chocolate con notas cítricas de limón y naranja, relleno del más rico dulce de leche y cubierto por un divino chocolate oscuro de la mejor calidad.",
        "urlImage": "Alfajor Marplatense .jpeg",
        "porciones": "1 Extra Grande 150 g",
        "precio": "0",
        "cantidad": "0"
    },
    "Cinnamon Roll's x9": {
        "title": "Cinnamon Roll's",
        "description": "Exquisitos rollos de canela bañados con un delicado frosting de queso crema.",
        "urlImage": "Cinnamon Roll's (Bandeja X9 Rollos).jpeg",
        "porciones": " Bandeja X9 Rollos",
        "precio": "0",
        "cantidad": "0"
    },
    "Cinnamon Roll's x4": {
        "title": "Cinnamon Roll's",
        "description": "Exquisitos rollos de canela bañados con un delicado frosting de queso crema.",
        "urlImage": "Cinnamon Roll's (Paquete X4 Rollos).jpeg",
        "porciones": " Bandeja X4 Rollos",
        "precio": "0",
        "cantidad": "0"
    }
}

const catalogo = document.getElementById("catalogo");
const rootPath = './static/img';

//handlerPanel:
const correntPanel = document.getElementById("correntPanel");
const form = document.getElementById("form");

// Paginacion: 
let inicio=0, fin=9;
let pagina_actual = 1;
const limit = 9;
const items = Object.keys(data);
const paginas = Math.ceil(items.length / limit);

const ListItems = new SelectedItems();


// .jpeg
/*
newData= data.map((product)=>{
    if(product.title.includes("Mini")){
        product.porciones="de 2 a 4";
    }else if(product.title.includes("Torta")){
        product.porciones="de 4 a 6";
    }else if(product.title.includes("X3")){
        product.porciones=" 3 ";
    }else if(product.title.includes("X8")){
        product.porciones=" 8 ";
    }else if(product.title.includes("X9")){
        product.porciones=" 9 ";
    }else if(product.title.includes("X4")){
        product.porciones=" 4 ";
    }

    
    return product;
});

newData= data.map((product)=>{
    
    dir.forEach((path)=>{
        console.log(`${product.title.includes(path)} title: ${product.title} path: ${path}`)
        if(product.title.includes(path)){
            console.log(path)
            product.urlImage=`${path}.jpeg`;
        }
    });

    
    return product;
});


let toJson={};

data.forEach((item)=>{
    toJson[`${item.title}`] = item;
}

keys= Object.keys(data);

keys.forEach((key)=>{
    let item=data[key];
    item["cantidad"]="0";   
    if(item.title.includes("Mini")){
        item["precio"]="12000";
        item.porciones= "2 porciones"
    }else if(item.title.includes("Torta")){
        item["precio"]="24900";
        item.porciones= "de 4 a 6 porciones"
    }else if(data[key].title.includes("Postre")){
        item["precio"]="6000";
        item.porciones="1 de 5 Oz (100 G)"
    }else{
        item["precio"]="0";
       
    }
});
*/