const {db}= require('../../prisma/client');
const MarkerController= require('../../controllers/markerController');

  async function testConnection(){
  
    console.log("Iniciando prueva de conoccion ...");
    try {
        await db.$connect()
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }finally {
        return 
      }
  }

  async function testMarker(){
    const marker=new MarkerController(db);
    console.log("Iniciando prueva de Marker controller ...");
    try {
        const mark=await marker.create("Mabe")
         console.log(mark)
         const {name}=mark;
         await marker.delete(name)
        
        return true;
      } catch (error) {
        console.error(error);
        return false;                                                                                                                                                                                
      }finally {
        return 
      }
  }
  
  module.exports = {testConnection, testMarker};