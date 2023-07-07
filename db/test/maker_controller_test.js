const MarkerController= require('../../controllers/markerController');
const {db}= require('../../prisma/client');
async function testMarker() {
  const marker = new MarkerController(db);
  console.log("Iniciando prueva de Marker controller ...");
  try {
    console.log(`metodo createMany`);
    const result = await marker.createMany([
      "Samsung",
      "Aiwa",
      "Nuokia",
      "Oster",
    ]);

    console.log(`Filas afectadas: ${result}`);
    console.log(`metodo create`)
    const mark = await marker.create("Mabe");
    console.log(mark);
    const { name } = mark;
    console.log(`metodo delete`)
    await marker.delete(name);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    return;
  }
}

module.exports = { testMarker };
