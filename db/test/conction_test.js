const {db}= require('../../prisma/client');


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

  
  
  module.exports = {testConnection}