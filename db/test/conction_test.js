const {sequelize}= require('../db');


  async function testConnection(){

    try {
        await sequelize.authenticate();
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }finally {
        sequelize.close()
      }
  }
  
  module.exports = {testConnection};