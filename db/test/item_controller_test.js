const { ItemController } = require("../../controllers/itemsController");
const { db } = require("../../prisma/client");

item=new ItemController(db);
/*
  {
  name,
  type,
  cost, 
  ingredient: "{id:cantidad,id2:cantidad,id3:cantidad}",
  marker_id Int
}
  */
const dataTest = [
  {
    name: "Pulidora",
    type: "tool",
    cost: 350000,
    ingredient: null,
    marker_id: 2,
  },
  {
    name: "Margarian sin sal",
    type: "ingrediente simple",
    cost: 6500,
    ingredient: null,
    marker_id: 1,
  },
  {
    name: "azucar morena",
    type: "ingrediente simple",
    cost: 7200,
    ingredient: null,
    marker_id: 4,
  },
  {
    name: "butterCream",
    type: "ingrediente avanzado",
    cost: 6500,
    ingredient: {3:550,4:250},
    marker_id: 1,
  },
];
async function testItem() {
  const item = new ItemController(db);
  console.log("Iniciando prueva de Item controller ...");
  try {
  /*  console.log(`metodo create`);
    const item1=await item.create(dataTest[0]);
    const item2=await item.create(dataTest[1]);
    const item3=await item.create(dataTest[2]);
    const item4=await item.create(dataTest[3]);
    console.table([item1, item2, item3, item4]);
      console.log('###'.repeat(50));
      */
    console.log(`metodo getOne`);
      const product=await item.getOne(4)
      console.log(`Paructo: ${JSON.stringify(product)}`);
     console.log('###'.repeat(50));
    console.log(`metodo getAll`);
    const products=await item.getAll()
    console.table(products)
     console.log('###'.repeat(50));
    console.log(`metodo getByType`);
    const productsByType=await item.getByType('ingrediente simple')
    console.table(productsByType)
    console.log(`__________TODO ...`);
    console.log(`metodo getByMarker`);
    const productsByMaker=await item.getByMarker(2)
    console.table(productsByMaker)
    console.log(`__________TODO ...`);
    console.log(`metodo delete`);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  } 
}

module.exports = { testItem };
