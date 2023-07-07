const { SupplierController } = require("../../controllers/supplierController");
const { db } = require("../../prisma/client");

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
    ingredient: { 3: 550, 4: 250 },
    marker_id: 1,
  },
];

const newSupplier = {
  name: "D1",
  address: "cr51 calle no me acuerdo altura tampoco",
  phone: "555 55 sinCorriente",
};

async function testSupplier() {
  const supplier = new SupplierController(db);
  console.log("Iniciando prueva de Item controller ...");
  try {
    console.log(`metodo update`);
    console.table(await supplier.getOne(6));
    await supplier.update({
      name: "D1",
      address: "cr51 calle no me acuerdo altura tampoco",
      phone: "555 55 sinCorriente",
    },6)
    console.table(await supplier.getOne(6));
    console.log("###".repeat(40));
    console.log(`metodo create`);

    const item1 = await supplier.create(newSupplier);
    console.table(item1);
    console.log("###".repeat(50));

    console.log(`metodo getOne`);
    const Sp = await supplier.getOne(item1.id);
    console.table(JSON.stringify(Sp));
    console.log("###".repeat(50));
    console.log(`metodo addItem`);

    const itemAdded = await supplier.addItem({
      cost: 15000,
      item_id: 2,
      supplier_id: Sp.id,
    });
    console.table(itemAdded);

    console.log(`metodo getAll`);
    const SpAll = await supplier.getAll();
    console.table(JSON.stringify(SpAll));
    console.log("###".repeat(50));
    console.log(`metodo getByType`);

    console.log(`__________TODO ...`);
    console.log(`metodo getByMarker`);

    console.log(`__________TODO ...`);
    console.log(`metodo delete`);
    await supplier.delete(item1.id);
    return true;
    
  } catch (error) {
    console.error(error);
    return false;    
  }
  
}

module.exports = { testSupplier };
